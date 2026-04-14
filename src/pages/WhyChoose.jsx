import React, { useState } from "react";
import { useEffect } from "react";
import anh from "../assets/anhwhychoose1.png";
import "../styles/whychoose.css";
function WhyChoose() {
  const features = [
    "Easy Customization",
    "Automatic Email",
    "Template Library",
    "Unlimited Orders",
    "Multiple languages",
  ];
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    document.title = "Why Choose Vify - Vify shopify app";
  }, []);
  return (
    <section className="why-choose-section">
      <div className="whychoose-page">
        <h1>Why Choose Vify</h1>
        <p>
          <a href="/">Home</a> - Why Choose Vify
        </p>
      </div>
      <div className="container">
        <div className="upper-content">
          <div className="image-box">
            <img src={anh} alt="Customer focus" />
          </div>

          <div className="text-box">
            <h2 className="title">
              At Vify, We Always Put Our Customers First
            </h2>
            <p className="description">
              <strong>Why choose Vify?</strong> Why choose Vify? is a question
              we constantly ask ourselves to find the most meaningful answer for
              our customers. And here is that answer: Vify is a trusted provider
              of invoice creation and printing solutions for Shopify stores. We
              listen to and deeply understand the challenges merchants face and
              know exactly what they need. That’s why the Vify Order Printer PDF
              Invoice app was created—to help sellers easily generate
              professional invoices, even without any coding knowledge. This is
              also why customers choose Vify.{" "}
              <strong>
                Some key features of Vify Order Printer PDF Invoice:
              </strong>
            </p>

            <ul className="feature-list">
              {features.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="metrics-header">
          <h4 className="sub-title">VIFY ORDER PRINTER PDF INVOICE</h4>
          <h2 className="main-title">The Metrics Vify Has Achieved</h2>
          <p className="sub-description">
            The trust our customers place in Vify is a powerful motivation that
            drives us to continuously grow and deliver even greater value.
          </p>
        </div>

        <div className="stats-section-row">
          {[
            { num: "35000+", label: "Install App" },
            { num: "25000+", label: "Members" },
            { num: "18990+", label: "Happy Clients" },
            { num: "1000+", label: "Awards Won" },
          ].map((s, i) => (
            <div key={i} className="stat-box-item">
              <h2>{s.num}</h2>
              <div className="orange-line"></div>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
        <div className="partners-area">
          <div className="partners-intro">
            <h2 className="partners-title">Vify’s Key Partners</h2>
            <p className="partners-desc">
              <em>
                To deliver greater value to customers and further reinforce the
                answer to the question
                <strong> “Why choose Vify?”</strong>, Vify has established
                strategic partnerships with leading, trusted partners to build a
                strong ecosystem of practical, high-value applications that help
                drive growth for merchants’ stores.
              </em>
            </p>
          </div>

          {/* 3. Tabs UI */}
          <div className="custom-tabs">
            <div className="tabs-nav">
              <button
                className={`nav-link ${activeTab === 1 ? "active" : ""}`}
                onClick={() => setActiveTab(1)}
              >
                Tab 1
              </button>
              <button
                className={`nav-link ${activeTab === 2 ? "active" : ""}`}
                onClick={() => setActiveTab(2)}
              >
                Tab 2
              </button>
            </div>
            <div className="tabs-content-box">
              {activeTab === 1 ? (
                <div className="shortcode-text">[smartslider3 slider="2"]</div>
              ) : (
                <div className="shortcode-text">[smartslider3 slider="3"]</div>
              )}
            </div>
          </div>
        </div>

        <div className="contactWhyChoose-section">
          <h2 className="contactWhyChoose-title">Contact Vify</h2>
          <p className="contactWhyChoose-sub">
            Share anything you're interested in about Vify with us—we're always
            here and ready to support you.
          </p>

          <form className="contactWhyChoose-form">
            <div className="form-row">
              <input type="text" placeholder="Title" />
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Your Phone" />
              <input type="email" placeholder="Your Email" />
            </div>

            <textarea placeholder="Message"></textarea>

            <div className="form-btn">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
