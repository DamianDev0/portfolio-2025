import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useGSAP } from "@gsap/react";
import { initWorkAnimation } from "../animations/workAnimation";
import { WORK_ITEMS } from "../data/WorkItems";

const Work = () => {
  useGSAP(() => {
    const cleanup = initWorkAnimation();
    return cleanup;
  }, []);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="title">MY WORK</h2>

        <div className="work-flex">
          {WORK_ITEMS.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <p className="work-description">{item.description}</p>
                <h4>Tools and features</h4>
                <p>{item.tools}</p>
              </div>
              <WorkImage image={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
