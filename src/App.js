import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";
// import { Route } from "react-router-dom";
import styles from "./App.module.css";
import { BrowserRouter } from "react-router-dom";
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
            <a href="/" className={styles.ListItem}>
              HOME
            </a>
            <a href="/About" className={styles.ListItem}>
              ABOUT
            </a>
            <a href="/TechSkill" className={styles.ListItem}>
              TECH SKILLS
            </a>
            <a href="/Project" className={styles.ListItem}>
              PROJECT
            </a>
            <a href="/Experience" className={styles.ListItem}>
              EXPERIENCE
            </a>
            <a href="/Career" className={styles.ListItem}>
              CAREER
            </a>
            <a href="/Education" className={styles.ListItem}>
              EDUCATION
            </a>
            <a href="/Blog" className={styles.ListItem}>
              BLOG
            </a>
            <a href="/Contact" className={styles.ListItem}>
              CONTACT
            </a>
          </div>
        </div>

        <section className={styles.SectionWrapper}>
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/TechSkill" component={TechSkill} />
            <Route exact path="/Project" component={Project} />
            <Route exact path="/Experience" component={Experience} />
            <Route exact path="/Career" component={Career} />
            <Route exact path="/Education" component={Education} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/Contact" component={Contact} />
          </BrowserRouter>
        </section>
      </div>
    );
  }
}

export default App;
