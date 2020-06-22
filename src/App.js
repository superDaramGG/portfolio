import React, { Component } from "react";
import styles from "./App.module.css";
import { Switch, withRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TechSkill from "./components/TechSkill";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Career from "./components/Career";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { Container, Row, Col } from "reactstrap";
import SideContent from "./components/SideContent";
import MenuContent from "./components/MenuContent";

class App extends Component {
  render() {
    return (
      <Container className={styles.portAllWrapper}>
        <Row>
          <Col className={styles.buggerArea}>
            <div className="d-xs-block d-md-none">
              <MenuContent />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="3" className="d-none d-md-block d-lg-block">
            <SideContent />
          </Col>
          <Col md="9">
            <section>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(App);
