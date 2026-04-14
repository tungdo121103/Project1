import React, { useState, useEffect, useRef } from "react";
import anhip from "../assets/anhIp2.png";
import anhicon from "../assets/anhfeatures1.png";
import anhInvoice from "../assets/anhfeatures2.png";
import "../styles/features.css";
const Features = () => {
  const testimonials = [
    {
      text: "Great little app for invoicing, all the key features are unlocked with the free version as well! Customer service was really responsive and even removed the watermark for free! dont see that too often.",
      author: "Choc'd Full",
      job: "UI/UX Designer",
    },
    {
      text: "Really good and helpful app that helps to have orders and invoices at one place. Support is amazing.",
      author: "Goody Shop SK",
      job: "UI/UX Designer",
    },
    {
      text: "Vify order printer PDF invoice app, very simple to set up and use once installed and no coding or mass editing required on my part. Like that it has a free option for those of us just getting started and figuring this all out. Will definitely upgrade with this app once the time comes.",
      author: "Make Your Mark Printing",
      job: "CEO",
    },
    {
      text: "Great app. Really gets the job done for us. Lots of options and templates to choose from. Had an issue customizing specific details of our invoice. Used their chat to get assistance. Tracy was very helpful. She answered all of my questions and helped guide me to get the best results for what we need. Very highly recommend this app to other merchants. They have lots of other services that will be exploring also.",
      author: "Hot Miami Shoes",
      job: "Other Client",
    },
    {
      text: "Vify order printer PDF invoice is a really great app, soo easy to manage and understand, and the free Plan is perfect for small businesses or Startups. Customer support is really reactiv and very kind. It takes less than 15 min to set everything up and afterwards you will win so much time for all the invoices preparations and emails. Thanks for this great work.",
      author: "Nightdreamer",
      job: "",
    },
    {
      text: "I was desperately looking for an app for invoices as I need it for tax. Since most apps don’t support many features, I ended up with Order Printer. It really has all the features I need. Needed help which was solved in chat within 10 minutes. I am really thankful that it has made my life a lot easier.",
      author: "Shiny-Jewel",
      job: "",
    },
  ];

  // 👉 LOGIC INFINITE SLIDE
  // Nhân bản phần tử đầu tiên dán vào cuối mảng để lừa mắt người dùng khi lướt hết vòng
  const slides = [...testimonials, testimonials[0]];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, []);

  // Xử lý khi lướt đến slide ảo (cuối hàng)
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false); // Tắt hiệu ứng lướt
        setCurrentIndex(0); // Nhảy về vị trí đầu ngay lập tức
      }, 1000); // Đợi lướt xong 1s rồi mới nhảy
    }
  }, [currentIndex, slides.length]);

  const leftFeatures = [
    {
      title: "Create Invoices",
      description:
        "Vify Order Printer PDF Invoice is a powerful invoicing app for shopify stores, helping merchants optimize operations, reduce costs, and save time.",
    },
    {
      title: "Easy Customization",
      description:
        "Vify Order Printer PDF Invoice offers powerful yet simple customization, allowing you to enable or disable options with just a few clicks—perfect for users with no coding knowledge.",
    },
    {
      title: "Template Library",
      description:
        "Vify provides customers with a diverse library of invoice templates suitable for various industries, featuring professional, modern, and visually appealing designs.",
    },
  ];

  const rightFeatures = [
    {
      title: "Automatic Email",
      description:
        "Automatic invoice emailing is a must-have feature that optimizes workflows and helps shopify store owners save time and reduce operational costs.",
    },
    {
      title: "Unlimited orders",
      description:
        "Ultimate Order is Vify’s exclusive advantage. Unlike other invoice solutions that restrict orders by pricing tiers, all Vify Order Printer PDF Invoice plans come with unlimited Ultimate Orders.",
    },
    {
      title: "Multiple languages",
      description:
        "Vify Order Printer PDF Invoice app lets store owners create invoices in any language and seamlessly deliver them to customers worldwide.",
    },
  ];

  return (
    <>
      <section className="features-section">
        {/* Header */}
        <div className="features-header">
          <h4 className="features-sub-title">
            Shopify Order Printer PDF Invoice
          </h4>
          <h2 className="features-main-title">Explore Powerful Features</h2>
        </div>

        {/* Grid Features */}
        <div className="features-container">
          <div className="features-col left-col">
            {leftFeatures.map((f, i) => (
              <div key={i} className="feature-item-box">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
          <div className="features-phone-wrapper">
            <img src={anhip} alt="Phone" className="phone-img" />
          </div>
          <div className="features-col right-col">
            {rightFeatures.map((f, i) => (
              <div key={i} className="feature-item-box">
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial & Stats */}

        <div className="features-page1">
          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="quote-badge">
                <div className="quote-circle">
                  <span className="quote-icon">“</span>
                </div>
              </div>

              <div className="slider-viewport">
                <div
                  className="slider-track"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning
                      ? "transform 1s cubic-bezier(0.65, 0, 0.35, 1)"
                      : "none",
                  }}
                >
                  {slides.map((t, i) => (
                    <div key={i} className="individual-slide">
                      <p className="testimonial-text">{t.text}</p>
                      <div className="author-info">
                        {/* CHỈ HIỆN ICON CHO SLIDE 1 VÀ 2 (Index 0 và 1) */}
                        {(i === 0 || i === 1) && (
                          <img
                            src={anhicon}
                            alt="User"
                            className="author-avatar"
                          />
                        )}

                        <div className="author-meta">
                          <h5 className="author-name">{t.author}</h5>
                          <p className="author-job">{t.job}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="stats-section">
              {[
                { num: "35000+", label: "Install App" },
                { num: "25000+", label: "Members" },
                { num: "18990+", label: "Happy Clients" },
                { num: "1000+", label: "Awards Won" },
              ].map((s, i) => (
                <div key={i} className="stat-box">
                  <h2>{s.num}</h2>
                  <div className="line-divider"></div>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="features-page2">
        <div className="how-it-works-container">
          {/* Cột trái: Nội dung các bước */}
          <div className="how-it-works-left">
            <h4 className="how-sub">
              HOW VIFY ORDER PRINTER PDF INVOICE APP WORKS
            </h4>
            <h2 className="how-title">
              Three Easy Step To Begin With The Vify Order Printer PDF Invoice
            </h2>

            <div className="steps-list">
              {/* Step 1 */}
              <div className="step-item">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Step 1 : Install The Vify Order Printer App</h3>
                  <p>
                    App installation guide: Click on{" "}
                    <a
                      href="https://apps.shopify.com/vify-order-printer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="highlight-link"
                    >
                      Shopify PDF invoice App
                    </a>{" "}
                    to open the Vify order printer PDF invoice app → click
                    Install.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-item">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Step 2 : Choose A Suitable Invoice Template</h3>
                  <p>
                    Vify order printer PDF invoice app offers a wide range of
                    professional invoice templates, allowing you to choose the
                    one that best suits your store.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-item">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Step 3 : Customize Invoice Templates</h3>
                  <p>
                    Powerful yet simple customization features let you enable or
                    disable options with just a few clicks—no coding required.
                    This is exclusively available in the Vify Order Printer PDF
                    Invoice app.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Ảnh minh họa */}
          <div className="how-it-works-right">
            <img
              src={anhInvoice}
              alt="Invoice Preview"
              className="invoice-preview-img"
            />
          </div>
        </div>
      </section>
      <section className="features-page3">
        <div className="video-container">
          <div className="video-header">
            <h4 className="video-sub">SHOPIFY ORDER PRINTER PDF INVOICE</h4>
            <h2 className="video-title">Watch The Video</h2>
            <p className="video-desc">
              This is an overview video of the Vify order printer & PDF invoice
              app that you can refer to. If you’re looking for a professional
              and highly customizable PDF invoice solution—even without any
              coding knowledge—we believe this is the best{" "}
              <strong>Shopify order printer </strong> app for your store.
            </p>
          </div>

          {/* Frame Video tích hợp link của bạn */}
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/YIePYZpD7Kg?si=CzKT04DdgzY94mgB&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="features-page4">
        <div className="pricing-container">
          <div className="pricing-header">
            <h4 className="pricing-sub">
              VIFY ORDER PRINTER PDF INVOICE PRICING
            </h4>
            <h2 className="pricing-title">Convenient Plan To Choose From</h2>
          </div>

          <div className="pricing-grid">
            {/* Plan 1: FREE */}
            <a href="https://apps.shopify.com/vify-order-printer" target="_blank" rel="noopener" className="pricing-card-link">
              <div className="pricing-card">
                <div className="card-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3>FREE</h3>
                <p className="price">
                  <span>$</span>0 <span>monthly</span>
                </p>
                <ul className="plan-features">
                  <li>Freely Customized Templates</li>
                  <li>50 Latest Orders</li>
                  <li>Frontend Download Option</li>
                  <li>Auto-Detect Address Format</li>
                  <li>Draft Order</li>
                  <li>Support 24/7</li>
                </ul>
                <button className="plan-btn">
                  CHOOSE PLAN (14-DAY FREE TRIAL)
                </button>
              </div>
            </a>

            {/* Plan 2: STARTER */}
            <a href="https://apps.shopify.com/vify-order-printer" target="_blank" rel="noopener" className="pricing-card-link">
              <div className="pricing-card">
                <div className="card-icon">
                  <i className="fas fa-coffee"></i>
                </div>
                <h3>STARTER</h3>
                <p className="price">
                  <span>$</span>10.99 <span>monthly</span>
                </p>
                <ul className="plan-features">
                  <li>All In Free Plan Plus</li>
                  <li>Bulk Process</li>
                  <li>Branding Removal</li>
                  <li>Unlimited Orders</li>
                  <li>Email Automation</li>
                  <li>Invoice Edit</li>
                  <li>Custom Invoice Number</li>
                  <li>Language Detection</li>
                </ul>
                <button className="plan-btn">
                  CHOOSE PLAN (14-DAY FREE TRIAL)
                </button>
              </div>
            </a>

            {/* Plan 3: PREMIUM */}
            <a href="https://apps.shopify.com/vify-order-printer" target="_blank" rel="noopener" className="pricing-card-link">
              <div className="pricing-card">
                <div className="card-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h3>PREMIUM</h3>
                <p className="price">
                  <span>$</span>29.99 <span>monthly</span>
                </p>
                <ul className="plan-features">
                  <li>All In Starter Plan Plus</li>
                  <li>Additional Templates</li>
                  <li>Quotes</li>
                  <li>Create Custom Invoice</li>
                  <li>Custom Sender Email</li>
                  <li>Commercial Invoices</li>
                  <li>Product Meta Fields</li>
                </ul>
                <button className="plan-btn">
                  CHOOSE PLAN (14-DAY FREE TRIAL)
                </button>
              </div>
            </a>

            {/* Plan 4: ULTIMATE */}
            <a href="https://apps.shopify.com/vify-order-printer" target="_blank" rel="noopener" className="pricing-card-link">
              <div className="pricing-card">
                <div className="card-icon">
                  <i className="fas fa-gem"></i>
                </div>
                <h3>ULTIMATE</h3>
                <p className="price">
                  <span>$</span>69.99 <span>monthly</span>
                </p>
                <ul className="plan-features">
                  <li>Everything In Premium Plus</li>
                  <li>1 Custom Template Of Your Design</li>
                  <li>Free Customization</li>
                  <li>Priority LiveChat Support</li>
                  <li>API For Developers – Coming Soon</li>
                </ul>
                <button className="plan-btn">
                  CHOOSE PLAN (14-DAY FREE TRIAL)
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
