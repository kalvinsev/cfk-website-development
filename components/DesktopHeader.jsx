import NavigationMenu from "./NavigationMenu";

export default function HeaderMobile() {
  return (
    <div className="header-mobile">
      <div className="header-desktop-bar">
        <div className="header-desktop-leftside">
          <div className="navigation-button">
            <NavigationMenu />
          </div>

          <div className="encrypted-number">
            <p>
              <span>3</span>-CF-KING-LAW
            </p>
          </div>
        </div>
        <img src={"/static/images/3-logo.png"} />
        <div className="right-side-desktop-header-text">
          <p>
            THE ONLY <span>3</span> YOU NEED!
          </p>
        </div>
      </div>
      <div className="header-body-image" style={{ position: "relative" }}>
        <img src={"/static/images/desktop-header-img.jpg"} />
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
