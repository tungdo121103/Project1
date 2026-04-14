import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/faq.css";
import anhfaq from "../assets/faq.png";
import anhfaq1 from "../assets/faq1.png";
import anhfaq2 from "../assets/faq2.png";
import anhfaq3 from "../assets/faq3.png";

const faqData = [
  {
    id: 1,
    question: "How can I choose the right invoice template?",
    answer: (
      <>
        <div className="faq-block">
          <p>
            <strong>Click Templates</strong> from the sidebar or the top menu
            bar. The <strong>Template</strong> page will display all your
            available and enabled templates. Each template can be used for:
          </p>
        </div>

        <ul className="faq-list">
          <li>Invoice</li>
          <li>Packing Slip</li>
          <li>Refund</li>
          <li>Draft Order</li>
        </ul>

        <div className="faq-block">
          <p>
            <strong>Template actions</strong>
          </p>
        </div>

        <ul className="faq-list">
          <li>Click on a template to preview</li>
          <li>Click "Apply" to set it as Default Template</li>
          <li>Click "Edit" to customize template</li>
          <li>The selected template will be used by default</li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    question: "How can I customize invoice template?",
    answer: (
      <>
        <div className="faq-block">
          <p>Choose the templates you want to use:</p>
        </div>
        <div className="faq-block">
          <p>
            * Go to Vify main menu → *Templates → Choose type of documents
            (Invoice/ Packing Slip/ Refund/ Draft orders) → Navigate to your
            ideal template → Click Edit
          </p>
        </div>

        <div className="faq-block">
          <p>Editing template:</p>
        </div>

        <ul className="faq-list">
          <li>
            Edit sections on the left: Users can freely enable/disable sections
            to be displayed on templates
          </li>
          <li>Preview on the right: Reflects the change you make</li>
          <li>Click Save* to update all the information.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    question: "How can I Print Download invoices from Shopify Admin?",
    answer: (
      <>
        <div className="faq-block">
          <p>
            This guideline gives information about how to Print and Download
            your Invoice/ Packing Slip/ Refund from your Shopify Admin.
          </p>
        </div>

        <ul className="faq-list">
          <li>
            On your Shopify order details page, select one or more orders.
          </li>
          <li>Click the** three-dot menu **(⋮)shown in the image below.</li>
          <li>
            From the dropdown menu, find and choose “Print selected”with the
            Vify logo at the top.
          </li>
          <li>
            Next, select the type of document you want to print: Invoice,
            Packing Slip, or Refund.
          </li>
          <li>
            You will be redirected to the Vify appto complete the process.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    question: "How do I send invoices to customers automatically?",
    answer: (
      <>
        <div className="faq-block">
          <p>
            <strong>Accessing Email Automation</strong>
          </p>
        </div>
        <div className="faq-block">
          <p>
            Naviagte to <em>Email Automation → Email automation</em> **from the
            menu bar.
          </p>
        </div>
        <div className="faq-block">
          <p>
            <strong>Email Automation configuration options</strong>
          </p>
        </div>

        <ul className="faq-list">
          <li>Choose the email flow: Invoice, Packing Slip, or Refund</li>
          <li>
            Enable or disable automationas needed Send emails to
            merchantautomatically (On/Off)
          </li>
          <li>
            Send emails to customersautomatically with PDF attached (On/Off)
          </li>
          <li>Apply automation for POS orders(On/Off)</li>
        </ul>

        <div className="faq-block">
          <p>
            <strong>Additional Settings</strong>
          </p>
        </div>

        <ul className="faq-list">
          <li>Set a trigger actionfor the email flow</li>
          <li>
            Reply email: If customer replies, the response will go to this
            mailbox. By default, it is the store’s email address
          </li>
          <li>Add BCCrecipients for better monitoring</li>
          <li>Target Orders/Customers with specific TAGS</li>
          <li>Target Orders/Customers without TAGS</li>
        </ul>
        <div className="faq-block">
          <p>
            After customizing the settings, click <strong>Save</strong> to apply
            the changes.
          </p>
        </div>
      </>
    ),
  },
];

export default function Faq() {
  const [active, setActive] = useState(null);

  return (
    <>
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <h5 className="faq-sub">POPULAR FAQ</h5>
          <h2 className="faq-title">Frequently Asked Questions</h2>

          {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              {/* HEADER */}
              <div
                className="faq-question"
                onClick={() => setActive(active === item.id ? null : item.id)}
              >
                <span>{item.question}</span>
                <div className="faq-icon">{active === item.id ? "−" : "+"}</div>
              </div>

              {/* CONTENT */}
              <AnimatePresence>
                {active === item.id && (
                  <motion.div
                    key={item.id}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="faq-answer"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* IMAGE BÊN PHẢI */}
        <div className="faq-right">
          <img src={anhfaq} alt="invoice preview" />
        </div>
      </div>
      </section>
      <section className="blog-section">
        <div className="container">
          <p className="blog-sub">VIFY NEWS</p>
          <h2 className="blog-title">Lasted Post</h2>

          <div className="blog-list">
            <div className="blog-card">
              <img src={anhfaq1} alt="blog1" />
              <h3>
                <a href="/blog-detail">
                  Best Tricks And Tips For Shopify Store Owners
                </a>
              </h3>
              <p className="meta">By <a href="tony-detail">Tony</a> • 0 Comments • <a href="eco-detail">Ecommerce</a></p>
              <p className="desc">
                It is not so difficult to start a new business, but never an
                easy task to keep it going...
              </p>
            </div>

            <div className="blog-card">
              <img src={anhfaq2} alt="blog2" />
              <h3><a href="/blog-detail">Best Shopify Themes And Templates You Can Use</a></h3>
              <p className="meta">By <a href="tony-detail">Tony</a> • 0 Comments</p>
              <p className="desc">
                The first point to be considered when starting a new website is
                how it looks like to your customers...
              </p>
            </div>

            <div className="blog-card">
              <img src={anhfaq3} alt="blog3" />
              <h3><a href="/blog-detail">Order Printer: PDF Invoice App User Guide</a></h3>
              <p className="meta">By <a href="tony-detail">Tony</a> • 0 Comments</p>
              <p className="desc">
                This article is a comprehensive PDF invoice app user guide
                designed to help you fully explore...
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
      </section>
      {/* CTA */}
      <section className="cta-section">
        <p className="cta-sub">INSTALL VIFY ORDER PRINTER APP</p>
        <h2>Install For Free Today !</h2>

        <div className="cta-buttons">
          <a
            href="https://apps.shopify.com/vify-order-printer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
          >
            View Vify App
          </a>

          <a href="/contactVify" className="btn-orange">
            Contact Vify
          </a>
        </div>
      </section>
    </>
  );
}
