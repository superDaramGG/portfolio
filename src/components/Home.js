import React, { Component } from "react";
import styles from "./Home.module.css";
import { Row, Col } from "reactstrap";
import { Slide } from "react-slideshow-image";
import HomeOne from "../images/home1.jpg";
import HomeTwo from "../images/home2.jpg";
import HomeThree from "../images/home3.jpg";

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
};

class Home extends Component {
  render() {
    return (
      <Row>
        <Col>
          <div className={styles.mainImgWrapper}>
            <p className={styles.mainTitle}>
              HI,
              <br />
              I'M YESEO
            </p>
            <div>
              <Slide {...properties}>
                <div>
                  <span>
                    <img
                      src={HomeOne}
                      alt="홈 이미지 첫번째"
                      className={styles.imageSize}
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <img
                      src={HomeTwo}
                      alt="홈 이미지 두번째"
                      className={styles.imageSize}
                    />
                  </span>
                </div>
                <div>
                  <span>
                    <img
                      src={HomeThree}
                      alt="홈 이미지 세번째"
                      className={styles.imageSize}
                    />
                  </span>
                </div>
              </Slide>
              <div className={styles.homeText}>
                안녕하세요.
                <br />
                <br />
                사이트에 방문해주신 분들
                <br />
                모두 모두 행복하시고
                <br />
                부자 되세요.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Home;
