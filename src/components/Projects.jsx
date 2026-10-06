import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "The Trio",
    category: "Frontend",
    description:
      "A modern multi-page website built for three friends, featuring a strong visual identity, responsive layouts and interactive sections for presenting their story, journey and memories.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
    ],
    status: "Completed",
    featured: true,
    image: "/the-trio-final.png",
    github: "#",
   demo: "https://the-trio-website.vercel.app/",
  },

  {
    id: 2,
    title: "Vantora Global Recruitment",
    category: "Web",
    description:
      "A professional recruitment website designed with a modern interface, responsive layouts and a clear user experience for presenting recruitment services and connecting candidates with opportunities.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Vite",
    ],
    status: "Completed",
    featured: true,
    image: "/vantora-final.png",
    github: "#",
   demo: "https://www.vantoraglobalrecruitments.com/",
  },

  {
  id: 3,
  title: "The FIP Ecosystem",
  category: "Full Stack",
  description:
    "A full-stack digital ecosystem connecting TapBlox, Artisan, iPromotion and Casagrandes in one platform. The ecosystem includes service marketplaces, artisan profiles, promotions, entertainment and lifestyle experiences, supported by authentication, account functionality, interactive features and connected user experiences.",
  technologies: [
    "React",
    "JavaScript",
    "Supabase",
    "Authentication",
  ],
  status: "In Progress",
  featured: false,
    image: "/tapblox-final.png",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    "All",
    "Frontend",
    "Full Stack",
    "Web",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="section-container">

        {/* Section heading */}
        <div className="section-heading">

          <span className="section-number">
            03
          </span>

          <div>
            <p className="section-label">
              SELECTED WORK
            </p>

            <h2>
              Things I've
              <span> built.</span>
            </h2>
          </div>

        </div>


        {/* Filters */}
        <div className="project-filters">

          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>
          ))}

        </div>


        {/* Project grid */}
        <div className="projects-grid">

          {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >

              {/* Project screenshot */}
              <div className="project-preview">

                <img
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  className="project-image"
                />

                <span
                  className={
                    project.status === "Completed"
                      ? "project-status completed"
                      : "project-status progress"
                  }
                >
                  {project.status}
                </span>

              </div>


              {/* Project information */}
              <div className="project-info">

                <div className="project-meta">

                  <span>
                    {project.category}
                  </span>

                  <span>
                    0{project.id}
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                <div className="technology-list">

                  {project.technologies
                    .slice(0, 3)
                    .map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                </div>


                <button
                  className="project-details-btn"
                  onClick={() =>
                    setSelectedProject(project)
                  }
                >
                  View Project

                  <span>
                    ↗
                  </span>

                </button>

              </div>

            </article>
          ))}

        </div>

      </div>


      {/* Project modal */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() =>
            setSelectedProject(null)
          }
        >

          <div
            className="project-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedProject(null)
              }
              aria-label="Close project details"
            >
              ×
            </button>


            <div className="modal-number">
              PROJECT 0{selectedProject.id}
            </div>


            <p className="section-label">
              {selectedProject.category}
            </p>


            <h2>
              {selectedProject.title}
            </h2>


            <p className="modal-description">
              {selectedProject.description}
            </p>


            <div className="modal-tech">

              {selectedProject.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                )
              )}

            </div>


            <div className="modal-actions">

              {selectedProject.github !== "#" && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-btn primary"
                >
                  GitHub ↗
                </a>
              )}


              {selectedProject.demo !== "#" && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-btn secondary"
                >
                  Live Demo ↗
                </a>
              )}

            </div>

          </div>

        </div>
      )}

    </section>
  );
}

export default Projects;