import "./styles/About.css";
import TextPressure from "./TextPressure";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <TextPressure
          text="aboutme"
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
        <p className="para">
          I&apos;m a multidisciplinary developer passionate about crafting
          immersive digital experiences through code and design. I focus on
          modern technologies, performance, and user-centered interfaces to turn
          complex ideas into simple, elegant, and meaningful products.
        </p>
      </div>
    </div>
  );
};

export default About;
