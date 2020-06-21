import React, { Component } from "react";
import styles from "./SideContent.module.css";
import { Link } from "react-router-dom";

class SideContent extends Component {
  render() {
    return (
      <div>
        <div className={styles.LogoName}>
          YESSEO
          <br /> SON
        </div>
        <div className={styles.ListGroup}>
          <Link to="/" className={styles.ListItem}>
            HOME
          </Link>
          <Link to="/about" className={styles.ListItem}>
            ABOUT
          </Link>
          <Link to="/tech_skill" className={styles.ListItem}>
            TECH SKILLS
          </Link>
          <Link to="/project" className={styles.ListItem}>
            PROJECT
          </Link>
          <Link to="/experience" className={styles.ListItem}>
            EXPERIENCE
          </Link>
          <Link to="/career" className={styles.ListItem}>
            CAREER
          </Link>
          <Link to="/education" className={styles.ListItem}>
            EDUCATION
          </Link>
          <Link to="/blog" className={styles.ListItem}>
            BLOG
          </Link>
          <Link to="/contact" className={styles.ListItem}>
            CONTACT
          </Link>
        </div>
      </div>
    );
  }
}

export default SideContent;
