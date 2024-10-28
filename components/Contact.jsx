import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [number, setNumber] = useState("");
  const [injurred, setInjured] = useState("");
  const [whatHappend, setWhatHappened] = useState("");

  function sendEmailToUser(event) {
    event.preventDefault();
    emailjs
      .send(
        "service_v817rf9",
        "template_27ahtvf",
        {
          name_: name,
          user_email: userEmail,
          user_number: number,
          isInjured: injurred,
          what_happened: whatHappend,
        },
        "gSLGTCoIeNGBSJJhE"
      )
      .then(
        function (response) {
          console.log("SUCCESS", response);
        },
        function (error) {
          console.log("FAILED", error);
        }
      );
    return false;
  }

  function sendEmailToFirm(event) {
    event.preventDefault();
    emailjs
      .send(
        "service_v817rf9",
        "template_kuk8yuk",
        {
          name_: name,
          user_email: userEmail,
          user_number: number,
          isInjured: injurred,
          what_happened: whatHappend,
        },
        "gSLGTCoIeNGBSJJhE"
      )
      .then(
        function (response) {
          console.log("SUCCESS", response);
        },
        function (error) {
          console.log("FAILED", error);
        }
      );
    return false;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="contact-wrapper" id="contact">
      <div className="contact">
        <div className="cta">
          <span>Free case evaluation</span>
        </div>
        <form>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="What is your name?"
            id="checking"
          ></input>
          <input
            type="text"
            placeholder="Your email"
            id="checking"
            onChange={(e) => {
              setUserEmail(e.target.value.toLowerCase());
            }}
          ></input>
          <input
            type="text"
            placeholder="Your phone number"
            color="#fff"
            id="checking"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Are you injured?"
            color="#fff"
            id="checking"
            onChange={(e) => {
              setInjured(e.target.value);
            }}
          ></input>
          <textarea
            name="text"
            rows="14"
            cols="10"
            wrap="soft"
            id="checking"
            type="submit"
            placeholder="What happened?"
            onChange={(e) => {
              console.log(e.target.value);
              setWhatHappened(e.target.value);
            }}
          ></textarea>
          <button
            type="submit"
            name="send"
            className="send-button"
            onClick={(e) => {
              sendEmailToUser(e);
              sendEmailToFirm(e);
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
