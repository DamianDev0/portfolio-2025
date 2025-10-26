import { createSplitText, SplitTextResult } from "./customSplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingTextElements = document.querySelectorAll('.landing-info h3, .landing-intro h2, .landing-intro h1');
  const allChars: HTMLElement[] = [];
  
  for (const element of landingTextElements) {
    const splitResult = createSplitText(element as HTMLElement, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    allChars.push(...splitResult.chars);
  }
  gsap.fromTo(
    allChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const TextProps = { type: "chars,lines", linesClass: "split-h2" };

  const landingText2Element = document.querySelector(".landing-h2-info") as HTMLElement;
  let landingText2: SplitTextResult | null = null;
  if (landingText2Element) {
    landingText2 = createSplitText(landingText2Element, TextProps);
    gsap.fromTo(
      landingText2.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landingText3Element = document.querySelector(".landing-h2-info-1") as HTMLElement;
  const landingText4Element = document.querySelector(".landing-h2-1") as HTMLElement;
  const landingText5Element = document.querySelector(".landing-h2-2") as HTMLElement;
  
  let landingText3: SplitTextResult | null = null;
  let landingText4: SplitTextResult | null = null;
  let landingText5: SplitTextResult | null = null;
  
  if (landingText3Element) {
    landingText3 = createSplitText(landingText3Element, TextProps);
  }
  if (landingText4Element) {
    landingText4 = createSplitText(landingText4Element, TextProps);
  }
  if (landingText5Element) {
    landingText5 = createSplitText(landingText5Element, TextProps);
  }

  if (landingText2 && landingText3) {
    LoopText(landingText2, landingText3);
  }
  if (landingText4 && landingText5) {
    LoopText(landingText4, landingText5);
  }
}

function LoopText(Text1: SplitTextResult, Text2: SplitTextResult) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
