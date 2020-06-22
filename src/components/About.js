import React, { Component } from "react";
import styles from "./About.module.css";
import { Row, Col } from "reactstrap";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md="6">
            <div className={styles.aboutLeft}>
              <h2>
                주니어 프론트엔드
                <br /> 개발자 입니다.
              </h2>
              <p className={styles.first}>
                <b>"안녕하세요. 손예서 입니다."</b>
              </p>
              <p className={styles.second}>
                그동안 퍼블리셔로 일하다가,
                <br />
                조금 늦게 프론트엔드 개발을
                <br />
                시작하게 되었습니다.
                <br />
                앞으로도 코딩 실력을 연마하여
                <br />
                양질의
                <br />
                코드를 세상에 내놓을 수 있는
                <br />
                그리고 선한 영향력을 행사할 수 있는
                <br />
                개발자가 되도록 노력하겠습니다.
                <br />
              </p>
            </div>
          </Col>
          <Col md="6">
            <ul className={styles.aboutRight}>
              <li>끼 - 성실</li>
              <li>깡 - 원칙과 습관</li>
              <li>끈 - 베풀자</li>
              <li>꼴 - 표정, 건강, 내 이미지는 내가 만들것</li>
              <li>꿈 - 노력과 철학</li>
              <li>취미/특기 - 요리, 산책하기, IT기사보기, 영화/칵테일만들기</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="3">
            <div className={`${styles.aboutSkillBox} ${styles.one}`}>
              <h3>HTML&CSS&JS</h3>
            </div>
          </Col>
          <Col md="3">
            <div className={`${styles.aboutSkillBox} ${styles.two}`}>
              <h3>React&Redux</h3>
            </div>
          </Col>
          <Col md="2">
            <div className={`${styles.aboutSkillBox} ${styles.three}`}>
              <h3>JQuery</h3>
            </div>
          </Col>
          <Col md="2">
            <div className={`${styles.aboutSkillBox} ${styles.four}`}>
              <h3>BootStrap</h3>
            </div>
          </Col>
          <Col md="2">
            <div className={`${styles.aboutSkillBox} ${styles.five}`}>
              <h3>Sass</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <div className={styles.aboutBigBox}>
              <p>
                어제보다 더 좋은 개발자가 되기 위해서
                <br />
                노력합니다.
              </p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default About;
