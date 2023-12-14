import DesktopHeaderBar from "./DesktopHeaderBar";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

export default function DesktopAboutPage() {
  return (
    <div>
      {/* Version A begin */}
      <DesktopHeaderBar />
      <div className="header-body-image" style={{ position: "relative" }}>
        <img src="/static/images/mission-page-image.jpg" />
        <div className="header-p-container">
          <span
            style={{
              backgroundColor: "transparent",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Trial Lawyers For The People
          </span>

          <p>Specializing in Civil Rights</p>
          <p>Personal Injury and</p>
          <p>Employment Law</p>
        </div>
        <div className="free-evaluation-button-container" id="febc">
          <button
            type="submit"
            name="free-evaluation-button"
            className="free-evaluation-button"
          >
            <span className="free-eval-span">Free Case Evaluation</span>
          </button>
        </div>
      </div>
      {/* Version A end */}
      <div className="mission-statement-body-container">
        {/* version B  begin */}
        {/* <div className="img-div">
          <img src="/static/images/mission-page-image.jpg" />
        </div> */}
        {/* Version B end */}
        <div
          id="mission"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#232323",
          }}
        >
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              padding: "2rem 0 0 0",
            }}
          >
            CFK MISSION STATEMENT
          </p>
          <div style={{ backgroundColor: "#232323", padding: "0 4rem" }}>
            <p className="mission-statement-paragraph-elements">
              Championing justice through advocacy, CFK is a collective of three
              dedicated law firms whose purpose is to advocate and represent
              everyday people and families who have been harmed at the hands of
              law enforcement, experienced discrimination in the workplace or
              suffered a severe injury, whether it be physical, mental, or
              emotional related to a personal injury or automobile collision.
            </p>
            <p className="mission-statement-paragraph-elements">
              Our attorneys handle civil rights cases, police brutality,
              employment discrimination, personal injury, wrongful death, motor
              vehicle accidents, criminal law and premises liability. We combine
              modern day technology with our extensive knowledge and experience
              in various legal domains. We strive to provide comprehensive
              solutions tailored to the specific needs of our clients. At CFK we
              are dedicated to fostering strong attorney-client relationships
              built on trust, empathy, and open communication.
            </p>
            <p className="mission-statement-paragraph-elements">
              Through our extensive knowledge and experience in various legal
              domains, we strive to provide comprehensive solutions tailored to
              the specific needs of our clients. We will divide the labor,
              considering the respective expertise, experience, and strengths of
              everyone involved in the development and operation of this
              venture. At CFK we actively listen to our clients&apos; concerns
              in order to eremnsure that their voices are heard, and their
              rights are protected.
            </p>
            <p className="mission-statement-paragraph-elements">
              As African American lawyers, we recognize the historical and
              ongoing injustices faced by our community. We are committed to
              using our platform to advocate for racial equality, social
              justice, and the eradication of systemic inequality. By actively
              engaging in pro bono work, community outreach, and educational
              initiatives, we aim to empower individuals and organizations to
              effect positive change within their communities.
            </p>
            <p className="mission-statement-paragraph-elements">
              In summary, our mission is to establish and grow a law firm that
              champions justice, equality, and empowerment. By leveraging our
              collective strengths, we aim to provide exceptional legal
              services, advocate for marginalized communities, and actively
              contribute to the fight against systemic inequality. Together, we
              strive to make a lasting impact on the lives of our clients, our
              community, and the legal profession as a whole.
            </p>
          </div>
        </div>
      </div>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
