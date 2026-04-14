import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import "../styles/contact.css";
import { useEffect } from "react";
const ContactVify = () => {
  useEffect(() => {
    document.title = "Contact Vify - Vify shopify app";
  }, []);
  return (
    <div className="contact-container">
      {/* 3 Icons phía trên */}
      <section className="contact-info-section">
        <div className="contact-info-item">
          <div className="contact-icon-circle">
            <Phone size={28} strokeWidth={1.5} />
          </div>
          <span className="contact-info-text">(+84)975121220</span>
        </div>

        <div className="contact-info-item">
          <div className="contact-icon-circle">
            <MapPin size={28} strokeWidth={1.5} />
          </div>
          <span className="contact-info-text">
            Nam Do Complex – Hai Ba Trung District - Hanoi
          </span>
        </div>

        <div className="contact-info-item">
          <div className="contact-icon-circle">
            <Mail size={28} strokeWidth={1.5} />
          </div>
          <span className="contact-info-text">Support@Vify.Io</span>
        </div>
      </section>

      {/* Header */}
      <div className="contact-header-section">
        <span className="contact-sub-title">ORDER PRINTER PDF INVOICE</span>
        <h1 className="contact-main-title">Contact Vify</h1>
        <p className="contact-description-text">
          <em>
            Feel free to contact us and share anything you care about regarding
            Vify—we're always here and ready to support you.
          </em>
        </p>
      </div>

      {/* Form */}
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="contact-form-row">
          <input
            type="text"
            placeholder="Title"
            className="contact-input-field"
          />
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input-field"
          />
        </div>

        <div className="contact-form-row">
          <input
            type="tel"
            placeholder="Your Phone"
            className="contact-input-field"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input-field"
          />
        </div>

        <div className="contact-form-row">
          <textarea
            placeholder="Message"
            className="contact-textarea-field"
          ></textarea>
        </div>

        <button type="submit" className="contact-submit-button">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactVify;
