import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { createSmoothScroller, SmoothScroller } from "./utils/smoothScroll";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let smoother: SmoothScroller;

const Navbar = () => {
  useEffect(() => {
    smoother = createSmoothScroller();

    smoother.scrollTop(0);
    smoother.paused(false);

    const links = document.querySelectorAll(".header ul a");
    for (const elem of links) {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.dataset.href;
          if (section) {
            smoother.scrollTo(section, true);
          }
        }
      });
    }
    window.addEventListener("resize", () => {
      smoother.refresh();
    });
  }, []);
  return (
    <>
      <div className="header">
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
