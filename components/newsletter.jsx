import { useState } from "react";
import Link from "next/link";
import { footerLogosSource } from "./footerLogosSrc";
export default function Newsletter() {
 // State to manage the input value
 const [inputValue, setInputValue] = useState("");

 // Function to handle input changes
 const handleInputChange = (e) => {
  setInputValue(e.target.value);
  console.log(e.target.value);
 };

 // Function to handle form submission
 const handleSubmit = (e) => {
  e.preventDefault();
  // Do something with the input value, e.g., submit to a server or perform an action
  console.log("Submitted:", inputValue);
 };
 return (
  <div className="newsletter-container">
   <p style={{ fontWeight: "700", backgroundColor: "black" }}>NEWSLETTER</p>
   <form onSubmit={handleSubmit}>
    {/* Input field with an onChange event */}
    <input
     type="text"
     value={inputValue}
     onChange={handleInputChange}
     placeholder="Enter Email"
    />

    {/* Submit button */}
    <button type="submit">GO</button>
   </form>
   {/* <div
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {footerLogosSource.map((item, index) => {
          return (
            <div className={item.cName} key={index}>
              <Link href={item.path}>
                <img src={item.imgURL} />
              </Link>
            </div>
          );
        })}
      </div> */}
  </div>
 );
}
