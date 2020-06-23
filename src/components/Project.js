import React, { Component } from "react";
import styles from "./Project.module.css";
import { Row, Col } from "reactstrap";
import CoinoneCoreImg from "../images/p1.png";
import MembershipImg from "../images/p2.png";
import XgreenImg from "../images/p3.png";
import GurufitGodoImg from "../images/p4.png";
import GurufitBetaImg from "../images/p5.png";

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
            <a href="#" className={styles.btnBlue}>
              구현 기능 상세보기
            </a>
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
            <a href="#" className={styles.btnBlue}>
              구현 기능 상세보기
            </a>
          </Col>
        </Row>
        <Row className={styles.projectContent}>
          <Col md="3"></Col>
          <Col md="9">
            <img
              src={XgreenImg}
              alt="xgreen 사이트"
              className={styles.projectImgSize}
            />
            <div className="mt-5">
              <dl>
                <dt>Xgreen 거래소</dt>
                <dd>
                  React로 구성되어진 사이트입니다.
                  <br />
                  지금 현재는 랜딩 페이지만 남아있는 상태입니다.
                </dd>
              </dl>
            </div>
            <a href="#" className={styles.btnBlue}>
              구현 기능 상세보기
            </a>
          </Col>
        </Row>
        <Row className={styles.projectContent}>
          <Col md="3"></Col>
          <Col md="9">
            <img
              src={GurufitGodoImg}
              alt="구루핏 고도몰"
              className={styles.projectImgSize}
            />
            <div className="mt-5">
              <dl>
                <dt>구루핏 고도몰 사이트</dt>
                <dd>고도몰로 구축되어진 사이트입니다.</dd>
              </dl>
            </div>
            <a href="#" className={styles.btnBlue}>
              구현 기능 상세보기
            </a>
          </Col>
        </Row>
        <Row className={styles.projectContent}>
          <Col md="3"></Col>
          <Col md="9">
            <img
              src={GurufitBetaImg}
              alt="구루핏 베타"
              className={styles.projectImgSize}
            />
            <div className="mt-5">
              <dl>
                <dt>구루핏 베타</dt>
                <dd>HTML, CSS, jQuery로 구축되어진 사이트입니다.</dd>
              </dl>
            </div>
            <a href="#" className={styles.btnBlue}>
              구현 기능 상세보기
            </a>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Project;
