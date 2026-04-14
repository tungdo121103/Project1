import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import anhdep from "../assets/anhdep.png";
import Features from "./Features";
import ScreenShots from "./ScreenShots";
import Faq from "./Faq";
function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="HomePage">
      <section className="hero" id="hero">
        {/* container chỉ để căn giữa nội dung */}
        <div className="container hero-content">
          <img src={anhdep} alt="anhdep" width="200"></img>
          <h1>Shopify Order Printer PDF Invoice</h1>
          <p>Customize professional invoice easily width no-code</p>

          <div className="mt-3">
            <a
              href="https://apps.shopify.com/vify-order-printer"
              className="btn-link-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View App
            </a>
            <a
              href="/contactVify"
              className="btn-link-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
      <section id="screenShots" className="screenShots-section">
        <ScreenShots />
      </section>
      <section className="features-section" id="features">
        <Features />
      </section>
      <section className="faq-section"  id="faq">
        <Faq />
      </section>
    </div>
  );
}
export default Home;
