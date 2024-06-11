import React, { useState, useEffect } from "react";
import "./Privacy.css";
import Card from "../common/Card";
import SiteCard from "../Sitecard/siteCard";

const Privacy = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="privacy">
        <div className="privacy-main">
          {isMobile ? (
            <div className="privacy-sitecard">
              <SiteCard />
            </div>
          ) : (
            <div className="privacy-card">
              <Card />
            </div>
          )}
        </div>
        <div className="privacy-title">Privacy Policy</div>
        <div className="privacy-sub">
          <div className="privacy-mainContainor">
            <div className="privacy-Containor">
              <p className="privacy-sub-content">
                We take your privacy seriously. Please read the following to
                learn more about our privacy policy.
              </p>
              <hr class="privacy-line" />
              <h1 className="privacy-sub-title">
                What this Privacy Policy Covers
              </h1>
              <p className="privacy-sub-content">
                This Privacy Policy covers our treatment of personally
                identifiable information that we collect when you are on this
                website. This policy also covers our treatment of any personally
                identifiable information.
              </p>
              <hr class="privacy-line" />
              <h1 className="privacy-sub-title">
                Information Collection and Use
              </h1>
              <p className="privacy-sub-content">
                We collect personally identifiable information when you visit
                the website, when you place a booking through our website, and
                if you enter promotions, competitions, or surveys. We also
                automatically receive information on our server logs from your
                browser including your IP address. We use this information for
                three general purposes: to customise the content you see and to
                fulfil your requests for making reservations. To measure entry
                and exit points of visitors to the site and respective numbers
                of visitors to various pages, sections of the site, and details
                of the searches performed. We may also use this information to
                measure the click-thorough rates to and from the site. We may
                disclose information of this nature in aggregate form to third
                parties, personal information of individuals visitors will not
                be passed to any third parties.
              </p>
              <hr class="privacy-line" />
              <h1 className="privacy-sub-title">
                Information Sharing and Disclosure
              </h1>
              <p className="privacy-sub-content">
                We will not sell or rent your personally identifiable
                information to anyone.<br/> We will only send personally identifiable
                information about you to other companies or people when:<br/>
                <ul>
                 <li>We have your consent to share the information; </li>
                 <li>We need to share
                your information to provide the reservation, product or service
                you have requested; </li>
                <li>We need to send the information to
                companies who work on behalf of us to provide a reservation,
                product or service to you. (Unless we tell you differently,
                these companies do not have any right to use the personally
                identifiable information we provide to them beyond what is
                necessary to assist us.); </li>
                <li> We respond to subpoenas, court
                orders or legal process; or </li>
                <li>We find that your actions on our
                web sites violate the Terms of Service or any of our usage
                guidelines for specific products or services.
                </li> 
                </ul>
              </p>
              <hr class="privacy-line" />
              <h1 className="privacy-sub-title">Cookies</h1>
              <p className="privacy-sub-content">
                We only uses cookies to better enable customers to find and
                navigate the website, to improve the speed and relevance of our
                service. They cannot be used to personally identify you in any
                way. Specifically, they are only used to: Retain your preferred
                search preferences so that you do not need to re-enter this
                information every time you visit the website. Enable us to track
                how users (as a whole) use the website, which pages are useful
                and which are not. Users who delete cookies will find navigation
                through the website will be slower and more cumbersome. Cookies
                will not and cannot be used by us to personally identify you in
                any way.
              </p>
              <hr class="privacy-line" />
              <h1 className="privacy-sub-title">Security</h1>
              <p className="privacy-sub-content">
                Our website is uses secure server software (SSL) which is the
                best software available today for secure website visits and
                e-commerce transactions. It encrypts your personal information,
                including credit card number, name, and address, so that it
                cannot be read as the information travels over the Internet. In
                addition, we also use unique user names and passwords for all
                accounts and only host on secure servers within the EU, that are
                further protected by a firewall so that your personal
                information is safe throughout your visit to our website.
              </p>
              <hr class="privacy-line" />
              <h1 className="privacy-sub-title">
                Changes to this Privacy Policy
              </h1>
              <p className="privacy-sub-content">
                We may amend this policy from time to time. If we make any
                substantial changes we will notify you by posting a prominent
                announcement on our pages.
              </p>
              <hr class="privacy-line" />
              <h1 className="privacy-sub-title">Questions or Suggestions</h1>
              <p className="privacy-sub-content">
                If you have questions or suggestions please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
