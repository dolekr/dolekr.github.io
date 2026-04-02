import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
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

    document.querySelectorAll('.reveal').forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
