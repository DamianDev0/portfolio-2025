import { careerData } from "../data/Career";
import "./styles/Career.css";
import TextPressure from "./TextPressure";

const Career = () => {
  return (
    <section className="career-section section-container">
      <div className="career-container">
        <div className="career-title-container">
          <TextPressure
            text="My career & experience"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#E6C3FF"
            strokeColor="#000"
            minFontSize={36}
          />
        </div>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot" />
          </div>

          {careerData.map((item, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.title}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
