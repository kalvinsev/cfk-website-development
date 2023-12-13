import Link from "next/link";
import { practiceAreaData } from "./practiceAreas";
export default function MobileTMF() {
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
        <br />
        <Link href="/about" className="read-more-link">
          <span style={{ fontWeight: "600" }}>... continue reading</span>
        </Link>
      </p>
      <div className="about-us-image" style={{ padding: "1.3rem" }}>
        <img src={"/static/images/desktop-header-img.jpg"} />
      </div>
      <div className="home-page-practice-area-container" id="practice-areas">
        {practiceAreaData.map((item, index) => {
          return (
            <div key={index} className={item.cName}>
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
