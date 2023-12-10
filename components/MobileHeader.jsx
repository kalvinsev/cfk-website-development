import { Grey_Qo } from "next/font/google";
import NavigationMenu from "./NavigationMenu";

export default function HeaderMobile() {
  return (
    <div className="header-mobile">
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
      <div className="header-body-image" style={{ position: "relative" }}>
        <img src={"/static/images/VersionB.jpg"} />
        <div className="header-p-container">
          <p>
            <span
              style={{
                fontSize: "20px",
                backgroundColor: "transparent",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Trial Lawyers For The People
            </span>
          </p>
          <p>Specializing in Civil Rights</p>
          <p>Personal Injury and</p>
          <p>Employment Law</p>
        </div>
        <div className="free-evaluation-button-container" id="febc">
          <button
            type="submit"
            name="free-evaluation-button"
            className="free-evaluation-button"
          >
            <span className="free-eval-span">Free Case Evaluation</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Header mobile overlay text:

// two versions:
//   first one all grey

//   second version: trial lawyers for the poeple in white, then grey

// keep free case evaluation color scheme same

// about us missiion statement page will be changed.

// team manufacturers fear section -->
//  read more button --> under read more button

//  about us picture on the home page

//  then mission about us page will be different

// I would like a copy
// questions
