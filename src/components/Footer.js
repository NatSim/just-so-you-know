import "../components/Footer.css";
import { ReactComponent as JustSoYouKnowLogo } from "../images/logo_jsyk.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-content-container">
            <div className="logo-spacing">
              <JustSoYouKnowLogo
                className="footer-logo"
                alt="just so you know logo"
              />
            </div>
            <div>hello@justsoyouknow.com</div>
          </div>
          <div className="footer-content-container">
            <ul>
              <li>Quick links</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
