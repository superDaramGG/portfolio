import React, { Component } from "react";
import styles from "./Blog.module.css";
import { Row, Col } from "reactstrap";
import BlogImg from "../images/blogPic.png";

class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={styles.blogTitle}>BLOG</h2>
        <Row>
          <Col>
            <div>
              <a
                href="https://superdaramgg.tistory.com/"
                className={styles.blogImgWrapper}
                target="blank"
              >
                <img src={BlogImg} alt="블로그 이미지" />
              </a>
              <div className={styles.desc}>
                <h3>superDaramGG 개발로그</h3>
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
      </React.Fragment>
    );
  }
}

export default Blog;
