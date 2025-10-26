import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          <div className="title-line">
            <span className="what-h2">WHAT</span>
          </div>
          <div className="title-line">
            <span className="i-h2">I</span>
            <span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>SOFTWARE &amp; MOBILE DEVELOPMENT</h3>
              <h4>Description</h4>
              <p>
                I design, build, and launch high-impact mobile and web products
                with React Native, React, and TypeScript, pairing intuitive UX
                with robust backend services. From feature ideation to
                production deployment, I rely on SOLID principles and automated
                pipelines to keep releases reliable and scalable.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">React Native</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">NestJS</div>
                <div className="what-tags">Expo</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">SQL</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* DESIGN */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ARCHITECTURE &amp; DELIVERY</h3>
              <h4>Description</h4>
              <p>
                I partner with cross-functional teams to shape resilient
                systems, translating business goals into well-structured
                services and design systems. Domain-driven design, atomic design
                principles, and data-driven experimentation help me ship
                experiences that scale with confidence.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Domain-Driven Design</div>
                <div className="what-tags">Clean Architecture</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">Event-Driven</div>
                <div className="what-tags">Azure</div>
                <div className="what-tags">Google Cloud</div>
                <div className="what-tags">Stripe</div>
                <div className="what-tags">Redux</div>
                <div className="what-tags">Atomic Design</div>
                <div className="what-tags">Git</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
