import React, { Component } from "react";
import styles from "./Experience.module.css";
import { Container, Row, Col } from "reactstrap";

class Experience extends Component {
  render() {
    return (
      <div className={styles.ExpWrapper}>
        <h2>지금까지 해왔던 경험들입니다.</h2>
        <Container>
          <Row>
            <Col md="4">
              <div className={styles.ExpBox}>
                <dl>
                  <dt>스타트업 경험</dt>
                  <dd>
                    구루핏은 2017년 1월에 창립된 스타트업 기업입니다. 고객 한 명
                    한 명이 사이즈와 스타일이 모두 딱 맞는 신발 상품을 찾을 수
                    있도록 선택을 도와주고, 불편을 제거하는 서비스를 만들기
                    위해서 팀원들과 머리를 맞대고 스타트업을 성장시키기 위해서
                    노력했습니다.
                  </dd>
                </dl>
              </div>
            </Col>
            <Col md="4">
              <div className={styles.ExpBox}>
                <dl>
                  <dt>웹디자인 경험</dt>
                  <dd>
                    대학을 막 졸업하고, 웹 디자인 기능사 시험을 공부해서 합격한
                    후 한 온라인 쇼핑몰 회사에서 아르바이트로 상세 페이지
                    디자인을 해서 인터넷 사이트에 올리는 경험을 했습니다.
                  </dd>
                </dl>
              </div>
            </Col>
            <Col md="4">
              <div className={styles.ExpBox}>
                <dl>
                  <dt>웹퍼블리셔 경험</dt>
                  <dd>
                    웹디자인을 하면서 HTML, CSS를 공부하게 되었고, 퍼블리셔로
                    일을 하면서 다양한 웹 사이트 퍼블리싱을 해본 경험이
                    있습니다.
                  </dd>
                </dl>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div className={styles.ExpBox}>
                <dl>
                  <dt>쇼핑몰 경험</dt>
                  <dd>
                    스킨스쿠버 제품을 판매하는 쇼핑몰과 스타트업 경험을 하면서
                    신발을 판매하는 쇼핑몰을 제작하고, 운영해 본 경험이
                    있습니다.
                  </dd>
                </dl>
              </div>
            </Col>
            <Col md="4">
              <div className={styles.ExpBox}>
                <dl>
                  <dt>고도몰, 카페 24 운영 경험</dt>
                  <dd>
                    쇼핑몰을 운영하면서 고도몰과 카페 24에 상품을 올리고, 사이트
                    소스를 수정하면서 운영한 경험이 있습니다.
                  </dd>
                </dl>
              </div>
            </Col>
            <Col md="4">
              <div className={styles.ExpBox}>
                <dl>
                  <dt>거래소 경험</dt>
                  <dd>
                    비트코인 거래소 사이트를 제작해 본 경험을 가지고 있습니다.
                  </dd>
                </dl>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Experience;
