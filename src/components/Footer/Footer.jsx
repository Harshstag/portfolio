import React from "react";
import { motion } from "framer-motion";
import css from "./Footer.module.scss";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import {
  fadeIn,
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        varfients={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>

          <span className="primaryText">
            Start by <a href="mailto:hrsharshsingh@gmail.com">Saying Hi</a>
          </span>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Nagpur, Maharashtra, India</p>
          </div>
          <div className={css.menu}>
            <a href="https://www.instagram.com/harshstag/" target="_blank">
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100025678741372"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a href="https://www.youtube.com/@harshstag" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/harshstag" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/harshstag/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Harshstag" target="_blank">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/harshstag/" target="_blank">
              <SiLeetcode />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
