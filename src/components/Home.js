import React, { Component } from "react";
import styles from "./Home.module.css";
import { Row, Col } from "reactstrap";
import { Slide } from "react-slideshow-image";
import HomeOne from "../images/home1.jpg";
import HomeTwo from "../images/home2.jpg";
import HomeThree from "../images/home3.jpg";

const properties = {
  duration: 3000,
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
          <div className={styles.MainImgWrapper}>
            <p className={styles.MainTitle}>
              I'm
              <br />
              Front-end developer
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
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Home;
