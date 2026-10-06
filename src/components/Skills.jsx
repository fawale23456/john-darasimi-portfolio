const skills = [
  {
    number: "01",
    title: "HTML5",
    description:
      "Building semantic, accessible and well-structured web interfaces.",
    level: "Advanced",
    category: "Frontend",
  },

  {
    number: "02",
    title: "CSS3",
    description:
      "Creating responsive layouts, animations and modern visual experiences.",
    level: "Advanced",
    category: "Frontend",
  },

  {
    number: "03",
    title: "JavaScript",
    description:
      "Building interactive interfaces and dynamic web applications.",
    level: "Advanced",
    category: "Frontend",
  },

  {
    number: "04",
    title: "React",
    description:
      "Developing reusable components and modern React applications.",
    level: "Intermediate",
    category: "Frontend",
  },

  {
    number: "05",
    title: "Supabase",
    description:
      "Working with authentication, databases and backend services.",
    level: "Intermediate",
    category: "Backend",
  },

  {
    number: "06",
    title: "Git & GitHub",
    description:
      "Managing source code, version control and development workflows.",
    level: "Intermediate",
    category: "Tools",
  },

  {
    number: "07",
    title: "Responsive Design",
    description:
      "Creating websites that work smoothly across phones, tablets and desktops.",
    level: "Advanced",
    category: "Frontend",
  },

  {
    number: "08",
    title: "Vite",
    description:
      "Building fast and modern frontend applications with an efficient development workflow.",
    level: "Intermediate",
    category: "Tools",
  },
];


function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="section-container">

        {/* Section heading */}
        <div className="section-heading centered">

          <span className="section-number">
            02
          </span>

          <p className="section-label">
            MY SKILLS
          </p>

          <h2>
            Tools I use to
            <span> build for the web.</span>
          </h2>

          <p className="section-description">
            A growing set of technologies and tools I use
            to design, develop and bring modern digital
            experiences to life.
          </p>

        </div>


        {/* Skills grid */}
        <div className="skills-grid">

          {skills.map((skill) => (

            <article
              className="skill-card"
              key={skill.number}
            >

              {/* Top information */}
              <div className="skill-top">

                <span className="skill-number">
                  {skill.number}
                </span>

                <span className="skill-level">
                  {skill.level}
                </span>

              </div>


              {/* Category */}
              <span className="skill-category">
                {skill.category}
              </span>


              {/* Icon */}
              <div className="skill-icon">
                {"</>"}
              </div>


              {/* Skill name */}
              <h3>
                {skill.title}
              </h3>


              {/* Description */}
              <p>
                {skill.description}
              </p>


              {/* Bottom arrow */}
              <div className="skill-arrow">
                →
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}


export default Skills;