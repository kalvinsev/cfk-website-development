import MobileHeaderBar from "../MobileHeaderBar";
import MobileTestimonials from "../MobileTestimonials";
import Testimonials from "../Testimonials";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";

export default function MobilePersonalInjury() {
  return (
    <div>
      <MobileHeaderBar />
      <img
        src="/static/images/personalinjury.jpg"
        style={{
          width: "100%", // Make sure the image takes up 100% of its container width
          height: "auto", // Maintain the aspect ratio
          display: "block", // Remove any default spacing issues
          margin: "0 auto", // Center the image
        }}
      />
      <div className="practice-areas-header-image" style={{ top: "10%" }}>
        <p
          className="gold-mission-lettering"
          style={{
            fontWeight: "700",
            color: "white",
            padding: "2rem 0 0 0",
          }}
        >
          PERSONAL INJURY
        </p>
      </div>
      <div
        id="mission"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#232323",
        }}
      >
        <div style={{ backgroundColor: "#232323", padding: "2rem 2rem" }}>
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
            Personal Injury Attorneys
          </p>
          <p className="mission-statement-paragraph-elements">
            In addition to Civil Rights experience, our attorneys have
            represented clients who have been injured due to the negligence of
            another person or entity. We work with our clients to make sure that
            they focus on their recovery after an accident while we move their
            claim forward. Every personal injury case involves some type of
            negligence. Another party must have acted in a way that a reasonable
            person would not which resulted in another person being injured. The
            most common type of personal injury case is a car accident. Was the
            party speeding, drunk or in some other way negligent at the time of
            the accident? You may have a case.
          </p>
        </div>

        <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "0 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Have You Been Injured In An Accident? Do You Have Legal Questions?
          </p>
          <p className="mission-statement-paragraph-elements">
            CFK Trial Lawyers For The People represents clients who have been
            injured in accidents. If you have a potential claim or legal
            question, contact us here. Free Case Evaluation
          </p>
        </div>
        <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
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
            Types of Accidents
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Bicycle Accidents
          </p>
          <p className="mission-statement-paragraph-elements">
            Similar to a motorcycle accident, bicycle accident injuries can be
            devastating. Remember to always wear a helmet!
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Slip & Fall
          </p>
          <p className="mission-statement-paragraph-elements">
            Victims of slip-and-fall accidents have a fairly difficult road
            ahead of them. Many times it is very hard to prove that a party was
            negligent in these cases. Slip and fall accidents are very
            circumstantial, so we highly recommend speaking with an attorney to
            see if you have a case.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Wrongful Death
          </p>
        </div>
        <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
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
            Accident Injuries
          </p>
          <p className="mission-statement-paragraph-elements">
            Many people wonder how a personal injury case is evaluated. Most of
            the damages recovered from a successful lawsuit are directly related
            to the medical bills and associated recovery from the injuries.
            Common examples of accident injuries and their associated impact on
            a personal injury lawsuit are:
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Traumatic Brain Injuries (TBI)
          </p>
          <p className="mission-statement-paragraph-elements">
            These injuries are life-changing. In many cases, a person will never
            fully recover from a traumatic brain injury. It is vital that a
            person gets the best medical care they can if they have suffered a
            TBI, so they can be put on the best path to recovery. In California,
            CFK Trial Lawyers For The People knows the best brain specialists and can help
            you find the right person to help you recover.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Broken Bones
          </p>
          <p className="mission-statement-paragraph-elements">
            The pain and suffering from broken bones can be temporary, in lucky
            cases, or chronic. We highly recommend speaking with a medical
            professional so they can properly assess your long-term prospect for
            recovery.
          </p>

          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 0",
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Back Injuries
          </p>
          <p className="mission-statement-paragraph-elements">
            Damage to the back or spinal cord can be very dangerous. Injuries
            include numbness, herniated disks, or even paralysis.
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
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
          What Should I Do If I Have Been Injured In An Accident?
        </p>
        <p
          className="gold-mission-lettering"
          style={{
            fontWeight: "500",
            color: "#c39d63",
            padding: "2rem 0 0 0",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Seek Medical Attention (If Necessary)
        </p>
        <p className="mission-statement-paragraph-elements">
          The number one priority for any personal injury victim should be to
          talk to a doctor and work on a plan for treatment and recovery. Your
          health and well-being in the long term are vital. A doctor can also
          help you get your injuries documented, which will help in the future.
        </p>
        <p
          className="gold-mission-lettering"
          style={{
            fontWeight: "500",
            color: "#c39d63",
            padding: "2rem 0 0 0",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Gather Information & Evidence
        </p>
        <p className="mission-statement-paragraph-elements">
          Our recommendation for any potential personal injury client is to
          gather as much information as possible before pursuing a claim. Get
          the names and contact information of the at-fault party as well as any
          witnesses or responding police officers, get a police report or any
          other documentation on the accident, and talk to a doctor to get your
          injuries documented.
        </p>
        <p
          className="gold-mission-lettering"
          style={{
            fontWeight: "500",
            color: "#c39d63",
            padding: "2rem 0 0 0",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Talk To A Lawyer
        </p>
        <p
          className="mission-statement-paragraph-elements"
          style={{ paddingBottom: "3rem" }}
        >
          If you have been injured in California due to the negligence of
          another person or entity, we recommend speaking with a lawyer.
          California is a fault state which means that a personal injury
          accident settlement is directly related to the degree of fault of the
          liable party. CFK Trial Lawyers For The People is happy to answer any questions
          you have regarding this. Our legal consultations are free.
        </p>
      </div>
      <div className="image-container-practice-areas-mobile">
        <div className="civil-rights-bottom-image-container" id="febc">
          <FreeCaseEvalutaionButton />
        </div>
        <img
          src="/static/images/civilrights2.jpg"
          style={{
            width: "100%", // Make sure the image takes up 100% of its container width
            height: "auto", // Maintain the aspect ratio
            display: "block", // Remove any default spacing issues
            margin: "0 auto", // Center the image
          }}
        />
      </div>
      <MobileTestimonials />
    </div>
  );
}
