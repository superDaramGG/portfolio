import React, { Component } from "react";
import styles from "./App.module.css";
import { Link, Switch, withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TechSkill from "./components/TechSkill";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Career from "./components/Career";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className={styles.Main}>
        <div className={styles.SidebarWrapper}>
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

        <section className={styles.SectionWrapper}>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/tech_skill" component={TechSkill} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(App);
