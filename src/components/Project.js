import React, { Component } from "react";
import styles from "./Project.module.css";
import { Row, Col } from "reactstrap";
import CoinoneCoreImg from "../images/p1.png";
import MembershipImg from "../images/p2.png";

class Project extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={styles.projectTitle}>PROJECT</h2>
        <Row className={styles.projectContent}>
          <Col md="3"></Col>
          <Col md="9">
            <img
              src={CoinoneCoreImg}
              alt="코인원 코어 엔진 데모 사이트 이미지"
              className={styles.projectImgSize}
            />
            <div className="mt-5">
              <dl>
                <dt>코인원 코어 데모 사이트</dt>
                <dd>React로 만든 코인원 코어 데모 사이트입니다.</dd>
              </dl>
            </div>
          </Col>
        </Row>
        <Row className={styles.projectContent}>
          <Col md="3"></Col>
          <Col md="9">
            <img
              src={MembershipImg}
              alt="멤버십 사이트 페이지"
              className={styles.projectImgSize}
            />
            <div className="mt-5">
              <dl>
                <dt>아이펀팩토리 회사 사이트 멤버십 프로젝트</dt>
                <dd>React로 구성되어진 사이트입니다.</dd>
              </dl>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Project;