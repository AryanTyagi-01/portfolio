import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">

        <div className="contact-card">
          <FaEnvelope className="phone-icon" />
          <h3>Email</h3>
          <p>aryantyagi@email.com</p>
        </div>

        <div className="contact-card">
          <FaPhone className="phone-icon" />

          <h3>Phone</h3>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="phone-icon" />
          <h3>Location</h3>
          <p>India</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
