import DesktopHeaderBar from "../DesktopHeaderBar";
import MobileHeaderBar from "../MobileHeaderBar";

export default function MobileCivilRights() {
  return (
    <div>
      <DesktopHeaderBar />
      <div
        id="mission"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#232323",
        }}
      >
        <p
          className="gold-mission-lettering"
          style={{
            fontWeight: "700",
            color: "#c39d63",
            padding: "2rem 0 0 0",
          }}
        >
          CIVIL RIGHTS
        </p>
        <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
          <p className="mission-statement-paragraph-elements">
            The First Amendment gives people the right to freedom of speech and
            assembly. Unfortunately, the police sometimes violate this right in
            a variety of methods intended to prevent the expression of
            people&rsquo;s First Amendment rights. Recently, challenges to the
            right to protest have come in many forms. Police have thwarted
            demonstrations through mass wrongful arrests, illegal use of force
            for dispersal, or curfews.
          </p>
          <p className="mission-statement-paragraph-elements">
            Civil Rights Lawyer from CFK Trial Lawyers For The People represents
            clients who have had their rights violated during protests by either
            being injured or wrongfully arrested by police.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
            }}
          >
            CIVIL RIGHTS
          </p>
        </div>

        <div className="image-container-practice-areas">
          <img
            src="/static/images/civilrights.jpg"
            style={{
              width: "100%", // Make sure the image takes up 100% of its container width
              height: "auto", // Maintain the aspect ratio
              display: "block", // Remove any default spacing issues
              margin: "0 auto", // Center the image
            }}
          />
        </div>
      </div>
    </div>
  );
}
