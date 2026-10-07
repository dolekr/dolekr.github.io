import { test, expect, type Page } from '@playwright/test'
import { experiences } from '../src/data/resume'

const menuItem = (page: Page, name: string) =>
  page.getByRole('navigation').getByRole('button', { name, exact: true })

test('home page shows all sections', async ({ page }) => {
  await page.goto('/')
  for (const id of ['home', 'about', 'projects', 'contact']) {
    await expect(page.locator(`#${id}`)).toBeAttached()
  }
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible()
})

test('menu highlight follows scrolling from the first load', async ({
  page,
}) => {
  await page.goto('/')
  await expect(menuItem(page, 'home')).toHaveAttribute(
    'aria-current',
    'location',
  )
  await page.locator('#projects').scrollIntoViewIfNeeded()
  await page.mouse.wheel(0, 200)
  await expect(menuItem(page, 'projects')).toHaveAttribute(
    'aria-current',
    'location',
  )
})

test('"See my projects" scrolls to the projects', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'See my projects' }).click()
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeInViewport()
})

test('project card opens and its picture opens the gallery', async ({
  page,
}) => {
  await page.goto('/')
  const card = page.getByRole('img', { name: 'Unizone – University App' })
  await card.click()
  const firstPicture = page.getByRole('img', {
    name: 'Unizone – University App – picture 1',
  })
  await expect(firstPicture).toBeVisible()
  await firstPicture.click()
  await expect(page.locator('.p-galleria img')).toBeVisible()
})

test('resume lists every experience and links back to projects', async ({
  page,
}) => {
  await page.goto('/resume')
  for (const { company } of experiences) {
    await expect(page.getByText(company, { exact: true })).toBeVisible()
  }
  await menuItem(page, 'projects').click()
  await expect(page).toHaveURL('/')
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeInViewport()
})

test.describe('with reduced motion', () => {
  test.use({ reducedMotion: 'reduce' })

  test('content is visible at once and the menu jumps', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#about .reveal').first()).toHaveCSS(
      'opacity',
      '1',
    )
    await menuItem(page, 'projects').click()
    const projectsTop = await page
      .locator('#projects')
      .evaluate((el) => el.getBoundingClientRect().top)
    expect(Math.abs(projectsTop)).toBeLessThan(2)
  })
})

test('scroll-to-top button brings the page back up', async ({ page }) => {
  await page.goto('/')
  const scrollTop = page.locator('.p-scrolltop')
  await expect(scrollTop).toBeHidden()
  await page.mouse.wheel(0, 2000)
  await expect(scrollTop).toBeVisible()
  await scrollTop.click()
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0)
})
