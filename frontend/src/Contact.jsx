import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com"; // Import the emailjs-com package

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID and template ID
    const serviceId = "service_e3wvnip";
    const templateId = "template_f55g3te";
    const publicKey = "WZuPVOfQF6NSslq0r"; // Your EmailJS public key

    // Send email using EmailJS
    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      (response) => {
        console.log("Email sent successfully:", response);
        e.target.reset();
      },
      (error) => {
        console.error("Email sending error:", error);
      }
    );
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to get in touch with
        us. We'd love to hear from you!
      </p>
      <form className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email_from" required />

        <label htmlFor="message">Message Or Any Review:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
