import Image from "next/image";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";

export default function DesktopKingBioPage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "3rem",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", paddingBottom: "3rem" }}
      >
        <img
          src="/static/images/sakbio5.JPG"
          style={{ width: "30%", height: "50%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "3rem",
            color: "white",
          }}
        >
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              paddingBottom: "1rem",
            }}
          >
            About Stephen King
          </p>
          <p
            style={{
              lineHeight: "35px",
              fontSize: "calc(var(--font-heading-scale) * 1.4rem)",
            }}
          >
            Stephen King is a seasoned trial lawyer who has tried over 100 jury
            trials to verdict with an unparalleled record of victories. He is
            the Founder of Kings Justice Law, APC, where he serves as the
            Principal Trial Lawyer. Stephen’s legal practice is primarily
            focused on complex cases involving catastrophic injuries, wrongful
            death, civil rights violations, workplace discrimination and
            criminal law. Stephen has obtained acquittals for numerous clients
            charged with very serious offenses and has obtained substantial
            money judgments and settlements in personal injury and civil rights
            claims for his clients. In 2015, Stephen served as lead trial lawyer
            on a team of lawyers that obtained a record-setting $40 million
            non-economic wrongful death verdict in Riverside County in 2015.
            Stephen has been successful in actions against governmental entities
          such as the Los Angeles County Sheriff’s Department and the Los
          Angeles County Department of Children and Family Services. In 2015,
          Stephen obtained a $1.1 million verdict against the Los Angeles
          Sheriff’s Department for constitutional violations and yet another
          record-setting $3.1 million verdict against the Los Angeles County
          Department of Children and Family Services in 2016. Stephen has also
          been success in gaining favorable settlements for his clients
          including a recent $3 million settlement in a wrongful death case
          against the Los Angeles Sherriff’s Department.
          </p>
        </div>
      </div>
      <div>
       
        <p
          style={{
            padding: "1rem 0",
            color: "white",
            textAlign: "left",
            lineHeight: "30px",
            fontSize: "calc(var(--font-heading-scale) * 1.4rem)",
          }}
        >
         
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: " 0 3rem 0 0",
            color: "white",
          }}
        >
          <p
            style={{
              lineHeight: "35px",
              fontSize: "calc(var(--font-heading-scale) * 1.4rem)",
            }}
          >
             Stephen is an instructor at the Gerry Spence Method and Trial Lawyers
          University trial programs where he shares his knowledge of trial
          techniques with plaintiff trial lawyers from all over the country. In
          2023, Stephen served as the President of the John M. Langston Bar
          Association, the largest and most influential African American bar
          association in Southern California. He also serves on the executive
          board of the California Association of Black Lawyers (CABL) and the
          Los Angeles Trial Lawyers Charity Association. Stephen has been
          selected as the Most Influential Minority by the Los Angeles Business
          Journal and has been recognized as the National Black Top 100 Lawyers,
          the National Trial Top 100 Lawyers and the National Top 10 Civil
          Rights Lawyers.
          </p>
        </div>
        <img
          src="/static/images/sakbio4.JPG"
          style={{ width: "30%", height: "50%" }}
        />
      </div>
    </div>
  );
}
