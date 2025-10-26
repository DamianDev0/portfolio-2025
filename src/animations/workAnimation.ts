import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initWorkAnimation = () => {
  const boxes = document.querySelectorAll<HTMLElement>(".work-box");
  const container = document.querySelector<HTMLElement>(".work-container");
  const section = document.querySelector<HTMLElement>(".work-section");

  if (!boxes.length || !container || !section) return;

  const rectLeft = container.getBoundingClientRect().left;
  const boxWidth = boxes[0].getBoundingClientRect().width;
  const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
  const padding =
    parseInt(window.getComputedStyle(boxes[0]).padding || "0", 10) / 2;

  const translateX = boxWidth * boxes.length - (rectLeft + parentWidth) + padding;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: `+=${translateX}`,
      scrub: true,
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
