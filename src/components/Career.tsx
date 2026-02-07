import { careerData } from "../data/Career";
import "./styles/Career.css";

const Career = () => {
  return (
    <section className="career-section section-container">
      <div className="career-container">
        <h2 className="title">My career & experience</h2>

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
