export default function Contact() {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact">
        <div className="cta">
          <span>Free case evaluation</span>
        </div>
        <form>
          <input
            type="text"
            placeholder="What is your name?"
            id="checking"
          ></input>
          <input type="text" placeholder="Your email" id="checking"></input>
          <input
            type="text"
            placeholder="Your phone number"
            color="#fff"
            id="checking"
          ></input>
          <input
            type="text"
            placeholder="Are you injured?"
            color="#fff"
            id="checking"
          ></input>
          <textarea
            name="text"
            rows="14"
            cols="10"
            wrap="soft"
            id="checking"
            type="submit"
            placeholder="What happened?"
          ></textarea>
          <button type="submit" name="send" className="send-button">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
