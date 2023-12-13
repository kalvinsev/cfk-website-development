import NavigationMenu from "./NavigationMenu";
export default function DesktopHeaderBar() {
  return (
    <div className="header-desktop-bar">
      <div className="header-desktop-leftside">
        <div className="navigation-button">
          <NavigationMenu />
        </div>

        <div className="encrypted-number">
          <a href="tel:3235464529" style={{ textDecoration: "none" }}>
            <p>
              <span>3</span>-CF-KING-LAW
            </p>
          </a>
        </div>
      </div>
      <img src={"/static/images/3-logo.png"} />
      <div className="right-side-desktop-header-text">
        <p>
          THE ONLY <span>3</span> YOU NEED!
        </p>
      </div>
    </div>
  );
}
