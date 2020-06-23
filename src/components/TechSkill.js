import React, { Component } from "react";
import styles from "./TechSkill.module.css";
import { Row, Col } from "reactstrap";

class TechSkill extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="12">
            <h2 className={styles.techSkillTitle}>
              지금껏
              <br />
              배운 기술입니다.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md="6" className={styles.techSmallTitle}>
            <b>보유기술</b>
          </Col>
          <Col md="6" className={styles.techContent}>
            <dl>
              <dt>Programming Language</dt>
              <dd>Javascript(ES6),HTML5,CSS3</dd>
            </dl>
            <dl>
              <dt>Framework/Library</dt>
              <dd>
                React, Bootstrap(Reactstrap), Redux, Sass, Material,
                Create-react-app, jQuery
              </dd>
            </dl>
            <dl>
              <dt>Test</dt>
              <dd>Jest, React-testing-library</dd>
            </dl>
            <dl>
              <dt>Tooling/DevOps</dt>
              <dd>Git, GitHub, GitBash, Npm, Yarn</dd>
            </dl>
            <dl>
              <dt>Environment</dt>
              <dd>Windows, MacOs</dd>
            </dl>
            <dl>
              <dt>Etc</dt>
              <dd>Notion, Zeppelin, Visual Studio Code</dd>
            </dl>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col md="6" className={styles.techSmallTitle}>
            <b>협업</b>
          </Col>
          <Col md="6" className={styles.techContent}>
            <dl>
              <dt>Cooperation Tool</dt>
              <dd>Slack, Google Email</dd>
            </dl>
            <dl>
              <dt>디자인</dt>
              <dd>Zeppelin, InVision, Photoshop, Adobe XD</dd>
            </dl>
            <dl>
              <dt>기획</dt>
              <dd>PowerPoint, Balsamiq Mockups</dd>
            </dl>
            <dl>
              <dt>프로젝트</dt>
              <dd>GitHub, Google Drive, Redmine, Notion, Trello</dd>
            </dl>
            <dl>
              <dt>코드리뷰</dt>
              <dd>Gerrit</dd>
            </dl>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col md="6" className={styles.techSmallTitle}>
            <b>앞으로 관심분야</b>
          </Col>
          <Col md="6" className={styles.techContent}>
            <dl>
              <dt>Interests</dt>
              <dd>Vue.js</dd>
              <dd>Node.js</dd>
            </dl>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TechSkill;
