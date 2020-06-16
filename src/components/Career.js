import React, { Component } from "react";
import styles from "./Career.module.css";
import { Container, Row, Col } from "reactstrap";

class Career extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.CareerTitle}>WORK CAREER</h2>
        <Container>
          <Row>
            <Col md="2">
              <div className={styles.BlueCircle}>1</div>
            </Col>
            <Col md="10">
              <div className={styles.CompanyBoxFirst}>
                <h2>주)아이펀 팩토리</h2>
                <span>2019.01~2020.06</span>
                <p>
                  미텔슈탄트에서 다양한 프로그램들을 기획 및 총괄 운영
                  관리하였습니다.기획 및 운영한 프로그램으로는 대구경북 원데이
                  비즈쿨 창업캠프 [대구경북지방중소벤처기업청], 제주 새싹꿈나무
                  창업캠프 [제주대학교 LINC+사업단], 창업동아리를 위한 프로젝트
                  워커톤 [경북대학교 연구산학처], 지방권역 민간 창업교육
                  프로그램 [창업진흥원], KNU 창업역량강화캠프 '창업드림캠프'
                  운영 [경북대학교 산학협력단], 대구창업카페 운영 [대구광역시,
                  대구창조경제혁신센터], 고교창업 인재육성 특성화사업 창업캠프
                  및 창업경진대회 운영 [대전광역시, 대전경제통상진흥원],
                  김원길창업스쿨 '스타트업 투어' 운영 [경북대학교 경상대학],
                  미래 CTO를 꿈꾸는 개발자를 위한 '스타트업 투어' 운영
                  [경북대학교 PRIME사업단] 등이 있습니다.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <div className={styles.PinkCircle}>2</div>
            </Col>
            <Col md="10">
              <div className={styles.CompanyBoxFirst}>
                <h2>주)빈티지랩 - 구루핏</h2>
                <span>2019.01~2020.06</span>
                <p>
                  미텔슈탄트에서 다양한 프로그램들을 기획 및 총괄 운영
                  관리하였습니다.기획 및 운영한 프로그램으로는 대구경북 원데이
                  비즈쿨 창업캠프 [대구경북지방중소벤처기업청], 제주 새싹꿈나무
                  창업캠프 [제주대학교 LINC+사업단], 창업동아리를 위한 프로젝트
                  워커톤 [경북대학교 연구산학처], 지방권역 민간 창업교육
                  프로그램 [창업진흥원], KNU 창업역량강화캠프 '창업드림캠프'
                  운영 [경북대학교 산학협력단], 대구창업카페 운영 [대구광역시,
                  대구창조경제혁신센터], 고교창업 인재육성 특성화사업 창업캠프
                  및 창업경진대회 운영 [대전광역시, 대전경제통상진흥원],
                  김원길창업스쿨 '스타트업 투어' 운영 [경북대학교 경상대학],
                  미래 CTO를 꿈꾸는 개발자를 위한 '스타트업 투어' 운영
                  [경북대학교 PRIME사업단] 등이 있습니다.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Career;
