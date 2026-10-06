import { onMounted, onUnmounted, type ShallowRef } from 'vue'

/** Fades in the `.reveal` elements inside `root` when they scroll into view. */
export function useReveal(root: Readonly<ShallowRef<HTMLElement | null>>) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    root.value
      ?.querySelectorAll('.reveal')
      .forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
