import React from "react";
import "../styles/privacy.css";
import { useEffect } from "react";
function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - Vify shopify app";
  }, []);
  return (
    <>
      <div className="privacy-page">
        <h1>Privacy Policy</h1>
        <p>
          <a href="/">Home</a> - Privacy Policy
        </p>
      </div>
      <div className="privacy-container">
        <div className="privacy-content">
          <p>
            Privacy policy applied to VIFY website https://vify.io and all of
            applications published by VIFY.
          </p>
          <p className="last-updated">
            Last updated on <strong>JUL 16th, 2024.</strong>
          </p>

          <p>
            At VIFY ("we", "us", and/or "our"), we understand customers' deep
            concerns regarding personal information and privacy. We are
            dedicated to protecting your information, and informing you about
            how we use it. This privacy policy (the "Privacy Policy" or the
            "Policy") is intended to provide information to you about how we
            collect, protect, share and use your information when you access our
            website and/or use any of our product.
          </p>
          <p className="note-text">
            (This Privacy Policy covers the privacy practices of VIFY only. This
            Policy does not apply to the practices of third-party websites,
            services or applications, including third parties with which we
            partner. These third-party services are governed by each such third
            party’s privacy policy. VIFY is not responsible for the privacy
            policies and practices of technology platforms other than that of
            VIFY, and VIFY is not responsible for the failure of unaffiliated
            third parties to honor their privacy obligations.)
          </p>

          <h2>INFORMATION WE COLLECT</h2>

          <div className="sub-section">
            <h3>– For visitor of VIFY website:</h3>
            <p>
              VIFY may use cookies, tracking pixels, and other techniques when
              you visit our website http://vify.io, to help customize the site
              in aim of improving users’ experiences. You have the right to
              either Accept or Decline cookies usage if prompted, when visiting
              our site. You are also free to change cookies permissions anytime
              you wish on your browser settings.
              <br />
              Additionally, log files, web beacons, tags are also collected for
              the same purposes.
            </p>
          </div>

          <div className="sub-section">
            <h3>– For users of VIFY applications:</h3>
            <p>
              Once you install the application of ours, and accept all
              permissions, we will collect the following information from your
              Store:
            </p>
            <ul className="policy-list">
              <li>Store information: Store ID, Store plan, Store domain</li>
              <li>
                Order information (only for analytics feature): Order ID, Total
                price of order, Store owner, Name, Email address, Country, ZIP
                code, City, Phone number
              </li>
              <li>
                App utilization: Date of installation, upgrade, uninstallation,
                Payment history, All operations inside the App, Device used,
                Browser information (type, version, language), Operating system,
                Contact via Live Chat window.
              </li>
            </ul>
            <p>
              Additionally, we collect the following information from your store
              visitors to pages created by the App: Page visits, Clicks on
              tracking objects on the page, Purchases happening on the page.
            </p>
          </div>

          <h2>DISCLOSURE OF PERSONAL INFORMATION</h2>
          <p>
            Except as provided herein, VIFY will not sell, rent or otherwise
            disclose Personal Information about you to third parties.
          </p>
          <p>
            – Third-party providers. We may share your Personal Information with
            unaffiliated third parties that provide certain services to us,
            including, but not limited to email management and web support.
            These third parties may have access to Personal Information or
            non-Personal Information in order to perform their functions on our
            behalf. However, these third parties are only permitted to use your
            Personal Information for the purpose for which it has been provided
            or to administer, service, or process transactions that you have
            authorized, and may not disclose it to any other third party except
            at our express direction and in accordance with this Policy.
          </p>
          <p>
            – Business transfers. As we continue to develop our business, we may
            sell or purchase assets. If another entity acquires us or our
            assets, or assets related to the applications, Personal Information,
            information about how the apps are accessed and used, and any other
            information that we have collected about the users of the apps may
            be disclosed to such entities as one of the transferred assets.
          </p>
          <p>
            – Legal disclosures. VIFY may transfer and disclose information,
            including your Personal Information, information about how the apps
            are accessed and used, and information from our service providers,
            to third parties to comply with a legal obligation; when we believe
            in good faith that the law requires it; at the request of
            governmental authorities conducting an investigation; to verify or
            enforce our End User License Agreement or other applicable policies;
            to respond to an emergency; or otherwise to protect the rights,
            property, safety or security of third parties, users of the apps or
            the public.
          </p>
          <p>
            With your permission. At your direction or request, we may share
            your Personal Information with specified third parties.
          </p>

          <p>USE OF DATA FOR AI/ML MODELS</p>
          <p>
            VIFY does not use Google Workspace API user data to develop,
            improve, or train generalized/non-personalized AI and/or ML
            models...
          </p>
          <p>
            We commit that any user data collected will not be transferred to or
            used by third-party AI tools for the purpose of developing
            generalized/non-personalized AI/ML models.
          </p>

          <h2>CHILDREN UNDER 13</h2>
          <p>
            Our website http://vify.io, and all applications are not directed to
            children under 13 years of age, and we do not knowingly collect
            Personal Information from children under 13. If we become aware that
            a child under 13 has provided us with Personal Information, we will
            make reasonable efforts to delete such information from our files.
          </p>

          <h2>GDPR POLICY</h2>
          <p>
            If you are within Europe, you have all the rights to ask us how your
            personal data is collected and stored, how it’s being used, and
            request that personal data be deleted. You also have the rights to
            request us to clearly explain how your data is stored and used, and
            get your consent before collecting it.
            <br /> We may however require that you provide us with acceptable
            verification of your identity before proceeding further.
          </p>

          <h2>CHANGES TO THIS POLICY</h2>
          <p>
            VIFY may revise this Policy from time to time without prior notice
            to you, and any changes will be effective immediately upon the
            posting of the revised Privacy Policy on our website. It is highly
            recommended that you should bookmark and periodically review this
            page to ensure that you are familiar with the most current version
            of this Policy.
          </p>

          <h2>QUESTIONS ABOUT THIS PRIVACY POLICY</h2>
          <p>
            If you have any question or concern about our privacy policy, please
            feel free to reach us at:
          </p>

          <div className="contact-box-wrapper">
            <div className="contact-box">
              <p>Doanh Pham</p>
              <p>3488 Lindale Avenue</p>
            </div>
            <div className="contact-box">
              <p>Concord</p>
              <p>CA 94520</p>
            </div>
            <div className="contact-box">
              <p>United States of America</p>
              <p>support@vify.io</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
