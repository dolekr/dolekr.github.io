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

const headings = (page: Page, level: number) =>
  page.getByRole('heading', { level }).allInnerTexts()

test('pages have one h1 and a section heading outline', async ({ page }) => {
  await page.goto('/')
  expect(await headings(page, 1)).toEqual(['KRISTYNA\nDOLEZALOVA'])
  expect(await headings(page, 2)).toEqual(['ABOUT', 'PROJECTS', 'CONTACT'])

  await page.goto('/resume')
  expect(await headings(page, 1)).toEqual(['KRISTYNA\nDOLEZALOVA'])
  expect(await headings(page, 2)).toEqual([
    'SKILLS',
    'EDUCATION',
    'EXPERIENCE',
    'CONTACT',
  ])
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

test('keyboard users can copy the email and open the gallery', async ({
  page,
}) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Copy email address' }).focus()
  await page.keyboard.press('Enter')
  await expect(page.getByText('Copied!')).toBeVisible()

  await page
    .getByRole('button', { name: 'Unizone – University App', exact: true })
    .focus()
  await page.keyboard.press('Enter')
  await page
    .getByRole('button', {
      name: 'Open Unizone – University App picture 2 in full screen',
    })
    .focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('.p-galleria img')).toHaveAttribute(
    'alt',
    'Unizone – University App – picture 2',
  )
})

test.describe('on a phone', () => {
  test.use({ viewport: { width: 390, height: 800 } })

  test('menu button reports whether the menu is open', async ({ page }) => {
    await page.goto('/')
    const toggle = page.getByRole('button', { name: 'Toggle menu' })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const menuId = await toggle.getAttribute('aria-controls')
    await expect(page.locator(`#${menuId}`)).toBeVisible()
  })
})

test('photo and external link are described for screen readers', async ({
  page,
}) => {
  await page.goto('/')
  await expect(
    page.getByRole('img', { name: 'Portrait of Kristýna Doležalová' }),
  ).toBeAttached()
  await expect(
    page.getByRole('link', { name: /LinkedIn.*opens in a new tab/i }),
  ).toBeAttached()
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
