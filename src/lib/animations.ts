/**
 * Shared Framer Motion animation variants used across the app.
 */

/**
 * A static `whileInView` fade-up preset.
 * Spread directly onto a motion element, optionally override `transition.delay`.
 *
 * @example
 * <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} />
 */
export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
};

/**
 * A factory that returns an `animate` (not `whileInView`) fade-up preset
 * with a configurable delay — intended for hero / above-the-fold elements
 * that should animate in on mount rather than on scroll.
 *
 * @example
 * <motion.h1 {...fadeUpAnimate(0.3)} />
 */
export const fadeUpAnimate = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});

/**
 * A factory that returns a `whileInView` fade-up preset with a configurable
 * delay — for scroll-triggered sections that need per-item staggering.
 *
 * @example
 * <motion.div {...fadeUpView(0.2)} />
 */
export const fadeUpView = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const, delay },
});
