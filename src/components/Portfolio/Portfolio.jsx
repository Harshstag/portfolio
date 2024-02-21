import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { projectPortfolio } from "../../utils/data";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Portfolio = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
          <a
            href="https://github.com/Harshstag"
            target="_blank"
            className="secondaryText"
          >
            Explore My Github
          </a>
        </div>

        <div className={`flexCenter ${css.showCase}`}>
          {projectPortfolio.map((exp, i) => {
            return (
              <div className={css.exp} key={i}>
                <img
                  className=""
                  variants={fadeIn("up", "tween", 0.5, 0.6)}
                  src={exp.img}
                  alt="project"
                />

                <div className="flexCenter">
                  <a className="flexCenter" href={exp.link}>
                    <span>{exp.name}</span>
                  </a>
                  <p className="flexCenter">{exp.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
