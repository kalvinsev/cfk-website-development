import NavigationMenu from "./NavigationMenu";
export default function MobileHeaderBar() {
  return (
    <div className="header-mobile-bar">
      <div className="navigation-button">
        <NavigationMenu />
      </div>
      <img
        src={"/static/images/3-logo.png"}
        style={{ backgroundColor: "rgb(85, 7, 7)" }}
      />
      <div></div>
    </div>
  );
}
