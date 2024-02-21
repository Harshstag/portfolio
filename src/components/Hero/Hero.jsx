import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Harsh.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            21 year old kid, The same <br />
            old kid with a dream.{" "}
            <div className={css.menu}>
              <a href="https://www.instagram.com/harshstag/" target="_blank">
                <FaInstagram size={25} />
              </a>
              <a href="https://www.linkedin.com/in/harshstag/" target="_blank">
                <FaLinkedin size={25} />
              </a>
              <a href="https://github.com/Harshstag" target="_blank">
                <FaGithub size={25} />
              </a>
              <a href="https://leetcode.com/harshstag/" target="_blank">
                <SiLeetcode size={25} />
              </a>{" "}
              <a href="https://www.youtube.com/@harshstag" target="_blank">
                <FaYoutube size={25} />
              </a>
            </div>
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./person.png"
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:hrsharshsingh@gmail.com">
          hrsharshsingh@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">10+</div>
            <div className="secondaryText">
              <div>Projects</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span className="$secondary-white">Find me anywhere</span>
            <span className="$secondary-white">@HarshStag</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
