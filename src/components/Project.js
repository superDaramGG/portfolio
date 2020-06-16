import React, { Component } from "react";
import styles from "./Project.module.css";
import { Container, Row, Col } from "reactstrap";

class Project extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="6">
            <img src="" alt="" />
          </Col>
          <Col>
            <div>
              <dl>
                <dt>구루핏 오픈베타</dt>
                <dd>
                  구루핏 프로젝트를 진행하면서 javascript와 jquery를 바탕으로
                  진행했습니다 !
                </dd>
              </dl>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Project;
