import React, { Component } from "react";
import styles from "./Career.module.css";
import { Row, Col } from "reactstrap";

class Career extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={styles.careerTitle}>WORK CAREER</h2>
        <Row>
          <Col md="1">
            <div className={styles.blueCircle}>1</div>
          </Col>
          <Col md="11">
            <div className={styles.companyBox}>
              <h2>주)아이펀 팩토리</h2>
              <div className={styles.careerDate}>2019.01~2020.06</div>
              <p>
                아이펀팩토리는{" "}
                <span className={styles.careerBold}>코인원 거래소 자회사</span>
                로
                <br />
                거래소,게임 엔진 개발 및 거래소 디플로이 관련
                <br />
                프로젝트를 주로 진행했습니다.
                <br />
                제가 맡은 업무는{" "}
                <span className={styles.careerBold}>거래소 디플로이팀</span>에서
                진행되는 업무였는데
                <br />
                거래소 UI 및 간단한 프론트엔드 기능들을 만들고
                <br />
                API를 연동하는 일이었습니다.
                <br />
                주니어로써 시니어 개발자를 도와서
                <br />
                맡은 임무들을 열심히 수행해 나갔습니다.
                <br />
                총 4가지 프로젝트를 진행했는데
                <br />첫 번째는{" "}
                <span className={styles.careerBold}>
                  코인원 코어 거래소 데모 사이트
                </span>
                이고
                <br />두 번째는{" "}
                <span className={styles.careerBold}>Xgreen</span>,
                <br />세 번째는{" "}
                <span className={styles.careerBold}>거래소 마진 영역 개발</span>
                <br />
                마지막으로 네 번째는 아이펀팩토리 자체 사이트에서
                <br />
                추가되는 기능인{" "}
                <span className={styles.careerBold}>멤버십 영역</span>을
                담당했습니다.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col md="1">
            <div className={styles.pinkCircle}>2</div>
          </Col>
          <Col md="11">
            <div className={styles.companyBox}>
              <h2>주)빈티지랩 - 구루핏</h2>
              <div className={styles.careerDate}>2017.03~2018.08</div>
              <p>
                빈티지랩에서는{" "}
                <span className={styles.careerBold}>스타트업</span>을 경험할 수
                있는 귀중한 시간이었습니다.
                <br />
                빈티지랩에서 하는 일은 일반 대기업이나 중견기업 등 큰 조직의
                <br />
                생각으로는 하기 힘들거나 실패했던 프로젝트를 가져와서 <br />
                처음부터 기획을 하고, 개발을 해서 완성이 되면 몇 년을 운영하고,
                지켜보다가
                <br />
                고객사에다가 다시 되돌려주는 형태의 사업을 진행했습니다.
                <br />
                제가 맡게 된 프로젝트는 고객에게 딱 맞는 신발 상품을
                <br />
                찾을 수 있도록 도와주는{" "}
                <span className={styles.careerBold}>쇼핑몰을 제작</span>하는
                것이었습니다.
                <br />
                사이트는 처음 <span className={styles.careerBold}>React</span>로
                제작이 되어졌다가
                <br />그 후에 변동이 생겨서{" "}
                <span className={styles.careerBold}>JQuery</span>를 이용했고,
                <br />그 이후 또 한번 변동이 생겨서{" "}
                <span className={styles.careerBold}>고도몰 서비스</span>를
                구입해서
                <br />
                디자인을 적용하고, 소스를 고치는 작업들을 진행했습니다.
              </p>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Career;
