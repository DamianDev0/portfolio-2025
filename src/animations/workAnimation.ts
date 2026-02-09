import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initWorkAnimation = () => {
  const boxes = document.querySelectorAll<HTMLElement>(".work-box");
  const container = document.querySelector<HTMLElement>(".work-container");
  const section = document.querySelector<HTMLElement>(".work-section");

  if (!boxes.length || !container || !section) return;

  const isMobile = window.innerWidth <= 1024;
  const flex = boxes[0].parentElement!;
  const boxWidth = boxes[0].getBoundingClientRect().width;
  const lastBoxEnd = flex.getBoundingClientRect().left + boxWidth * boxes.length;
  const containerEnd = container.getBoundingClientRect().right;
  const translateX = lastBoxEnd - containerEnd + 100;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: `+=${translateX}`,
      scrub: isMobile ? 0.6 : true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
};
