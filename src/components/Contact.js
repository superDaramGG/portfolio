import React, { Component } from "react";
import styles from "./Contact.module.css";
import { Container, Row, Col } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <div className={styles.ContactWrapper}>
        <h2 className={styles.ContactTitle}>CONTACT</h2>
        <Container>
          <Row className="mt-5">
            <Col>
              <div className={styles.ContactBox}>
                <div className="d-flex">
                  <div className={styles.BoxFirst}>이름</div>
                  <div className={styles.BoxSecond}>손예서</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div className={styles.ContactBox}>
                <div className="d-flex">
                  <div className={styles.BoxFirst}>이메일</div>
                  <div className={styles.BoxSecond}>superior817@naver.com</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div className={styles.ContactBox}>
                <div className="d-flex">
                  <div className={styles.BoxFirst}>휴대전화</div>
                  <div className={styles.BoxSecond}>010-3310-7180</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
