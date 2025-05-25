import "./style/contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h1>CONTACT US</h1>
        <h3>
          Partner with us to unlock opportunities and build a <br /> stronger
          future together
        </h3>
      </div>
      <div className="contact-lower">
        <div className="statement">
          <h3>
            We’re happy to answer any questions you may have and help you
            determine which of our services best fit your needs.
          </h3>
          <div className="benefit">
            <h3>Your benefits:</h3>
            <div className="list">
              <ul>
                <li>Free consultation</li>
                <li>Tailored solutions</li>
                <li>Expert guidance</li>
                <li>Ongoing support</li>
              </ul>
              <ul>
                <li>Proven results</li>
                <li>Competitive pricing</li>
                <li>Flexible options</li>
                <li>Customer satisfaction</li>
              </ul>
            </div>
          </div>
          <div className="next">
            <h3>What happens next?</h3>
            <div className="card-container">
              <div className="card">
                <h3>1.</h3>
                <p>We Schedule a call at your convenience </p>
              </div>
              <div className="card">
                <h3>2.</h3>
                <p>We Schedule a call at your convenience </p>
              </div>
              <div className="card">
                <h3>3.</h3>
                <p>We Schedule a call at your convenience </p>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <h3>Schedule a Free Consultation</h3>
          <hr color="black" />
          <form action="#">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
            <br />
            <label htmlFor="company">Company/Organisation</label>
            <input type="text" id="company" name="company" /> <br />
            <label htmlFor="email">Company Email</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="123-456-7890"
              required
            />{" "}
            <br />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Type your message here..."
              required
            ></textarea>{" "}
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
