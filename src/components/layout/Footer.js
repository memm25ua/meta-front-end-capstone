import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoWhiteImage from "./assets/logo-white.png";
import pages from "../../utils/pages";
import { faEnvelope, faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <img
          className="site-footer-logo"
          src={logoWhiteImage}
          alt="Logo"
        />
        <nav className="site-footer-nav">
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer-contact">
          <FontAwesomeIcon icon={faLocation} /> 678 Pisa Ave, Chicago, IL 60611
          <br />
          <FontAwesomeIcon icon={faPhone}/> (312) 593-2744
          <br />
          <FontAwesomeIcon icon={faEnvelope} /> customer@littlelemon.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
