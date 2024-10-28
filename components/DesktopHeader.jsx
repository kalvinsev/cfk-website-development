import DesktopHeaderBar from "./DesktopHeaderBar";
import NavigationMenu from "./NavigationMenu";
import FreeCaseEvalutaionButton from "./freeCaseEvaluationButton";

export default function DesktopHeader() {
  return (
    <div className="header-mobile">
      <DesktopHeaderBar />
      <div className="header-body-image" style={{ position: "relative" }}>
        <img src={"/static/images/desktop-header-img1.jpg"} />
        <div className="header-p-container">
          <span
            style={{
              backgroundColor: "transparent",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Building legacy while building community
          </span>

          <p style={{fontSize: "calc(var(--font-heading-scale) * 1.9rem)"}}>Specializing in Civil Rights</p>
          <p style={{fontSize: "calc(var(--font-heading-scale) * 1.9rem)"}}>Personal Injury and</p>
          <p style={{fontSize: "calc(var(--font-heading-scale) * 1.9rem)"}}>Employment Law</p>

          {/* <p>Specializing in Civil Rights</p>
          <p>Personal Injury and</p>
          <p>Employment Law</p> */}
        </div>
        <div className="free-evaluation-button-desktop-container" id="febc">
          <FreeCaseEvalutaionButton />
        </div>
        <div className=" tlftp"> <span
            style={{
              backgroundColor: "transparent",
              fontWeight: "500",
              textTransform: "uppercase",
              fontSize: "calc(var(--font-heading-scale) * 3rem)",
              color: "#807e7e"

            }}
          >
            Trial Lawyers for the people
          </span></div>
      </div>
      <div className="free-ev-button-container"></div>
    </div>
  );
}
