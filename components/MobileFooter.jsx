import { locations } from "./locations";
import Newsletter from "./newsletter";
export default function MobileFooter() {
  return (
    <div className="footer-outer-container">
      <div className="footer-location-container">
        {locations.map((item, index) => {
          return (
            <div className="location-items" key={index}>
              <span
                className={item.locationClass}
                style={{ fontWeight: "700" }}
              >
                {item.location}
              </span>
              <p>
                <span className={item.addressClass}>{item.address}</span>
              </p>
            </div>
          );
        })}
        <div className="misc-container">
          <div className="misc-container-logo-img-container">
            <img
              src="/static/images/3-logo.png"
              style={{ maxWidth: "180px", padding: "2rem 0" }}
            />
          </div>
          <div style={{ padding: "1rem", backgroundColor: "black" }}>
            <span style={{ fontWeight: "700" }}>CONTACT US</span>
          </div>
          <div
            className="contact-us-footer"
            style={{
              padding: "1rem",
              backgroundColor: "black",
            }}
          >
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "25px",
                color: "white",
                textDecoration: "none",
              }}
            >
              <span>
                <a href="tel:3235464529">(323)-546-4529</a>
              </span>
              <span>
                <a href="mailto:sking@kingsjusticelaw.com">
                  info@cktriallawyers.com
                </a>
              </span>
            </p>
          </div>
          <div style={{ paddingBottom: "10rem ", backgroundColor: "black" }}>
            <Newsletter />
          </div>
        </div>
      </div>
      <div className="footer-copyright-container">
        <p style={{ paddingBottom: "2rem" }}>
          © 2023 CFK Trial Lawyers, a collective of 3 law firms. All rights
          reserved.
          <br />
        </p>
        <p style={{ lineHeight: "22px" }}>
          CFK Trial Lawyers, a collective of 3 law firms, serves all of
          California. In addition, we represent clients in various other states
          through our affiliations with local law firms through which we will be
          admitted to practice law, pro hac vice. The information on this
          website should not be taken as legal advice for any individual case or
          situation, nor is it intended to create, and receipt or viewing does
          not constitute, an attorney-client relationship.
        </p>
      </div>
    </div>
  );
}
