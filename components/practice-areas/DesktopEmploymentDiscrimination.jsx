import DesktopHeaderBar from "../DesktopHeaderBar";

import FreeCaseEvalutaionButton from "../freeCaseEvaluationButton";
import Carousel from "react-elastic-carousel";
import { testimonialData } from "../testimonialsData";
export default function DesktopEmploymentDiscrimination() {
  return (
    <div>
      <DesktopHeaderBar />
      <div
        style={{
          display: "flex",
          padding: "3rem",
          alignItems: "center",
        }}
        className="bg-red"
      >
        <img
          src="/static/images/employmentdiscrimination.jpg"
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
            EMPLOYMENT DISCRIMINATION
          </p>
          <p
            style={{
              lineHeight: "50px",
              fontSize: "calc(var(--font-heading-scale) * 1.4rem)",
            }}
          >
            Employees are supposed to be protected from discrimination by
            several federal, state and local laws, but there are many situations
            where these laws are violated. Examples of common forms of
            discrimination in the workplace include: Racism, Sexism, Ageism, and
            Bigotry
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
              paddingBottom: "1rem",
            }}
          >
            California Employment Discrimination Attorney&apos;s
          </p>
          <p className="mission-statement-paragraph-elements">
            Unfortunately, a majority of discrimination issues go unreported
            which can lead to a toxic work environment. If you have experienced
            discrimination in your workplace, it is important to contact an
            employment discrimination lawyer to know what your rights are and
            ask any questions. Call us today if you have any questions. Free
            Case Evaluation.
          </p>
        </div>
        <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
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
            Have You Experienced Discrimination at Work?
          </p>
          <p className="mission-statement-paragraph-elements">
            CFK Trial Lawyers For The People represent clients who have been
            discriminated against in the workplace.
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
            California Fair Employment and Housing Act
          </p>
          <p className="mission-statement-paragraph-elements">
            California’s Fair Employment and Housing Act (FEHA) protects people
            working for companies of more than 5 employees from discrimination
            in a variety of business areas including advertisements,
            applications & interviews, hiring, promotion, termination, and
            compensation. The FEHA prohibits harassment based on a protected
            category against an employee, an applicant, an unpaid intern or
            volunteer, or a contractor. Protected traits include age, ancestry,
            nationality, race, disability, gender & gender identity, marital
            status, military or veteran status, religion, and sexual
            orientation. You have rights and we defend them.
          </p>
        </div>
        <div style={{ backgroundColor: "#232323", padding: "0 2rem" }}>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "700",
              color: "#c39d63",
              padding: "4rem 0 0rem 1rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            Examples of Discrimination
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 3rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            1. Termination or firing an employee
          </p>

          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 3rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            2. Failure to hire
          </p>

          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 0 3rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            3. Decrease in pay or benefits
          </p>
          <p
            className="gold-mission-lettering"
            style={{
              fontWeight: "500",
              color: "#c39d63",
              padding: "2rem 0 2rem 3rem",
              fontSize: "2rem",
              textAlign: "left",
            }}
          >
            4. Denying a promotion
          </p>
          <p
            className="mission-statement-paragraph-elements"
            style={{ paddingBottom: "4rem" }}
          >
            Proving a claim of discrimination can be challenging without direct
            evidence like emails, texts, and other correspondence; however, it
            is not impossible. The best thing to do would be to ask a lawyer
            what your options are. Consultations are free, and the advice could
            prove to be invaluable to not only yourself but your coworkers who
            may also be in a bad situation. CFK Trial Lawyers For The People has
            represented several victims of workplace discrimination, and we
            would be happy to walk you through the process.
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
