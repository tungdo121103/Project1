import React, { useState } from "react";
import "../styles/partners.css";

/* */
import page1 from "../assets/page1.png";
import page2 from "../assets/page2.png";
import page3 from "../assets/page3.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import sell1 from "../assets/sell1.png";
import sell2 from "../assets/sell2.png";
import sell3 from "../assets/sell3.png";
import order1 from "../assets/order1.png";
import order2 from "../assets/order2.png";
import order3 from "../assets/order3.png";

function Partners() {
  const categories = [
    "Page Builder",
    "Product",
    "Sell",
    "Order",
    "Marketing",
    "Affiliate",
    "Dropshipping",
    "Review",
    "Loyalty Program",
    "Language Translate",
    "Shipping",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const partnerData = {
    "Page Builder": [
      {
        title: "PageFly Landing Page Builder",
        description:
          "Design stunning store pages with ease – no coding needed. Boost conversions with advanced customization.",
        image: page1,
        link: "https://apps.shopify.com/pagefly",
      },
      {
        title: "GemPages Landing Page Builder",
        description:
          "Conversion-focused Page Builder: 400+ Templates, AI-Powered, SEO-Optimized, Mobile-Friendly.",
        image: page2,
        link: "https://apps.shopify.com/gempages",
      },
      {
        title: "Tapita Landing Page Builder",
        description:
          "With Tapita you can easily create beautiful home/landing pages, product/collection pages, blog pages, popups, and more, without any coding knowledge.",
        image: page3,
        link: "https://apps.shopify.com/tapita-ai-seo-blog-builder ",
      },
    ],

    Product: [
      {
        title: "Customily",
        description:
          "The #1 Product Personalization App for eCommerce. Sell personalized the smart way products.",
        image: product1,
        link: "https://apps.shopify.com/customily-product-personalizer",
      },
      {
        title: "Easify",
        description:
          "Let you create stunning sliders, banners, and product pages with 600+ templates and a drag-and-drop editor. It features advanced animations, multilingual support, and seamless Shopify 2.0 integration.",
        image: product2,
        link: "https://apps.shopify.com/revolution-slider",
      },
      {
        title: "Easify Product Options Variant",
        description:
          "Custom product information – 26 options: text fields, color swatches,…. Designed for non-tech users with live previews and 40 templates.",
        image: product3,
        link: "https://apps.shopify.com/easify-product-options",
      },
    ],

    Sell: [
      {
        title: "Upsell & Cross Sell ‑ Selleasy",
        description:
          "Boost AOV with Selleasy’s one-click upsell and cross-sell. Display bundles, upsell offers, and addons. Multi-language support with free setup help.",
        image: sell1,
        link: "https://apps.shopify.com/upsell-cross-sell-kit-1",
      },
      {
        title: "BSS: B2B Wholesale Solution",
        description: "All-in-one wholesale solution for B2B merchants.",
        image: sell2,
        link: "https://apps.shopify.com/b2b-solution-custom-pricing",
      },
      {
        title: "Essential Countdown Timer Bar",
        description:
          "Increase your conversion rate by up to 20% in seconds by adding a countdown timer to your store! It triggers FOMO and urgency among buyers, and is one of the best ways to encourage them to act.",
        image: sell3,
        link: "https://apps.shopify.com/essential-countdown-timer",
      },
    ],

    Order: [
      {
        title: "Appstle℠ Subscriptions App",
        description:
          "Subscriptions by Appstle lets you easily create and manage recurring orders, build-a-box, memberships, and more—boosting retention and revenue with flexible plans and seamless Shopify integration.",
        image: order1,
        link: "https://apps.shopify.com/subscriptions-by-appstle",
      },
      {
        title: "Doran Back in Stock - Preorder",
        description:
          "Effortlessly manage back-in-stock notifications and preorders with customizable discounts.",
        image: order2,
        link: "https://apps.shopify.com/doran-back-in-stock-preorder",
      },
      {
        title: "17TRACK Order Tracking",
        description:
          "Track your orders across 1400+ global carriers, Embed branded tracking page, Auto email, Buyer Protection.",
        image: order3,
        link: "https://apps.shopify.com/17track",
      },
    ],

    Marketing: [
      {
        title: "Email Marketing",
        description: "Send campaigns.",
        image: "https://picsum.photos/400/300?13",
        link: "/partner/customily",
      },
      {
        title: "SMS Marketing",
        description: "Reach customers.",
        image: "https://picsum.photos/400/300?14",
        link: "/partner/customily",
      },
      {
        title: "Popup Builder",
        description: "Capture leads.",
        image: "https://picsum.photos/400/300?15",
        link: "/partner/customily",
      },
    ],

    Affiliate: [
      {
        title: "Affiliatly",
        description: "Affiliate system.",
        image: "https://picsum.photos/400/300?16",
        link: "/partner/customily",
      },
      {
        title: "Refersion",
        description: "Track referrals.",
        image: "https://picsum.photos/400/300?17",
        link: "/partner/customily",
      },
      {
        title: "UpPromote",
        description: "Affiliate marketing.",
        image: "https://picsum.photos/400/300?18",
        link: "/partner/customily",
      },
    ],

    Dropshipping: [
      {
        title: "DSers",
        description: "AliExpress dropshipping.",
        image: "https://picsum.photos/400/300?19",
        link: "/partner/customily",
      },
      {
        title: "Zendrop",
        description: "Fast fulfillment.",
        image: "https://picsum.photos/400/300?20",
        link: "/partner/customily",
      },
      {
        title: "Spocket",
        description: "US/EU suppliers.",
        image: "https://picsum.photos/400/300?21",
        link: "/partner/customily",
      },
    ],

    Review: [
      {
        title: "Judge.me",
        description: "Product reviews.",
        image: "https://picsum.photos/400/300?22",
        link: "/partner/customily",
      },
      {
        title: "Loox",
        description: "Photo reviews.",
        image: "https://picsum.photos/400/300?23",
        link: "/partner/customily",
      },
      {
        title: "Yotpo",
        description: "Customer feedback.",
        image: "https://picsum.photos/400/300?24",
        link: "/partner/customily",
      },
    ],

    "Loyalty Program": [
      {
        title: "Smile.io",
        description: "Reward customers.",
        image: "https://picsum.photos/400/300?25",
        link: "/partner/customily",
      },
      {
        title: "LoyaltyLion",
        description: "Loyalty system.",
        image: "https://picsum.photos/400/300?26",
        link: "/partner/customily",
      },
      {
        title: "Growave",
        description: "Retention tools.",
        image: "https://picsum.photos/400/300?27",
        link: "/partner/customily",
      },
    ],

    "Language Translate": [
      {
        title: "Langify",
        description: "Translate store.",
        image: "https://picsum.photos/400/300?28",
        link: "/partner/customily",
      },
      {
        title: "Weglot",
        description: "Multi-language.",
        image: "https://picsum.photos/400/300?29",
        link: "/partner/customily",
      },
      {
        title: "Translate & Adapt",
        description: "Auto translate.",
        image: "https://picsum.photos/400/300?30",
        link: "/partner/customily",
      },
    ],

    Shipping: [
      {
        title: "ShipStation",
        description: "Shipping management.",
        image: "https://picsum.photos/400/300?31",
        link: "/partner/customily",
      },
      {
        title: "Easyship",
        description: "Global shipping.",
        image: "https://picsum.photos/400/300?32",
        link: "/partner/customily",
      },
      {
        title: "Shippo",
        description: "Logistics tools.",
        image: "https://picsum.photos/400/300?33",
        link: "/partner/customily",
      },
    ],
  };

  const currentCategory = categories[activeIndex];
  const currentPartners = partnerData[currentCategory] || [];

  return (
    <div className="partners-container">
      <div className="partners-page">
        <h1>Partners</h1>
        <p>
          <a href="/">Home</a> - Partners
        </p>
      </div>

      <div className="partners-content-wrapper">
        <h2 className="partners-main-title">Ecosystem Of Partners</h2>
        <p className="partners-description">
          <strong>Vify partners</strong> offer exclusive and valuable benefits for Vify customers, with a wide selection of discount codes to choose from.
        </p>

        {/* TABS */}
        <div className="partners-tabs-scroll">
          <div className="partners-tabs-inner">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`partners-tab-button ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="partners-grid-display">
          {currentPartners.map((partner, index) => (
            <div key={index} className="partners-info-card">
              <div className="partners-card-inner">
                {/* MẶT TRƯỚC */}
                <div className="partners-card-front">
                  <img src={partner.image} alt={partner.title} />
                </div>

                {/* MẶT SAU */}
                <div className="partners-card-back">
                  <h3>{partner.title}</h3>
                  <p>{partner.description}</p>
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partners-card-btn-more"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="partners-pagination-row">
          {categories.map((_, index) => (
            <div
              key={index}
              className={`partners-dot-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
