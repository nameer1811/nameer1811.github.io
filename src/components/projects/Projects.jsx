import React from "react";
import "./projects.css";
import { AiOutlineGithub } from "react-icons/ai";
// import ML1 from "../../assets/ML1.jpg";
// import ML2 from "../../assets/ML2.jpg";
// import ML3 from "../../assets/ML3.jpg";
// import ML4 from "../../assets/ML4.jpg";

const data = [
  {
    id: 1,
    // image: ML1,
    title:
      "Generating High Resolution Image Using Hybrid Neural Network of DBSRCNN and DDSRCNN",
    github:
      "https://github.com/nameer1811/first-deep-learning-research-project",
  },
  {
    id: 2,
    // image: ML2,
    title: "Lan Bros",
    github: "https://github.com/nameer1811/lan-bros",
  },
  {
    id: 3,
    // image: ML3,
    title: "Math Tutor",
    github: "https://github.com/nameer1811/math-tutor",
  },
  {
    id: 4,
    // image: ML4,
    title: "WSU Led Grid Project",
    github: "https://github.com/nameer1811/ledgrid",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section__title">
        <h1>Projects</h1>
      </div>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              {/* <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div> */}
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="portfolio__item-icon" /> Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
