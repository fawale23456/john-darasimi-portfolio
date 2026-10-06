import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState("idle");


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };


  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject =
        "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please tell me a little about your project.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  setStatus("sending");

  try {
    await emailjs.send(
       "service_pt6t9pt",
  "template_87pstv5",
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "t9GKY-1yb-N5vJToi"
    );

    setStatus("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS error:", error);
    setStatus("error");
  }
};


  const handleNewMessage = () => {
    setStatus("idle");
  };


  return (
    <section
      className="contact-section"
      id="contact"
    >

      <div className="section-container">

        {/* =====================================
            SECTION HEADING
        ====================================== */}

        <div className="section-heading">

          <span className="section-number">
            05
          </span>

          <div>

            <p className="section-label">
              GET IN TOUCH
            </p>

            <h2>
              Let's build
              <span> something.</span>
            </h2>

          </div>

        </div>


        <div className="contact-grid">

          {/* =====================================
              CONTACT INFORMATION
          ====================================== */}

          <div className="contact-intro">

            <h3>
              Have an idea,
              project or opportunity?
            </h3>

            <p>
              Whether you need a website, web
              application or help bringing a digital
              idea to life, I'd love to hear about it.
            </p>


            {/* Email */}

            <a
              href="mailto:johndarasimi21@gmail.com"
              className="contact-info-item"
            >

              <span className="contact-icon">
                @
              </span>

              <span>

                <small>
                  EMAIL
                </small>

                <strong>
                  johndarasimi21@gmail.com
                </strong>

              </span>

            </a>


            {/* Location */}

            <div className="contact-info-item">

              <span className="contact-icon">
                /
              </span>

              <span>

                <small>
                  BASED IN
                </small>

                <strong>
                  Nigeria
                </strong>

              </span>

            </div>


            {/* Availability */}

            <div className="contact-info-item">

              <span className="contact-icon">
                +
              </span>

              <span>

                <small>
                  AVAILABILITY
                </small>

                <strong>
                  Open to opportunities
                </strong>

              </span>

            </div>


            {/* Social links */}

            <div className="contact-socials">

              <a
                href="https://github.com/fawale23456"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="#"
                onClick={(event) =>
                  event.preventDefault()
                }
              >
                LinkedIn
              </a>

              <a
                href="#"
                onClick={(event) =>
                  event.preventDefault()
                }
              >
                X
              </a>

            </div>

          </div>


          {/* =====================================
              CONTACT FORM
          ====================================== */}

          <div className="contact-form-wrapper">

            {status === "success" ? (

              /* SUCCESS STATE */

              <div className="contact-success">

                <div className="success-icon">
                  ✓
                </div>

               <h3>
  Message sent successfully!
</h3>

<p>
  Thanks for reaching out. Your message has been
  delivered successfully, and I'll get back to you soon.
</p>

                <button
                  type="button"
                  onClick={handleNewMessage}
                  className="new-message-btn"
                >
                  Send another message
                </button>

              </div>

            ) : (

              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* Name */}

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={
                      errors.name
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.name && (
                    <span className="form-error">
                      {errors.name}
                    </span>
                  )}

                </div>


                {/* Email */}

                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={
                      errors.email
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.email && (
                    <span className="form-error">
                      {errors.email}
                    </span>
                  )}

                </div>


                {/* Subject */}

                <div className="form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Let's work together"
                    value={formData.subject}
                    onChange={handleChange}
                    className={
                      errors.subject
                        ? "input-error"
                        : ""
                    }
                  />

                  {errors.subject && (
                    <span className="form-error">
                      {errors.subject}
                    </span>
                  )}

                </div>


                {/* Message */}

                <div className="form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className={
                      errors.message
                        ? "input-error"
                        : ""
                    }
                  ></textarea>

                  {errors.message && (
                    <span className="form-error">
                      {errors.message}
                    </span>
                  )}

                </div>

{/* Submit */}
<button
  type="submit"
  className="contact-submit"
  disabled={status === "sending"}
>
  {status === "sending" ? (
    <>
      <span className="submit-spinner"></span>
      Sending...
    </>
  ) : (
    <>
      Send Message
      <span>↗</span>
    </>
  )}
</button>

{status === "error" && (
  <p
    style={{
      marginTop: "12px",
      color: "#d64545",
      fontSize: "14px",
    }}
  >
    Something went wrong while sending your message. Please try again.
  </p>
)}

</form>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;