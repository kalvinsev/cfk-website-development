import { Grey_Qo } from "next/font/google";
import NavigationMenu from "./NavigationMenu";
import MobileHeaderBar from "./MobileHeaderBar";
import FreeCaseEvalutaionButton from "./freeCaseEvaluationButton";

export default function HeaderMobile() {
  return (
    <div className="header-mobile">
      <MobileHeaderBar />
      <div className="header-body-image" style={{ position: "relative" }}>
        <img src={"/static/images/VersionB.jpg"} />
        <div className="header-p-container-mobile">
          <span
            style={{
              backgroundColor: "transparent",
              fontWeight: "500",
              textTransform: "uppercase",
              
            }}
          >
            Trial Lawyers For The People
          </span>

          <p style={{fontSize: "1rem"}}>Specializing in Civil Rights</p>
          <p style={{fontSize: "1rem"}}>Personal Injury and</p>
          <p style={{fontSize: "1rem"}}>Employment Law</p>
        </div>
        <div className="free-evaluation-button-container" id="febc">
          <FreeCaseEvalutaionButton />
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
