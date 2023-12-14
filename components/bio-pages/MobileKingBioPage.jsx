import Contact from "../Contact";
import Footer from "../Footer";
import HeaderBar from "../HeaderBar";
import Testimonials from "../Testimonials";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";

export default function MobileKingBioPage() {
  return (
    <div>
      <div className="mobile-bio-page-container">
        <img src="/static/images/sakbio4.jpg" />
        <div className="free-evaluation-button-container" id="febc">
          <FreeCaseEvalutaionButton />
        </div>
      </div>
      <div className="mission-statement-body-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#232323",
            padding: "1rem",
          }}
        >
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              padding: "2rem 2rem",
            }}
          >
            About Stephen King
          </p>
          <div style={{ backgroundColor: "#232323" }}>
            <p className="mission-statement-paragraph-elements">
              Stephen King is a seasoned trial lawyer who has tried over 100
              jury trials to verdict with an unparalleled record of victories.
              He is the Founder of Kings Justice Law, APC, where he serves as
              the Principal Trial Lawyer. Stephen’s legal practice is primarily
              focused on complex cases involving catastrophic injuries, wrongful
              death, civil rights violations, workplace discrimination and
              criminal law. Stephen has obtained acquittals for numerous clients
              charged with very serious offenses and has obtained substantial
              money judgments and settlements in personal injury and civil
              rights claims for his clients. In 2015, Stephen served as lead
              trial lawyer on a team of lawyers that obtained a record-setting
              $40 million non-economic wrongful death verdict in Riverside
              County in 2015.
            </p>
            <p className="mission-statement-paragraph-elements">
              Stephen has been successful in actions against governmental
              entities such as the Los Angeles County Sheriff’s Department and
              the Los Angeles County Department of Children and Family Services.
              In 2015, Stephen obtained a $1.1 million verdict against the Los
              Angeles Sheriff’s Department for constitutional violations and yet
              another record-setting $3.1 million verdict against the Los
              Angeles County Department of Children and Family Services in 2016.
              Stephen has also been success in gaining favorable settlements for
              his clients including a recent $3 million settlement in a wrongful
              death case against the Los Angeles Sherriff’s Department.
            </p>
            <p className="mission-statement-paragraph-elements">
              Stephen is an instructor at the Gerry Spence Method and Trial
              Lawyers University trial programs where he shares his knowledge of
              trial techniques with plaintiff trial lawyers from all over the
              country. In 2023, Stephen served as the President of the John M.
              Langston Bar Association, the largest and most influential African
              American bar association in Southern California. He also serves on
              the executive board of the California Association of Black Lawyers
              (CABL) and the Los Angeles Trial Lawyers Charity Association.
              Stephen has been selected as the Most Influential Minority by the
              Los Angeles Business Journal and has been recognized as the
              National Black Top 100 Lawyers, the National Trial Top 100 Lawyers
              and the National Top 10 Civil Rights Lawyers.
            </p>
            <p className="mission-statement-paragraph-elements">
              Stephen King’s commitment to the legal field has extended to his
              membership in the prestigious Melvin Belli Society as well as the
              American Board of Trial Advocates (ABOTA). Both organizations are
              dedicated to the preservation and promotion of the Seventh
              Amendment, guaranteeing the right to civil jury trials. It is the
              utmost honor and one of the most prestigious recognitions a trial
              lawyer can achieve to be accepted into these organizations as they
              are merit based and lawyers can join by invitation only.
            </p>
          </div>
        </div>
      </div>
      <div className="mobile-bio-page-container">
        <img src="/static/images/sakbio5.jpg" />
      </div>
    </div>
  );
}
