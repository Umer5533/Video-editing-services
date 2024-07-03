import React from "react";
import "./Contact.css";
import phoneIcon from "../../assets/phoneIcon.png";
import emailIcon from "../../assets/emailIcon.png";
import locationIcon from "../../assets/locationIcon.png";
import msgIcon from "../../assets/msgIcon.png";
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0cc1a407-b25f-4e0a-8868-d658af18635e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className="container" id="contact">
      <div className="left">
        <h2>Contact Information</h2>
        <p>
          Get professional video production services and boost your marketing
          efforts. Book an appointment with our Video Production House today and
          tells your brand’s unique story to your audience. We make impactful
          videos, powerful animation and
        </p>
        <p>
          <img src={phoneIcon} alt="" /> +1234567890
        </p>
        <p>
          <img src={emailIcon} alt="" /> info@company.com
        </p>
        <p>
          <img src={locationIcon} alt="" /> 123 Street, City, Country
        </p>
      </div>
      <div className="right">
        <h2>
          Send Us a Message <img src={msgIcon} alt="" />{" "}
        </h2>
        <form  onSubmit={onSubmit}>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label for="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
          />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="nextgen@gmail.com"
            required
          />

          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
