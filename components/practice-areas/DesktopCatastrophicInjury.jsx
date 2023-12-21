import DesktopHeaderBar from "../DesktopHeaderBar";
import MobileHeaderBar from "../MobileHeaderBar";
import Testimonials from "../Testimonials";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";
import Carousel from "react-elastic-carousel";
import { testimonialData } from "../testimonialsData";
export default function DesktopCatastrophicInjury() {
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
          src="/static/images/catastrophicinjury.jpg"
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
            CATASTROPHIC INJURY
          </p>
          <p
            style={{
              lineHeight: "50px",
              fontSize: "calc(var(--font-heading-scale) * 1.4rem)",
            }}
          >
            Catastrophic injuries leave a huge impact on the life of an
            individual. Such a colossal and devastating injury can leave a
            person unable to return to normal activities or perform any
            meaningful work. These changes affect the victim as well as the
            people around them. Regardless of what or who may have caused the
            impact, those who are suffering will need proper treatment and
            complete justice. Rather than going about this injury alone, or with
            an unreliable insurance company, you should consider the legal
            assistance and knowledge of CFK Trial Lawyers for the people. 
          </p>
        </div>
      </div>
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
              fontWeight: "700",
              color: "#c39d63",
              padding: "2rem 0 2rem 1rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            5 Most Common Catastrophic Injuries
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
            Spinal Cord Injury
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
            Brain Injury
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
            Burn Injury
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
            Amputation
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
            Loss of Senses
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
            Causes
          </p>
          <p className="mission-statement-paragraph-elements">
            Catastrophic injuries can be caused by many different things. While
            car accidents contribute a major percentage to catastrophic
            injuries, there are also motorcycle accidents, head-on collisions,
            truck accidents, and rollovers. Another cause of such an impact can
            be the result of medical malpractice. A medical practitioner may
            have made an incorrect diagnosis or administered the wrong
            treatment, causing such a sickness to worsen. Whatever the reason
            may be, those who are liable for such an irreversible condition
            should be professionally confronted utilizing every resource
            available to them in the law.
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
            Types of Catastrophic Injuries
          </p>
          <p className="mission-statement-paragraph-elements">
            Catastrophic injuries usually have a permanent impact on those who
            were harmed. The following are a few examples of some catastrophic
            injuries:
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
            Traumatic Head Injuries/Brain Injuries
          </p>

          <p className="mission-statement-paragraph-elements">
            Serious injuries like these often leave lifelong damages, even
            leaving some unfortunate souls in a vegetative state for the
            remainder of their lives. Traumatic brain injuries may also cause
            extensive memory loss, vision loss, physical disabilities, and some
            mental disabilities, as well. These are only a few among many other
            conditions.
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
            Spinal Injuries
          </p>

          <p className="mission-statement-paragraph-elements">
            Injuries to the spine may be the result of one’s neck becoming
            impacted during an accident. Paralysis is the primary result of
            spinal injuries. Besides car crashes, an incorrect diagnosis of an
            illness can cause such injuries.
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
            Multiple Bone Fractures
          </p>

          <p className="mission-statement-paragraph-elements">
            These injuries may leave devastating impact on those harmed, as the
            pain may be an excruciating trauma to deal with, and may take a long
            time to heal, in addition to some of these fractures not even
            healing completely, or at all.
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
            Injuries Resulting From a Fire
          </p>
          <p className="mission-statement-paragraph-elements">
            This catastrophic event may leave lasting damages to their victims.
            This includes scars, burn marks, dis-figuration, and loss of proper
            mobility.
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
            Why You May Need an Attorney
          </p>
          <p className="mission-statement-paragraph-elements">
            While no one should ever have to endure such a traumatic experience,
            we can assure you don’t have to go through this alone. Our team is
            able to assist you every step of the way. While equipping a vast
            knowledge in laws and policies, and a set of professional
            negotiation skills, our attorneys can Successfully Defend Your Best
            Interests. While the information on this page may be useful, none of
            this should be construed as legal advice. This is mainly because
            everyone’s situation is unique from others. To learn more about your
            legal rights and options available to you, contact our firm today.
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
            Let Us Fight For You
          </p>
          <p
            className="mission-statement-paragraph-elements"
            style={{ paddingBottom: "3rem" }}
          >
            As you recover, you get support and timely updates at every step of
            the way, as we fight to recover what’s yours. Contact us to see if
            we can help.
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
