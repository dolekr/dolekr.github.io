/** Smooth scrolling, or an instant jump when the visitor prefers reduced motion. */
export function preferredScrollBehavior(): ScrollBehavior {
  return matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'instant'
    : 'smooth'
}
