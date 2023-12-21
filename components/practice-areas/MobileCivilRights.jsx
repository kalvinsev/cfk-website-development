import MobileHeaderBar from "../MobileHeaderBar";
import MobileTestimonials from "../MobileTestimonials";
import Testimonials from "../Testimonials";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";

export default function MobileCivilRights() {
  return (
    <div>
      <MobileHeaderBar />
      <img
        src="/static/images/civilrights.jpg"
        style={{
          width: "100%", // Make sure the image takes up 100% of its container width
          height: "auto", // Maintain the aspect ratio
          display: "block", // Remove any default spacing issues
          margin: "0 auto", // Center the image
        }}
      />
      <div className="practice-areas-header-image">
        <p
          className="gold-mission-lettering"
          style={{
            fontWeight: "700",
            color: "white",
            padding: "2rem 0 0 0",
          }}
        >
          CIVIL RIGHTS
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
            Civil Rights Lawyers from CFK Trial Lawyers For The People represent
            clients who have had their rights violated during protests by either
            being injured or wrongfully arrested by police.
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
            Have you been victimized by the Police?
          </p>
          <p className="mission-statement-paragraph-elements">
            CFK Trial Lawyers For The People represent clients who have been
            victimized by police when exercising their civil rights. If you have
            a potential claim or legal question, contact us here.
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
            Protestors - Know Your Rights
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
            Public Vs. Private Property
          </p>
          <p className="mission-statement-paragraph-elements">
            ​Your First Amendment rights are strongest in public areas such as
            streets, sidewalks, and parks. On private property, these rights are
            subject to the owner of the property. You are allowed to protest on
            sidewalks and streets, so long as you do not block traffic from cars
            or pedestrians.
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
            Photography & Videography of Protests
          </p>
          <p className="mission-statement-paragraph-elements">
            Similar to the rules above, the use of photography and videography
            is allowed in public spaces so long as you are there legally. On
            private property, these rules are subject to the property owner.
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
            Potential Areas For A Civil Rights Claim
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
            Wrongful Arrests
          </p>
          <p className="mission-statement-paragraph-elements">
            ​In order for a police officer to arrest an individual, they need to
            have a reason. A person must have been witnessed breaking the law or
            be suspected of attempting to commit a crime for an officer to be
            allowed to arrest them. In the event that police begin arresting
            people following a dispersal order, they must follow certain rules.
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
            Use Of Force & Dispersal
          </p>
          <p className="mission-statement-paragraph-elements">
            In the event that police believe that a protest may become violent
            or lead to other criminal activity, they may issue an order of
            dispersal. This is viewed as a last resort for police officers. The
            danger must be clear and present, and police must follow a protocol
            for how they carry this out. Protestors must be given a reasonable
            opportunity to comply with the dispersal order as well as clear
            directions. They must be given plenty of time to safely leave, as
            well as a clear path to the exit. If police officers don’t follow
            these rules or use excessive force, there could be grounds for a
            civil rights case.
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
            Tear Gas & Pepper Spray Injuries
          </p>
          <p className="mission-statement-paragraph-elements">
            Police often use these items to thwart protests, however, they must
            abide by the protocols of use for both. The use of either of these
            deterrents can cause serious damage if used negligently. For victims
            of tear gas use, there can be severe and sometimes permanent damage
            to the eyes. Pepper spray victims can also have permanent eye
            damage. Both deterrents also can cause damage to people with
            respiratory problems or possibly be fatal in serious cases of
            negligence.
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
            Rubber Bullets
          </p>
          <p className="mission-statement-paragraph-elements">
            The damage from rubber bullets can be extremely dangerous. Their
            devastating damage has led to a significant outcry for their banning
            as a deterrent for protests. If a negligent officer uses them
            improperly, they can lead to serious eye damage or even be fatal.
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
          What to Do If You Have Been Victimized While Protesting
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
          Lawyers For The People always advocate seeking medical attention
          immediately if you have been injured during a protest. A doctor can
          help document your injuries and get you on the path to recovery
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
          Gather Evidence
        </p>
        <p className="mission-statement-paragraph-elements">
          To improve potential civil rights claim, gather as much information as
          you can during and after an incident. · Names, badge numbers, and
          police car numbers of any involved officers · Contact information for
          witnesses or other victims · Take as many photos and videos as you can
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
          Call A Civil Rights Lawyer
        </p>
        <p
          className="mission-statement-paragraph-elements"
          style={{ paddingBottom: "3rem" }}
        >
          If you or someone you know have had their rights as a protestor
          violated by police, you may have grounds for a civil lawsuit. If you
          have any questions about how to move forward with a civil claim,
          CFK Trial Lawyers For The People can help you figure out your next steps. Our
          legal consultation is free.
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
