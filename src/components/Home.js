import React, { Component } from "react";
import styles from "./Home.module.css";
import { Row, Col } from "reactstrap";
import MainImg from "../images/mainPic.jpg";

class Home extends Component {
  render() {
    return (
      <Row>
        <Col>
          <div className={styles.MainImgWrapper}>
            <img src={MainImg} className={styles.MainImg} alt="메인이미지" />
            <p className={styles.MainTitle}>
              I'm Jr.Front-End
              <br />
              Developer
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Home;
