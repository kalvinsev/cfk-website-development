export default function FreeCaseEvalutaionButton() {
  const scrollToSection = () => {
    // Find the target section by its id
    const targetSection = document.getElementById("contact");

    // Scroll to the target section if it exists
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      type="submit"
      name="free-evaluation-button"
      className="free-evaluation-button"
      onClick={scrollToSection}
    >
      <span className="free-eval-span">Free Case Evaluation</span>
    </button>
  );
}
