import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SideContent.module.css";
import { NavLink } from "react-router-dom";

class SideContent extends Component {
  render() {
    return (
      <div>
        <div className={styles.logoName}>
          YESSEO
          <br /> SON
        </div>
        <div className={styles.listGroup}>
          <NavLink
            to="/"
            className={styles.listItem}
            activeClassName="selected"
            onClick={this.props.onCloseClick}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={styles.listItem}
            activeClassName="selected"
            onClick={this.props.onCloseClick}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/tech_skill"
            className={styles.listItem}
            activeClassName="selected"
            onClick={this.props.onCloseClick}
          >
            TECH SKILLS
          </NavLink>
          <NavLink
            to="/project"
            className={styles.listItem}
            activeClassName="selected"
            onClick={this.props.onCloseClick}
          >
            PROJECT
          </NavLink>
          <NavLink
            to="/experience"
            className={styles.listItem}
            activeClassName="selected"
            onClick={this.props.onCloseClick}
          >
            EXPERIENCE
          </NavLink>
          <NavLink
            to="/career"
            className={styles.listItem}
            activeClassName="selected"
            onClick={this.props.onCloseClick}
          >
            CAREER
          </NavLink>
          <NavLink
            to="/education"
            className={styles.listItem}
            activeClassName="selected"
            onClick={this.props.onCloseClick}
          >
            EDUCATION
          </NavLink>
          <NavLink
            to="/blog"
            className={styles.listItem}
            activeClassName="selected"
            onClick={this.props.onCloseClick}
          >
            BLOG
          </NavLink>
          <NavLink
            to="/contact"
            className={styles.listItem}
            activeClassName="selected"
            onClick={this.props.onCloseClick}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    );
  }
}

SideContent.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
};

export default SideContent;
