import DesktopHeaderBar from "./DesktopHeaderBar";
import NavigationMenu from "./NavigationMenu";

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
            Trial Lawyers For The People
          </span>

          <p>Specializing in Civil Rights</p>
          <p>Personal Injury and</p>
          <p>Employment Law</p>
        </div>
        <div className="free-evaluation-button-desktop-container" id="febc">
          <button
            type="submit"
            name="free-evaluation-button"
            className="free-evaluation-button"
          >
            <span className="free-eval-span">Free Case Evaluation</span>
          </button>
        </div>
      </div>
      <div className="free-ev-button-container"></div>
    </div>
  );
}
