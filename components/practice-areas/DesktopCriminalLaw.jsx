import DesktopHeaderBar from "../DesktopHeaderBar";
import { criminallawdata } from "./criminallawdata";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";
import Carousel from "react-elastic-carousel";
import { testimonialData } from "../testimonialsData";
export default function DesktopCriminalLaw() {
  return (
    <div>
      <DesktopHeaderBar />
      <div
        style={{
          display: "flex",
          padding: "3rem",
          display: "flex",
          alignItems: "center",
        }}
        className="bg-red"
      >
        <img
          src="/static/images/criminallaw.jpg"
          style={{ width: "30%", height: "50%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "3rem",
            color: "white",
          }}
          className="bg-red"
        >
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              paddingBottom: "1rem", 
            }}
          >
            CRIMINAL LAW - <p
             className="gold-mission-lettering"
             style={{
               fontWeight: "500",
               fontSize: "2rem",
               color: "#c39d63",
               paddingBottom: "1rem", 
             }}
            >Los Angeles Criminal Defense Lawyers</p>
          </p>
          <p
            style={{
              lineHeight: "50px",
              fontSize: "calc(var(--font-heading-scale) * 1.4rem)",
            }}
          >
           Being convicted of a crime can lead to devastating life consequences. You can lose your right to vote, your ability to make a living — and even your freedom. In California, the stakes for criminal law cases can prove to be even more substantial as a result of the “Three Strikes” sentencing law.

Our Los Angeles Criminal defense attorneys handle misdemeanor, felony and Juvenile cases all over California and throughout Los Angeles County, Ventura County, San Francisco Bay Area, Orange County and San Diego County.

Our team of experienced Los Angeles criminal lawyers also handle cases in federal court including RICO cases and white-collar criminal defense.
          </p>
        </div>
      </div>

      {/* end desktop specific div */}
      <div
        id="mission"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#232323",
        }}
        className="bg-red"
      >
        <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
       
       
        
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 1rem",
              fontSize: "2rem",
              textAlign: "left",
              paddingBottom: "3rem",
            }}
          >
            California Three Strikes Law
          </p>
          <p className="mission-statement-paragraph-elements">
            Nearly 25,000 Californians have been sentenced to 25 years or more
            behind bars after accumulating three felony convictions. Under the
            1994 law, many defendants were sentenced to 25 years-to-life in
            prison under the “Three Strikes” law even if the third felony was
            non-violent or relatively minor in nature. In 2012, voters approved
            Proposition 36 which substantially amended the law with two primary
            objectives:
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 1rem",
              fontSize: "2rem",
              textAlign: "left",
              paddingBottom: "3rem",
            }}
          >
            1. The requirements for sentencing a defendant as a third strike
            offender were changed to 25 to life by requiring the new or 3rd
            felony to be a serious of violent felony with two or more prior
            strikes to qualify for the 25 year-to-life sentence; and
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 1rem",
              fontSize: "2rem",
              textAlign: "left",
              paddingBottom: "4rem",
            }}
          >
            2. The addition of a means by which designated defendants currently
            serving a third strike sentence may petition the court for a
            reduction of their term to a second-strike sentence, if they would
            have been eligible for a second-strike sentence under the new law
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              padding: "2rem 0 0 1rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            California Criminal Law: The Basics
          </p>
          <p className="mission-statement-paragraph-elements">
            Under California law, there are three primary groups of offenses:
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Infractions
          </p>
          <p className="mission-statement-paragraph-elements">
            These are public offenses that are not punishable by imprisonment.
            Basic traffic violations are a common example of an infraction.
            These offenses are generally resolved with a fine being paid, and
            those who are cited generally do not have the right to a jury trial
            or a public defender.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Misdeneanors
          </p>
          <p className="mission-statement-paragraph-elements">
            These are offenses punishable by up to one year imprisonment in a
            county jail and a fine, generally not exceeding $1,000 to $2,000.
            Petty theft, trespassing and public intoxication are examples of
            crimes that are often charged as misdemeanors.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Felonies
          </p>
          <p className="mission-statement-paragraph-elements">
            This category is reserved for the most serious crimes. Punishment
            can include life imprisonment in a state prison or even death,
            although some felonies can result in probation. Crimes in this
            category range from drug offenses, domestic violence, felony DUI,
            serious assault, manslaughter and murder.
          </p>

          <p className="mission-statement-paragraph-elements">
            There are many crimes that fall within a gray area between
            misdemeanor and felony, and may be charged as either. These are
            often referred to as wobbler offenses. Factors that may influence
            whether a crime is charged as a felony or misdemeanor include
            whether the offender has prior convictions and whether their
            aggravating circumstances such as the use of a weapon.
          </p>

          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              padding: "2rem 0 0 1rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            CFK: Criminal Law Practice Areas
          </p>
          <p className="mission-statement-paragraph-elements">
            At CFK, we take a comprehensive approach to criminal defense. We’ve
            spent more than three decades in California courtrooms fighting for
            the rights of the accused, providing us with unprecedented
            experience in a wide range of criminal law categories. Our practice
            areas include:
          </p>

         <div style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
         }}>
         {criminallawdata.map((el, index) => {
            return (
              <p
                className="gold-mission-lettering"
                style={{
                  fontWeight: "500",
                  color: "#c39d63",
                  padding: "1rem 0 0 1rem",
                  fontSize: "1rem",
                  textAlign: "left",
                  paddingBottom: "3rem",
                }}
                key={index}
              >
                {el}
              </p>
            );
          })}
         </div>

          <p className="mission-statement-paragraph-elements">
            If you or someone you love has been charged with a crime, contact
            CFK today to learn more about how we can help you.
          </p>

          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            How to Find the Right California Criminal Defense Attorney
          </p>

          <p className="mission-statement-paragraph-elements">
            Being charged with a criminal offense is serious business, as a
            conviction can have lifetime ramifications. While indigent
            defendants in serious criminal cases are entitled to a public
            defender, a defendant with sufficient financial resources might be
            required to retain private counsel. Opting for a private attorney
            gives defendants in criminal cases the ability to choose a lawyer
            whose experience and track record will best protect their interests.
            It’s important, however, to closely vet all prospective candidates
            for your representation. In order to determine the right attorney
            for you, be sure and ask the following:
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            How long has the Attorney been practicing?
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            How much experience does your firm have with criminal law?
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            How many cases similar to my own have you represented?
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            How many jury trials has the Attorney completed?
          </p>

          <p className="mission-statement-paragraph-elements">
            It is important to understand that a minor theft offense may affect
            your future and reputation indefinitely. A conviction can make it
            impossible to get a job and even difficult to secure an apartment or
            a house. A landlord or potential employer will almost certainly
            learn of a conviction through a background check. For example, a
            minor theft conviction that appears trivial may prove to be a
            roadblock to that home or job you are seeking. That is why you must
            take the time to choose a qualified Los Angeles defense attorney to
            get the result you need to move forward. You may have defenses
            available or mitigation factors that may persuade a prosecutor to
            consider a reduction, diversion program or other options to spare
            you the embarrassment and consequences of a serious conviction. By
            asking important questions and meeting with attorneys before you
            hire them, you can ensure that you find the best possible Los
            Angeles criminal lawyer for your needs.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            California Criminal Law Facts:
          </p>
          <p className="mission-statement-paragraph-elements">
            California has the fifth highest incarceration rate in the U.S.
            According to the Prison Policy Initiative: 239,000 California
            residents are behind bars today. 131,000 are in state prisons.
            82,000 are in local jails. 16,000 in federal prisons and 10,000 are
            in youth facilities or involuntarily committed. Additionally 326,000
            Californians are on probation or parole.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Criminal Process
          </p>
          <p className="mission-statement-paragraph-elements">
            <strong>Do you understand your Miranda Rights?</strong> The United
            States Supreme Court has ruled: “The prosecution … does not need to
            show that a waiver of Miranda rights was express. An implicit waiver
            of the right to remain silent is sufficient to admit a suspects
            statement into evidence. … Where the prosecution shows that a
            Miranda warning was given and that it was understood by the accused,
            an accused’s uncoerced statement establishes an implied waiver of
            the right to remain silent. … Thus, after giving a Miranda warning,
            police may interrogate a suspect who has neither invoked nor waived
            his or her Miranda rights.”
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Arrest & Bail
          </p>
          <p className="mission-statement-paragraph-elements">
            The criminal process begins with the arrest. After a person has been
            arrested, he or she will typically be detained at a local or
            community police station and held until the time of arraignment and
            formal charges are filed. A bail amount is then set based on the
            most serious crime he or she is booked on. The defendant will then
            appear before a magistrate or judge within 72 hours of the arrest.
            California has a bail schedule which suggests the appropriate bail
            amount depending on the nature of the crime. In rare cases such as
            capital murder, the judge may choose not to set bail. The judge may
            refuse to set bail where a defendant has committed a probation
            violation. It is important to immediately retain a skilled criminal
            defense attorney who will be prepared to appear at the time of the
            arraignment and address the bail issue. Often, a skilled defense
            attorney will be able to secure a substantial reduction in the bail
            amount which may be the difference between freedom or detention
            pending the outcome of the criminal proceedings.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Arrainment
          </p>
          <p className="mission-statement-paragraph-elements">
            At the arraignment, the defendant will appear before the judge,
            where the judge will read the charges being brought against the
            defendant. After listening to a description of the charges, the
            defendant will then enter a plea of guilty, not guilty, or no
            contest. If the defendant pleads not guilty, which is usually the
            case, the judge will set a date for a preliminary hearing or
            probable cause hearing. Then, depending on whether the defendant is
            facing felony or misdemeanor charges, his or her case will move to
            either a pre-trial conference or a preliminary hearing. During the
            arraignment, the defense can also negotiate with the judge to have
            bail lowered or dropped completely. This is common in cases
            involving first-time arrests.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Pre-Trial Conference
          </p>
          <p className="mission-statement-paragraph-elements">
            This meeting occurs between the defense and prosecution when the
            case involves misdemeanor charges. At this time, the defense can
            negotiate with the prosecution for a reduction or dismissal of the
            charges, or the defense can work with the prosecution to reach a
            plea bargain. Generally in a plea bargain, the defendant agrees to
            plead guilty in exchange for reduced penalties or sentencing. If an
            agreement of some sort can be reached during the pre-trial
            conference, then the case will not move to court, but rather be
            resolved during this part of the criminal process.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Preliminary Hearing
          </p>
          <p className="mission-statement-paragraph-elements">
            Preliminary hearings are held for cases involving felony crimes, and
            are slightly different than pre-trial conferences. At this hearing,
            the judge will review all evidence and hear witness testimony to
            determine whether or not sufficient evidence exists to send the case
            to trial. A person charged with a felony has a right to a
            preliminary hearing within ten days of an arraignment. A preliminary
            hearing is an evidentiary hearing where witnesses testify and are
            subject to cross-examination by your defense attorney. At the
            conclusion of this hearing, a judge or magistrate decides whether
            sufficient cause exists to make the defendant stand trial. It is
            important to understand that the standard of proof at a preliminary
            hearing is not guilty beyond a reasonable doubt. Rather, the
            standard of proof at a preliminary hearing is whether a reasonable
            suspicion exists or whether it is “more likely than not”. The
            preliminary hearing stage of a criminal prosecution is critical and
            it is imperative that you retain an experienced attorney that will
            aggressively cross-examine all witnesses. Effective
            cross-examination at this hearing can highlight the weaknesses in
            the case and also provide a preview as to how the government may
            proceed at trial. Additionally, an effective defense attorney may
            convince a judge to reduce a felony to a misdemeanor at the
            conclusion of a preliminary hearing. Where this occurs, the
            government is precluded from seeking a felony conviction at trial on
            that particular charge.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Trial, Verdict & Sentencing
          </p>
          <p className="mission-statement-paragraph-elements">
            If the judge believes there is enough evidence to try a case, or if
            a plea bargain has not been reached, the case will move to trial,
            where both the prosecution and defense will have the opportunity to
            present and argue their cases before a judge and jury. At the end of
            the trial, the jury will convene and make a determination, based on
            the evidence and testimony presented during the trial, as to whether
            or not the defendant is innocent or guilty. If the jury finds the
            defendant not guilty, the trial ends there and the defendant is free
            to move on with his or her life. If the jury finds the defendant
            guilty, the judge will schedule a sentencing hearing, where he or
            she will read the defendant their punishment for committing the
            crime.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0  0",
              fontSize: "2rem",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            Why our California Criminal Lawyers are Superior
          </p>
          <p
            className="mission-statement-paragraph-elements"
            style={{ paddingBottom: "3rem" }}
          >
            When it comes to criminal defense, our philosophy remains second
            place is not an option. We provide discreet, determined and
            strategic representation starting the moment we are retained. Many
            of our clients hire us the moment they learn of an ongoing criminal
            investigation. This gives us a unique opportunity to gather facts,
            interview witnesses and communicate with law enforcement and
            prosecutor. A proactive and aggressive approach can often be the
            difference between charges being filed and a prosecutor deciding to
            decline prosecution. Our corporate clients often approach us when
            first notified of an investigation. This early intervention may
            provide a window of opportunity to take steps to alleviate or
            mitigate any marginal criminal conduct or regulatory issues and
            avoid the costs, stress and embarrassment of prosecution. Whether we
            go to trial, reach a favorable plea agreement or make the problem go
            away, our goal remains the same. We work hard to get you the best
            result possible. If you are currently under investigation or have
            been arrested and need of an experienced California criminal lawyer,
            contact us today for a consultation. Our criminal defense law firm
            serves clients throughout Los Angeles County, including the cities
            of Beverly Hills, Long Beach, Pomona, San Bernardino, Riverside and
            Orange County.
          </p>
        </div>
      </div>
      <div
        className="free-case-eval-and-testimonials"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="image-container-practice-areas-desktop">
          <div className="civil-rights-bottom-image-container" id="febc">
            <FreeCaseEvalutaionButton />
          </div>
          <img
            src="/static/images/civilrights2.jpg"
            style={{
              width: "50%", // Make sure the image takes up 100% of its container width
              height: "auto", // Maintain the aspect ratio
              display: "block", // Remove any default spacing issues
              margin: "0 auto", // Center the image
            }}
          />
        </div>
        <div
          className="carousel-container"
          style={{ width: "100%", paddingRight: "2rem" }}
          id="testimonials"
        >
          <img
            src="https://defectattorney.com/wp-content/uploads/2022/12/testimonial-stars2.png?lm=63A0CCCF"
            style={{ width: "180px", height: "35px" }}
          />
          <p
            style={{
              fontSize: "28px",
              fontWeight: "800",
              color: "white",
              padding: "1rem",
            }}
          >
            TESTIMONIALS
          </p>
          <Carousel
            itemsToShow={1}
            showArrows={false}
            enableAutoPlay
            autoPlaySpeed={13000}
            renderPagination={({ pages, activePage, onClick }) => {
              return (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {pages.map((page) => {
                    const isActivePage = activePage === page;
                    return (
                      <div
                        key={page}
                        onClick={() => onClick(page)}
                        active={isActivePage}
                        style={
                          isActivePage
                            ? {
                                width: "12px",
                                height: "12px",
                                backgroundColor: "white",
                                borderRadius: "100%",
                                margin: "10px",
                              }
                            : {
                                width: "12px",
                                height: "12px",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "100%",
                                margin: "10px",
                              }
                        }
                      ></div>
                    );
                  })}
                </div>
              );
            }}
          >
            {testimonialData.map((item, index) => {
              return (
                <div className="carousel-item" key={index}>
                  <p
                    style={{
                      color: "#C39D63",
                      padding: "1rem",
                      fontSize: "18px",
                    }}
                  >
                    <strong>{item.snippet}</strong>
                  </p>
                  <p>{item.content}</p>
                  <p style={{ padding: "2rem 0" }}>
                    <strong>{item.name}</strong>
                  </p>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
