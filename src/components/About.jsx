function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">

        {/* Section heading */}
        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-label">ABOUT ME</p>

            <h2>
              Building ideas into
              <span> digital experiences.</span>
            </h2>
          </div>
        </div>


        <div className="about-grid">

          {/* Left side */}
          <div className="about-intro">

            <div className="about-image-wrapper">

              {/* John Fawale image */}
              <div className="about-image">
                <img
                  src="/about-john.png"
                  alt="John Fawale - Full Stack Web Developer"
                />
              </div>

              <div className="image-decoration"></div>

            </div>

          </div>


          {/* Right side */}
          <div className="about-content">

            <h3>
              I'm a Full Stack Web Developer who enjoys
              turning ideas into functional products.
            </h3>

            <p>
              I build modern websites and web applications
              with a strong focus on responsive design,
              usability, performance, and clean code.
            </p>

            <p>
              From designing the interface users interact with
              to building the functionality behind it, I enjoy
              working across different parts of the development
              process.
            </p>

            <p>
              I'm constantly learning, experimenting with new
              technologies, and improving the way I build for
              the web.
            </p>


            {/* Highlights */}
            <div className="about-highlights">

              <div className="highlight-card">
                <span className="highlight-icon">01</span>

                <div>
                  <strong>Problem Solver</strong>

                  <p>
                    Turning complex ideas into practical
                    digital solutions.
                  </p>
                </div>
              </div>


              <div className="highlight-card">
                <span className="highlight-icon">02</span>

                <div>
                  <strong>Creative Thinker</strong>

                  <p>
                    Combining technology with thoughtful
                    design and user experience.
                  </p>
                </div>
              </div>


              <div className="highlight-card">
                <span className="highlight-icon">03</span>

                <div>
                  <strong>Always Learning</strong>

                  <p>
                    Continuously improving my skills and
                    exploring modern technologies.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;