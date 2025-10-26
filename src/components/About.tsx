import "./styles/About.css";
import TextPressure from "./TextPressure";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <TextPressure
          text="About Me"
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
        <p>
          I'm a highly accomplished and visionary full stack developer with a{" "}
          proven record of leading high-impact software solutions for complex{" "}
          business needs. I specialize in domain-driven design, clean{" "}
          architecture, and scalable cloud-native systems that transform{" "}
          cross-functional strategies into resilient, user-centered products.
        </p>
      </div>
    </div>
  );
};

export default About;
