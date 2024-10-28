import DesktopHeaderBar from "../DesktopHeaderBar";
import MobileHeaderBar from "../MobileHeaderBar";
import Testimonials from "../Testimonials";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";
import Carousel from "react-elastic-carousel";
import { testimonialData } from "../testimonialsData";
export default function DesktopWrongfulDeath() {
  return (
    <div>
      <DesktopHeaderBar />
      <div
        style={{
          display: "flex",
          padding: "3rem",
        }}
        className="bg-red"
      >
        <img
          src="/static/images/wrongfuldeath.jpg"
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
            WRONGFUL DEATH
          </p>
          <p
            style={{
              lineHeight: "50px",
              fontSize: "calc(var(--font-heading-scale) * 1.4rem)",
            }}
          >
            In catastrophic accidents where someone lost their life due to the
            negligence of a person or entity, our firm represents clients that
            seek justice for their loved ones. In these wrongful death cases,
            the most important factor is experience. You want a lawyer that has
            worked closely with families in their time of need and knows how to
            handle these cases with extreme care.
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
              padding: "4rem 0 4rem 1rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            California Wrongful Death Attorneys – CFK Trial Lawyers For The People
          </p>
          <p className="mission-statement-paragraph-elements">
            CFK Trial Lawyers For The People has experience in several wrongful
            death cases. Our attorneys have been there to answer any questions
            that our potential clients or their families have had after the
            death of a loved one. Anytime, anywhere – that’s our philosophy when
            handling these cases.
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              padding: "4rem 0 4rem 1rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            Examples Of Wrongful Death Cases
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
            Police Brutality
          </p>
          <p className="mission-statement-paragraph-elements">
            An institution with the purpose of serving and protecting people, we
            have handled many cases where a police officer’s misconduct or
            negligence led to a family losing a loved one. We have helped
            clients seek punitive damages against these police officers. Common
            police brutality cases resulted in a wrongful death claim are:
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
            Police Shootings
          </p>
          <p className="mission-statement-paragraph-elements">
            There are strict protocols for when a police officer can use their
            weapon in the line of duty. If an officer did not follow these
            rules, they could be tried in criminal court, while the surviving
            family members could seek compensation in civil court. Our wrongful
            death lawyers know every protocol, and can help answer any questions
            regarding a potential case.
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
            Police Chokeholds
          </p>
          <p className="mission-statement-paragraph-elements">
            A highly dangerous practice that has the potential to seriously
            injure or kill someone, police chokeholds are being banned across
            the country.
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
          Car accidents
        </p>
        <p className="mission-statement-paragraph-elements">
          Our law firm has handled wrongful death cases involving car accidents
          where the deceased person’s family was able to seek justice on their
          behalf. The main questions we ask clients about the details of these
          cases are:
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
          Who was the at fault party?
        </p>
        <p className="mission-statement-paragraph-elements">
          California is considered a fault state, so you must prove that the
          other party was at fault to have a potential wrongful death claim.
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
          Was the at-fault party a local, state or federal government entity?
        </p>
        <p className="mission-statement-paragraph-elements">
          The statute of limitations for a wrongful death car accident case in
          California is two years from the date of loss. If the involved party
          was a government entity, the statute of limitations is only six months
          from the date of loss.
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
          Jail/Prison Suicide
        </p>
        <p className="mission-statement-paragraph-elements">
          While prison guards are not expected to prevent every possible
          suicide, they are expected to properly screen inmates for any mental
          health issues or suicide risk. If an inmate has shown signs of mental
          illness or is at-risk for committing suicide and they are neglected by
          prison staff, the prison could be liable for their suicide.
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
          What Should You Do If A Loved One Lost Their Life Due To The
          Negligence Of Another Individual/Entity?
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
          Who Can File A Claim?
        </p>
        <p className="mission-statement-paragraph-elements">
          In California, only certain individuals are allowed to file a wrongful
          death claim. The parties that are allowed to bring a wrongful death
          claim are the deceased person’s surviving spouse, domestic partner, or
          surviving children. If no descendent exists, a wrongful death claim
          can be brought by a person who would be entitled to the property of
          the deceased by intestate succession. These parties include the
          parents of the deceased or their siblings, depending on who is living
          at the time. If they can prove financial dependence, other individuals
          who can file a wrongful death claim are a putative spouse, their
          children, or any stepchildren.
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
          Gather Evidence & Information
        </p>
        <p className="mission-statement-paragraph-elements">
          Before speaking with a personal injury lawyer about the loss of a
          loved one, we recommend collecting as much information about the case
          as you can. Any police reports, medical records, or witness contact
          information will be very helpful for your case.
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
          Speak to a Lawyer
        </p>
        <p
          className="mission-statement-paragraph-elements"
          style={{ paddingBottom: "4rem" }}
        >
          For wrongful death claims, we recommend speaking with a civil rights
          lawyer that has experience with these types of cases. They will be
          able to help you work with insurance companies and bring your case to
          trial if need be.
        </p>
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
