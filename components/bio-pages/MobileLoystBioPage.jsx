import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";
// H
export default function MobileCrearyBioPage() {
  return (
    <div>
      <div className="mobile-bio-page-container">
        <img src="/static/images/lfbio2.jpg" />
        <div className="free-evaluation-button-container" id="febc">
          <FreeCaseEvalutaionButton />
        </div>
      </div>
      <div className="mission-statement-body-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#232323",
            padding: "1rem",
          }}
        >
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              padding: "2rem 2rem",
            }}
          >
            About Loyst Fletcher
          </p>
          <div style={{ backgroundColor: "#232323" }}>
            <p className="mission-statement-paragraph-elements">
              Loyst P. Fletcher is experienced at all levels of litigation, from
              preliminary analysis and strategy through settlement, trial and
              when necessary, on appeal. His firm, the Law Offices of Loyst P.
              Fletcher, regularly represents clients in federal and state courts
              in California, Nevada, Michigan and throughout the country and has
              a proven track record of obtaining extraordinary relief for its
              clients. While Mr. Fletcher’s expertise in the courtroom is
              unparalleled, he is acutely aware that his clients’ objectives are
              sometimes better attained through alternate strategies. Thus, he
              is equally familiar with a variety of arbitration and mediation
              forums.
            </p>
            <p className="mission-statement-paragraph-elements">
              Mr. Fletcher’s full range of knowledge truly makes him one of the
              best attorneys in Los Angeles. Mr. Fletcher’s clients range from
              emerging companies to entrepreneurs, professionals, hourly
              employees and artists. He has represented businesses and
              individuals involved in entertainment, technology, media, real
              estate, financial services, consumer products, and more.
            </p>
            <p className="mission-statement-paragraph-elements">
              Consistent with his focus on employment and complex litigation,
              Mr. Fletcher has extensive experience in consumer and employment
              class action litigation, has played a significant role in large
              and complex class cases, and currently serves as class counsel
              representing consumers and employees across California.
            </p>
            <p className="mission-statement-paragraph-elements">
              Mr. Fletcher received his undergraduate degree from Hampton
              University in 1991 and his law degree from William & Mary School
              of Law in 1994. In 1995, while employed with the Law Offices of
              Robert M. Ball, Mr. Fletcher co-counseled the trial in Fermino v.
              Fedco (1994) 7 Cal.4th 701 after seeking a reversal by the
              California Supreme Court of the trial court’s decision sustaining
              defendant’s demurrer. Mr. Fletcher’s cross examination of 2 key
              witnesses was instrumental to a $175,000 jury verdict awarded to
              Ms. Fermino, who claimed she was falsely accused of theft and held
              against her will by Fedco security officers. Thereafter, Mr.
              Fletcher briefed and successfully defended Fedco’s motion for JNOV
              and motion to reduce the award, both of which were denied in their
              entirety. Fermino is now one of the most widely cited California
              state employment law cases.
            </p>
            <p className="mission-statement-paragraph-elements">
              In 2000, Mr. Fletcher founded the Law Offices of Loyst P.
              Fletcher, primarily focusing his practice on complex business and
              employment litigation cases. Within just a few years the firm grew
              to become a leading, highly-respected litigation practice
              representing both plaintiffs and defendants in a wide range of
              civil litigation, employment, real estate, entertainment, and
              corporate transactional matters. In 2003, Mr. Fletcher
              co-counseled a wage and hour class action against a national
              retail chain for which the court approved a 25 million dollar
              settlement in January of 2009.
            </p>
            <p className="mission-statement-paragraph-elements">
              In 2008, Mr. Fletcher joined forces with his father, seasoned
              Michigan trial lawyer, Loyst Fletcher, Jr. The father and son
              litigation team tried cases resulting in verdicts as high as
              $8,500,000, and obtained settlements for their clients as high as
              $10,000,000. In 2009, Mr. Fletcher accepted a post as an Adjunct
              Professor with Trinity Law School where he teaches Civil Procedure
              and Trial Advocacy. Mr. Fletcher’s experience in the courtroom has
              been featured in articles in The Los Angeles Times, TMZ, The
              Hollywood Reporter and Variety Magazine among others.
            </p>
          </div>
        </div>
      </div>
      <div className="mobile-bio-page-container">
        <img src="/static/images/lfbio1.jpg" />
      </div>
    </div>
  );
}
