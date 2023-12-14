import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";
// H
export default function MobileCrearyBioPage() {
  return (
    <div>
      <div className="mobile-bio-page-container">
        <img src="/static/images/ludbio2.jpg" />
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
            About Ludlow Creary
          </p>
          <div style={{ backgroundColor: "#232323" }}>
            <p className="mission-statement-paragraph-elements">
              Ludlow B. Creary II is a litigator and trial lawyer in Los
              Angeles, California. Mr. Creary has been in practice for 26 years
              and has spent 24 of those years managing his own law firm, the Law
              Offices of Ludlow B. Creary II.
            </p>
            <p className="mission-statement-paragraph-elements">
              Mr. Creary has extensive trial experience in the areas of state
              and federal criminal defense as well as civil litigation. He has
              handled thousands of cases and completed well over 100 jury
              trials. Mr. Creary has handled major federal RICO cases and major
              federal narcotics cases. He has handled complex white collar
              criminal cases on both the state and federal level, as well as a
              variety of cases in the civil arena.
            </p>
            <p className="mission-statement-paragraph-elements">
              Mr. Creary has a strong reputation for aggressive representation
              and for getting results for his clients. He is a native of the Los
              Angeles area where he resided for most of his life. He graduated
              from the prestigious Beverly Hills High School, then went on to
              receive his Bachelor of Arts degree from UCLA, finally earning his
              Juris Doctor from the University of San Diego School of Law.
            </p>
            <p className="mission-statement-paragraph-elements">
              Mr. Creary is in executive leadership in his fraternities, Alpha
              Phi Alpha Fraternity Inc. and Sigma Pi Phi (The Boule). He is also
              active on the executive board of the John M. Langston Bar
              Association, where he will serve as its Vice President in 2024.
            </p>
          </div>
        </div>
      </div>
      <div className="mobile-bio-page-container">
        <img src="/static/images/ludbio1.jpg" />
      </div>
    </div>
  );
}
