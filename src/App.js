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
      <React.Fragment>
        <div className="d-xs-block d-md-none">
          <MenuContent />
        </div>
        <Container
          className={styles.portAllWrapper}
          style={{ height: "calc(100vh - 56px)" }}
        >
          <Row>
            <Col md="2" className="d-none d-md-block">
              <SideContent />
            </Col>
            <Col md="10">
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
      </React.Fragment>
    );
  }
}

export default withRouter(App);
