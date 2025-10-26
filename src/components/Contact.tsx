import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:dg997678@gmail.com" data-cursor="disable">
                dg997678@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+9199999999" data-cursor="disable">
                +57 300 455 6577
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/DamianDev0"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/damian-garcia-b0881327a/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
        
           
          </div>
          <div className="contact-box">
        
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
