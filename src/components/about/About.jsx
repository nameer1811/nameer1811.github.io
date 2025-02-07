import React from "react";
import "./about.css";
import ME from "../../assets/Me-2.jpg";

const About = () => {
  const tech_stack = [
    "Python",
    "SQL",
    "Java",
    "Google Cloud Platform",
    "Terraform",
    "R",
    "Tableau",
    "Git",
    "Linux"
  ];
  return (
    <section id="about">
      <div className="section__title">
        <h1>About me</h1>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I am currently pursuing my Master's of Science in <b>Data Analytics</b> at {" "}
            <b>
              <a href="https://www.gatech.edu/">Georgia Institute of Technology</a>
            </b>.
            I have completed my Bachelor's of Science in <b>Computer Science</b> and <b>Data Science</b>{" "}
            double major at{" "}
            <b>
              <a href="https://www.winona.edu/">Winona State University</a>
            </b>.
          </p>
          <div className="technology">
            <p>Here are some of the technologies I like to work with:</p>
            <ul>
              {tech_stack.map(function (tech_item, i) {
                return <li>{tech_item}</li>;
              })}
            </ul>
          </div>
          <p>
            Outside of work, I like to have a lot fun with friends. I like to
            workout and go for walks. I love to play sports and watch games. I
            also play a lot of video games.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
