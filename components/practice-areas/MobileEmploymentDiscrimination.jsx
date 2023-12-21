import MobileHeaderBar from "../MobileHeaderBar";
import MobileTestimonials from "../MobileTestimonials";
import Testimonials from "../Testimonials";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";

export default function DesktopEmploymentDiscrimination() {
  return (
    <div>
      <MobileHeaderBar />
      <img
        src="/static/images/employmentdiscrimination.jpg"
        style={{
          width: "100%", // Make sure the image takes up 100% of its container width
          height: "auto", // Maintain the aspect ratio
          display: "block", // Remove any default spacing issues
          margin: "0 auto", // Center the image
        }}
      />
      <div className="practice-areas-header-image" style={{ top: "60%" }}>
        <p
          className="gold-mission-lettering"
          style={{
            fontWeight: "700",
            color: "white",
            padding: "2rem 0 0 0",
            textAlign: "left",
          }}
        >
          EMPLOYMENT DISCRIMINATION
        </p>
      </div>
      <div
        id="mission"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#232323",
        }}
      >
        <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              padding: "2rem 0 0 0",
            }}
          >
            California Employment Discrimination Attorney&apos;s
          </p>

          <p className="mission-statement-paragraph-elements">
            Employees are supposed to be protected from discrimination by
            several federal, state and local laws, but there are many situations
            where these laws are violated. Examples of common forms of
            discrimination in the workplace include: Racism, Sexism, Ageism, and
            Bigotry
          </p>
          <p className="mission-statement-paragraph-elements">
            Unfortunately, a majority of discrimination issues go unreported
            which can lead to a toxic work environment. If you have experienced
            discrimination in your workplace, it is important to contact an
            employment discrimination lawyer to know what your rights are and
            ask any questions. Call us today if you have any questions. Free
            Case Evaluation.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Have You Experienced Discrimination at Work?
          </p>
          <p className="mission-statement-paragraph-elements">
            CFK Trial Lawyers For The People represent clients who have been
            discriminated against in the workplace.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            California Fair Employment and Housing Act
          </p>
          <p className="mission-statement-paragraph-elements">
            California’s Fair Employment and Housing Act (FEHA) protects people
            working for companies of more than 5 employees from discrimination
            in a variety of business areas including advertisements,
            applications & interviews, hiring, promotion, termination, and
            compensation. The FEHA prohibits harassment based on a protected
            category against an employee, an applicant, an unpaid intern or
            volunteer, or a contractor. Protected traits include age, ancestry,
            nationality, race, disability, gender & gender identity, marital
            status, military or veteran status, religion, and sexual
            orientation. You have rights and we defend them.
          </p>
        </div>
        <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Examples of Discrimination
          </p>
          <p
            className="mission-statement-paragraph-elements"
            style={{ paddingBottom: "2rem" }}
          >
            Common examples of workplace discrimination due to affiliation with
            FEHA’s protected categories include: Termination or firing of an
            employee, failure to hire, decrease in pay or benefits, and denying
            a promotion. Proving a claim of discrimination can be challenging
            without direct evidence like emails, texts, and other
            correspondence; however, it is not impossible. The best thing to do
            would be to ask a lawyer what your options are. Consultations are
            free, and the advice could prove to be invaluable to not only
            yourself but your coworkers who may also be in a bad situation.
            CFK Trial Lawyers For The People has represented several victims of workplace
            discrimination, and we would be happy to walk you through the
            process.
          </p>
        </div>
      </div>

      <div className="image-container-practice-areas-mobile">
        <div className="civil-rights-bottom-image-container" id="febc">
          <FreeCaseEvalutaionButton />
        </div>
        <img
          src="/static/images/civilrights2.jpg"
          style={{
            width: "100%", // Make sure the image takes up 100% of its container width
            height: "auto", // Maintain the aspect ratio
            display: "block", // Remove any default spacing issues
            margin: "0 auto", // Center the image
          }}
        />
      </div>
      <MobileTestimonials />
    </div>
  );
}
