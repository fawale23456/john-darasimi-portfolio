const experiences = [
  {
    year: "CURRENT",
    number: "01",
    title: "TapBlox — Full Stack Development",
    company: "Ongoing Project",
    description:
      "Currently developing TapBlox, a service marketplace connecting customers with artisans. Working across authentication, artisan profiles, service requests, request management, reviews, payments and account functionality.",
    technologies: [
      "React",
      "Supabase",
      "Authentication",
      "JavaScript",
      "CSS",
    ],
    current: true,
  },

  {
    year: "SEP 21, 2026",
    number: "02",
    title: "TheTrio",
    company: "First Website Project",
    description:
      "My first website development project. Designed and developed a modern multi-page website with responsive layouts, interactive sections and a strong visual presentation. The website was published to Vercel on September 21, 2026.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Vercel",
    ],
    current: false,
  },

  {
    year: "SEP 10, 2026",
    number: "03",
    title: "Vantora Global Recruitment",
    company: "First Major Website Project",
    description:
      "Designed and developed my first major website project, creating a professional recruitment website with a modern responsive interface and a clear user experience for presenting recruitment services. Completed on September 10, 2026.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
    ],
    current: false,
  },

  {
    year: "AUG 2025",
    number: "04",
    title: "Started Web Development",
    company: "Beginning of My Development Journey",
    description:
      "Started learning website development in August 2025 shortly after graduating. This marked the beginning of my journey into building websites, learning frontend technologies and turning ideas into working digital experiences.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
    ],
    current: false,
  },
];

function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
    >
      <div className="section-container">

        {/* Section heading */}
        <div className="section-heading">
          <span className="section-number">
            04
          </span>

          <div>
            <p className="section-label">
              EXPERIENCE
            </p>

            <h2>
              Building.
              <span> Learning. Shipping.</span>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">

          {/* Timeline line */}
          <div className="timeline-line"></div>

          {experiences.map((experience) => (
            <article
              className={`experience-item ${
                experience.current
                  ? "current-experience"
                  : ""
              }`}
              key={experience.number}
            >

              {/* Timeline marker */}
              <div className="timeline-marker">
                <span>
                  {experience.number}
                </span>
              </div>

              {/* Year */}
              <div className="experience-year">
                {experience.year}
              </div>

              {/* Content */}
              <div className="experience-card">

                <div className="experience-card-top">

                  <div>
                    <p className="experience-company">
                      {experience.company}
                    </p>

                    <h3>
                      {experience.title}
                    </h3>
                  </div>

                  {experience.current && (
                    <span className="current-badge">
                      <span></span>
                      CURRENT
                    </span>
                  )}

                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-technologies">
                  {experience.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="experience-footer">
          <p>
            Every project is another opportunity to
            learn, solve problems and build something
            better.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;