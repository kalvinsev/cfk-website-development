import Image from "next/image";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";

export default function DesktopCrearyBioPage() {
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
          src="/static/images/ludbio2.jpg"
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
            About Ludlow Creary
          </p>
          <p
            style={{
              lineHeight: "50px",
              fontSize: "calc(var(--font-heading-scale) * 1.4rem)",
            }}
          >
            Ludlow B. Creary II is a litigator and trial lawyer in Los Angeles,
            California. Mr. Creary has been in practice for 26 years and has
            spent 24 of those years managing his own law firm, the Law Offices
            of Ludlow B. Creary II. Mr. Creary has extensive trial experience in
            the areas of state and federal criminal defense as well as civil
            litigation. He has handled thousands of cases and completed well
            over 100 jury trials. Mr. Creary has handled major federal RICO
            cases and major federal narcotics cases. He has handled complex
            white collar criminal cases on both the state and federal level, as
            well as a variety of cases in the civil arena.
          </p>
        </div>
      </div>
      <div>
        <p
          style={{
            padding: "1rem 0",
            color: "white",
            textAlign: "left",
            lineHeight: "50px",
            fontSize: "calc(var(--font-heading-scale) * 1.4rem)",
          }}
        >
          Mr. Creary has a strong reputation for aggressive representation and
          for getting results for his clients. He is a native of the Los Angeles
          area where he resided for most of his life. He graduated from the
          prestigious Beverly Hills High School, then went on to receive his
          Bachelor of Arts degree from UCLA, finally earning his Juris Doctor
          from the University of San Diego School of Law. Mr. Creary is in
          executive leadership in his fraternities, Alpha Phi Alpha Fraternity
          Inc. and Sigma Pi Phi (The Boule). He is also active on the executive
          board of the John M. Langston Bar Association, where he will serve as
          its Vice President in 2024.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/static/images/ludbio1.jpg"
          style={{ width: "50%", height: "50%" }}
        />
      </div>
    </div>
  );
}
