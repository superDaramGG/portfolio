import React, { Component } from "react";
import styles from "./Education.module.css";
import { Row, Col } from "reactstrap";

class Education extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={styles.educationTitle}>EDUCATION</h2>
        <Row>
          <Col md="4"></Col>
          <Col md="8">
            <div className={styles.timeLineWrapper}>
              <div className={styles.circleBox}></div>
              <div className={styles.timeLine}></div>
              <div className={styles.smallCircleOne}></div>
              <div className={styles.smallCircleTwo}></div>
              <div className={styles.smallCircleThree}></div>
              <div className={styles.smallCircleFour}></div>
              <div className={styles.smallCircleFive}></div>
              <div className={styles.smallCircleSix}></div>
              <div className={styles.textOne}>
                태장고 졸업
                <br />
                <b>2007년</b>
              </div>
              <div className={styles.textTwo}>
                명지대학교 정치외교학과, 철학과 졸업
                <br />
                <b>2011년</b>
              </div>
              <div className={styles.textThree}>
                오름컴퓨터학원 - 웹디자인 과정 수강
                <br />
                <b>2012.11-2013.1</b>
              </div>
              <div className={styles.textFour}>
                Java교육과정 - 비트 교육 센터
                <br />
                <b>2014.05-2014.09</b>
              </div>
              <div className={styles.textFive}>
                더조은컴퓨터학원 - Javascript & Jquery
                <br />
                <b>2015.05-2015.06(2개월)</b>
              </div>
              <div className={styles.textSix}>
                한국방송통신대학교 컴퓨터과학과 편입 및 재학중
                <br />
                <b>2019년 ~</b>
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Education;
