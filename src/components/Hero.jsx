import { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = deleting ? 60 : 110;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return (
    <section className="hero" id="home">

      <div className="hero-background">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
      </div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="availability">
            <span className="status-dot"></span>
            Available for new projects
          </div>

          <p className="hero-intro">
            Hi, I'm
          </p>

          <h1>
            John <span>Darasimi.</span>
          </h1>

          <h2 className="hero-role">
            I'm a{" "}
            <span className="typing-text">
              {text}
            </span>
            <span className="typing-cursor">|</span>
          </h2>

          <p className="hero-description">
            I turn ideas into modern, responsive, and interactive
            digital experiences.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn btn-primary">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/fawale23456"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="#"
              aria-label="X"
            >
              X
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="code-card">

            <div className="code-header">

              <div className="window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="file-name">
                developer.jsx
              </div>

            </div>

            <div className="code-body">

              <div>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span>{" "}
                <span className="code-white">=</span>{" "}
                <span className="code-white">{"{"}</span>
              </div>

              <div className="code-indent">
                <span className="code-blue">name</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "John Fawale"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent">
                <span className="code-blue">role</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Full Stack Developer"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent">
                <span className="code-blue">passion</span>
                <span className="code-white">:</span>{" "}
                <span className="code-green">
                  "Building for the web"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent">
                <span className="code-blue">stack</span>
                <span className="code-white">:</span>{" "}
                <span className="code-white">[</span>
              </div>

              <div className="code-indent-2">
                <span className="code-green">
                  "React"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent-2">
                <span className="code-green">
                  "JavaScript"
                </span>
                <span className="code-white">,</span>
              </div>

              <div className="code-indent-2">
                <span className="code-green">
                  "Supabase"
                </span>
              </div>

              <div className="code-indent">
                <span className="code-white">]</span>
              </div>

              <div>
                <span className="code-white">{"}"}</span>
              </div>

              <div className="code-comment">
                // Let's build something great.
              </div>

            </div>

          </div>

          <div className="floating-card card-top">
            <span>⌘</span>
            Clean Code
          </div>

          <div className="floating-card card-bottom">
            <span>✦</span>
            Creative Solutions
          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;