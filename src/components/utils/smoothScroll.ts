import Lenis from 'lenis';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export interface SmoothScroller {
  scrollTop: (value: number) => void;
  scrollTo: (target: string, animate?: boolean) => void;
  paused: (value: boolean) => void;
  refresh: () => void;
  destroy: () => void;
}

let lenis: Lenis | null = null;

export const createSmoothScroller = (): SmoothScroller => {
  // Initialize Lenis with better settings for horizontal scroll compatibility
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    wheelMultiplier: 1,
    touchMultiplier: 2,
  });

  // Connect Lenis with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // Use requestAnimationFrame for Lenis animation loop
  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return {
    scrollTop: (value: number) => {
      if (lenis) {
        lenis.scrollTo(value, { immediate: true });
      }
    },
    
    scrollTo: (target: string, animate = true) => {
      if (lenis) {
        if (animate) {
          lenis.scrollTo(target, {
            offset: 0,
            duration: 1.5,
            easing: (t: number) => 1 - Math.pow(1 - t, 3), // easeOutCubic
          });
        } else {
          lenis.scrollTo(target, { immediate: true });
        }
      }
    },
    
    paused: (value: boolean) => {
      if (lenis) {
        if (value) {
          lenis.stop();
        } else {
          lenis.start();
        }
      }
    },
    
    refresh: () => {
      ScrollTrigger.refresh();
    },

    destroy: () => {
      if (lenis) {
        lenis.destroy();
        lenis = null;
      }
    }
  };
};

// Export lenis instance for other components
export const getLenisInstance = () => lenis;

