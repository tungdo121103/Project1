import imghome from "../assets/logo.png";
import "../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-custom">
      <div className="footer-container">
        <div className="footer-left">
          <a href="/">
            <img src={imghome} alt="logo" />
          </a>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <div className="footer-title">INFOMATION</div>
            <ul className="footer-list">
              <li>
                <Link to="/about">About Vify</Link>
              </li>
              <li>
                <Link to="/partners">Vify Partners</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="footer-title">POLICY</div>
            <ul className="footer-list">
              <li>
                <Link to="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/contactVify">Contact Vify</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="img-line"></div>
    </footer>
  );
}
export default Footer;
