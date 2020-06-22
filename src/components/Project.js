import React, { Component } from "react";
import styles from "./Project.module.css";
import { Row, Col } from "reactstrap";

import CoinoneCoreImg from "../images/p1.png";
import MembershipImg from "../images/p2.png";

class Project extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={styles.projectTitle}>Project</h2>
        <Row className={styles.projectContent}>
          <Col md="6">
            <img
              src={CoinoneCoreImg}
              alt="코인원 코어 데모 사이트 이미지"
              className={styles.projectImgSize}
            />
          </Col>
          <Col md="6">
            <div>
              <dl>
                <dt>코인원 코어 데모 사이트</dt>
                <dd>React로 구성되어진 코인원 사이트입니다.</dd>
              </dl>
            </div>
          </Col>
        </Row>
        <Row className={styles.projectContent}>
          <Col md="6">
            <div>
              <dl>
                <dt>아이펀팩토리 회사 사이트 멤버십 프로젝트</dt>
                <dd>React로 구성되어진 사이트입니다.</dd>
              </dl>
            </div>
          </Col>
          <Col md="6">
            <img
              src={MembershipImg}
              alt="멤버십 사이트 페이지"
              className={styles.projectImgSize}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Project;
