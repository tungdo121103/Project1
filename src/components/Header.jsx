import logo from "../assets/vify-logo.png";
import "../styles/header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  // 👉 chỉ áp dụng cho 3 trang này
  const specialPages = ["/whyChoose", "/blog", "/partners","/about","/privacyPolicy"];
  const isSpecialPage = specialPages.some((path) =>
    location.pathname.startsWith(path),
  );

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        isSpecialPage ? "header-overlay header-large" : "custom-navbar"
      } px-4 d-flex align-items-center justify-content-between`}
    >
      {/* LOGO */}
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="logo" width="100" />
      </Link>

      {/* MENU */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {isSpecialPage ? (
            <>
              <li className="nav-item">
                <Link className="navLink" to="/">
                  VIFY ORDER PRINTER – PDF INVOICE
                </Link>
              </li>

              <li className="nav-item">
                <Link className="navLink" to="/whyChoose">
                  WHY CHOOSE VIFY
                </Link>
              </li>

              <li className="nav-item">
                <Link className="navLink" to="/partners">
                  PARTNERS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="navLink" to="/blog">
                  BLOG
                </Link>
              </li>

              <li className="nav-item">
                <Link className="navLink" to="/about">
                  ABOUT VIFY
                </Link>
              </li>
            </>
          ) : (
            /* MENU TRANG HOME */
            <>
              <li className="nav-item">
                <a className="navLink" href="/#features">
                  FEATURES
                </a>
              </li>

              <li className="nav-item">
                <a className="navLink" href="/#screenShots">
                  SCREENSHOTS
                </a>
              </li>

              <li className="nav-item">
                <Link className="navLink" to="/whyChoose">
                  WHY CHOOSE VIFY
                </Link>
              </li>

              <li className="nav-item">
                <a className="navLink" href="/#faq">
                  FAQ
                </a>
              </li>

              <li className="nav-item">
                <Link className="navLink" to="/partners">
                  PARTNERS
                </Link>
              </li>

              <li className="nav-item">
                <Link className="navLink" to="/blog">
                  BLOG
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* BUTTON */}
      <a
        href="https://apps.shopify.com/vify-order-printer"
        className="btn-get-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GET APP
      </a>
    </nav>
  );
}

export default Header;
