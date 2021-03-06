import React, { Component } from "react";
import styles from "./Contact.module.css";
import { Row, Col } from "reactstrap";
import ContactImg from "../images/contactPic.jpg";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={styles.contactTitle}>CONTACT</h2>
        <Row>
          <Col md="6">
            <div className={styles.contactDesc}>
              <p>Do it big, do it right do it with style.</p>
            </div>
            <div className={styles.contactWrapper}>
              <dl>
                <dt>이름</dt>
                <dd>손예서 Yeseo Son</dd>
              </dl>
              <dl>
                <dt>이메일</dt>
                <dd>superior817@naver.com</dd>
              </dl>
              <dl>
                <dt>연락처</dt>
                <dd>010-3310-7180</dd>
              </dl>
            </div>
          </Col>
          <Col md="6" className={styles.imgWrapper}>
            <img
              src={ContactImg}
              alt="셔틀랜드 포니"
              className={styles.contactImg}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Contact;
