import React, { Component } from "react";
import styles from "./Main.module.css";
import { Container, Row, Col } from "reactstrap";
import MainImg from "../images/1.jpg";

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className={styles.MainImgWrapper}>
              <img src={MainImg} className={styles.MainImg} />
              <p className={styles.MainTitle}>
                I'm Jr.Front-End
                <br />
                Developer
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
