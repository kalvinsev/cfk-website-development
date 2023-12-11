import Link from "next/link";
import { practiceAreaData } from "./practiceAreas";
export default function MobileTMF() {
  return (
    <div className="tmf-section-container">
      <span className="etlgr">Experienced trial lawyers get results</span>
      <p className="mission-stmt-snippet">
        Championing justice through advocacy, CFK is a collective of three
        dedicated law firms whose purpose is to advocate and represent everyday
        people and families who have been harmed at the hands of law
        enforcement, experienced discrimination in the workplace or suffered a
        severe injury, whether it be physical, mental, or emotional related to a
        personal injury or automobile collision.
        <Link href="" className="read-more-link">
          <span style={{ fontWeight: "bold", textDecoration: "none" }}>
            {" "}
            continue reading . . .{" "}
          </span>
        </Link>
      </p>
      <div className="about-us-image"></div>
      <div className="home-page-practice-area-container">
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
