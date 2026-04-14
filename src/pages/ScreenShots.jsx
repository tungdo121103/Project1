import { useState } from "react";
import anh1 from "../assets/shopify1.png";
import anh2 from "../assets/shopify2.png";
import anh3 from "../assets/shopify3.png";
import anhip from "../assets/ip.png";
import icon1 from "../assets/icon1.png"; // Thay bằng đường dẫn ảnh icon của bạn
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import "../styles/screenshots.css";
function ScreenShots() {
  const images = [anh1, anh2, anh3];
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const ScreenData = [
    {
      icon: icon1,
      title: "Professional Invoices",
      desc: (
        <>
          The{" "}
          <span className="highlight-color">
            <strong>Vify Order Printer PDF Invoice</strong>
          </span>{" "}
          app is an expert solution for creating professional, beautifully
          designed invoices for online Shopify stores.
        </>
      ),
    },
    {
      icon: icon2,
      title: "Easy Customization",
      desc: (
        <>
          Easy to customize, even for users with no coding knowledge—this is
          exclusively available in the Vify{" "}
          <span className="highlight-color">
            <strong>Order Printer</strong>
          </span>{" "}
          PDF Invoice app.
        </>
      ),
    },
    {
      icon: icon3,
      title: "Automation Workflow",
      desc: (
        <>
          Vify Order Printer{" "}
          <span className="highlight-color">
            <strong>PDF Invoice</strong>
          </span>{" "}
          streamlines automated workflows to optimize operational time while
          helping Shopify store owners save on costs.
        </>
      ),
    },
    {
      icon: icon4,
      title: "Always-On Support",
      desc: (
        <>
          Vify offers fast 24/7 support. Contact us anytime to share your needs
          for{" "}
          <span className="highlight-color">
            <strong>invoice creation</strong>
          </span>{" "}
          and printing—we're always ready to help.
        </>
      ),
    },
  ];
  return (
    <div className="screenshots-wrapper">
      <div className="screenshots-frist">
        <div className="text-center">
          <h4>INVOICE TEMPLATE LIBRARY</h4>
          <h2>A Quick View In Screens</h2>
          <p>
            Creating invoices has never been easier. Simply choose a template
            that fits your business from Vify’s template library, then customize
            the fields to match your specific needs. With powerful customization
            features, you can easily tailor your invoices without any coding
            knowledge. This level of flexibility is only available with{" "}
            <span className="highlight-link">
              <a
                href="https://vify.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Shopify order printer</strong>
              </a>
            </span>{" "}
            & PDF invoice app.
          </p>
        </div>
      </div>

      {/* SLIDER */}
      <div className="slider-container">
        {/* PREV */}
        <button className="nav-btn prev" onClick={prevSlide}>
          PREVIOUS
        </button>

        {/* SLIDER */}
        <div className="slider">
          <img
            src={images[(index - 1 + images.length) % images.length]}
            className="side-img left-img"
            alt=""
          />

          <div className="phone-frame">
            <img src={anhip} className="frame-img" alt="Phone Frame" />
            <div className="screen-content">
              <img src={images[index]} alt="" />
            </div>
          </div>

          <img
            src={images[(index + 1) % images.length]}
            className="side-img right-img"
            alt=""
          />
        </div>

        {/* NEXT */}
        <button className="nav-btn next" onClick={nextSlide}>
          NEXT
        </button>
      </div>
      <hr></hr>
      <div className="screen-second">
        <div className="screen-header text-center">
          <h4 className="sub-title">INTRODUCING</h4>
          <h2 className="main-title">Shopify Order Printer PDF Invoice App</h2>
          <p className="description">
            Vify is a powerful and reliable{" "}
            <strong>Shopify order printer</strong> PDF invoice app built to help
            merchants create professional invoices with ease. By combining
            flexible customization, automated workflows, and a user-friendly
            interface that requires no coding skills, Vify streamlines order
            management and helps store owners save time while delivering a
            polished, professional experience to their customers.
          </p>
        </div>

        <div className="screen-grid">
          {ScreenData.map((f, i) => (
            <div key={i} className="feature-item">
              <div className="feature-icon">
                <img src={f.icon} alt={f.title} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default ScreenShots;
