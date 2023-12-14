import Link from "next/link";
import { practiceAreaData } from "./practiceAreas";
export default function DesktopTMF() {
  return (
    <div className="tmf-section-container">
      <span className="etlgr">Experienced Trial Lawyers Get Results</span>
      <p className="mission-stmt-snippet">
        Championing justice through advocacy, CFK is a collective of three
        dedicated law firms whose purpose is to advocate and represent everyday
        people and families who have been harmed at the hands of law
        enforcement, experienced discrimination in the workplace or suffered a
        severe injury, whether it be physical, mental, or emotional related to a
        personal injury or automobile collision
        <Link href="/about#mission" className="read-more-link">
          <span style={{ fontWeight: "600" }}>... continue reading</span>
        </Link>
      </p>
      <div className="about-us-image">
        <img src={"/static/images/desktop-header-img.jpg"} />
      </div>
      <div
        className="home-page-practice-area-container-desktop"
        id="practice-areas"
      >
        {practiceAreaData.map((item, index) => {
          return (
            <div key={index} className="practice-area-desktop">
              <Link href={item.path} className="practice-areas-link">
                <span className="practice-areas-title">{item.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
