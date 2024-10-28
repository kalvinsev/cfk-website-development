import DesktopHeaderBar from "../DesktopHeaderBar";
import MobileHeaderBar from "../MobileHeaderBar";
import Testimonials from "../Testimonials";
import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";
import Carousel from "react-elastic-carousel";
import { testimonialData } from "../testimonialsData";
export default function DesktopMotorVehicleAccidents() {
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
          src="/static/images/motorvehicleaccidents.jpg"
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
            MOTOR VEHICLE ACCIDENTS
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
            California Car Accident Attorneys
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
            What Should You Do After An Accident?
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
            Follow these steps:
          </p>

          <p className="mission-statement-paragraph-elements">
            Always make sure you get the other driver’s information. Take photos
            of every car in the accident. Even if your car wasn’t damaged much,
            taking photos of the other car(s) could help you in the future. If
            there are witnesses, get their contact info. Get yourself checked
            out for injuries as soon as possible. If you’re injured, call an
            accident lawyer. They can give you free advice.
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
            Have You Been Injured in a Car Accident?
          </p>
          <p className="mission-statement-paragraph-elements">
            CFK Trial Lawyers For The People represent clients who have been injured in
            accidents. If you have a potential claim or legal question, contact
            us below.
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
          Always Get The Other Driver’s Information
        </p>
        <p className="mission-statement-paragraph-elements">
          We have seen countless situations where people failed to collect the
          other driver’s information. This makes it very hard when making a
          claim for any injuries or damage to your vehicle. In the event the
          other driver runs after the accident, be sure to contact the police
          and stay at the scene to file a report.
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
          Take Photos of Your Car’s Damage and Any Other Vehicles Involved in
          the Acciden
        </p>
        <p className="mission-statement-paragraph-elements">
          Car damage in accidents is not always equal. Sometimes, a larger car
          might have very minor damage, while a smaller vehicle could be
          totalled. A common insurance tactic is to devalue a claim because
          there wasn’t significant damage to the claimant’s vehicle. The best
          thing you can do after an accident is take several photos of any
          involved vehicles.
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
          className="mission-statement-paragraph-elements"
          style={{ paddingBottom: "3rem" }}
        >
          If you are unsure what you should do after an accident, you can always
          call a lawyer. At CFK Trial Lawyers For The People, we never charge for advice.
          We can walk you through the process of making a claim against an
          insurance company.
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
