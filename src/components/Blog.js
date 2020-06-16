import React, { Component } from "react";
import styles from "./Blog.module.css";
import { Container, Row, Col } from "reactstrap";

class Blog extends Component {
  render() {
    return (
      <div className={styles.BlogWrapper}>
        <Container>
          <Row>
            <Col>
              <h2 className={styles.BlogTitle}>BLOG</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.BlogContentWrapper}>
                <a href="" className={styles.BlogImgWrapper}>
                  <img src="#" alt="이미지" />
                </a>
                <div className={styles.desc}>
                  <h3>yete의 개발로그</h3>
                  <small>개발 블로그 운영</small>
                  <p>
                    더 성장하기 위해서
                    <br />
                    개발 블로그를 운영하기 시작했습니다.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Blog;
