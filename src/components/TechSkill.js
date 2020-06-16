import React, { Component } from "react";
import styles from "./About.module.css";
import { Container, Row, Col } from "reactstrap";

class TechSkill extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="6">
            <div className={styles.TechSkillLeft}>
              <h2>저는 지금 이것을 할 수 있습니다.</h2>
              <div>
                처음 개발의 시작은 작은 쇼핑몰 알바를 하면서 디자인 관련 툴과
                HTML, CSS를 다루는 것에서 출발했습니다. 이후에 비트교육센터에서
                자바관련교육을 받게 되었고, 개인적으로 UI를 그리는 것에 흥미를
                두면서 HTML, CSS와 JAVASCRIPT를 배우기 시작했습니다. 과거에
                사이트를 만들면서 자바스크립트나 제이쿼리를 이용해서 제작을
                했고, 지금 현재 React라는 라이브러리로 사이트 구축하는 일을
                진행했습니다. 앞으로도 기술에 지속적으로 관심을 가지고,
                node.js를 배워보거나 자바스크립트 관련 알고리즘에 관심을 두고
                공부를 해 나갈 예정입니다. 과거에 카페24나 고도몰을 운영해 본
                경험 또한 가지고 있고, 또한 개발 영역은 아니지만 디자인을 해본
                경험 또한 가지고 있습니다. 그와 더불어 Github를 통해 소스 코드
                및 프로젝트 관리 협업을 경험해봤습니다. 프로젝트 관리툴로는
                slack, trello, redmine, github, notion, google drive
                경험했습니다.
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className={styles.TechSkillRight}>
              <ul>
                <li>PhotoShop & illustrator</li>
                <li>HTML & CSS</li>
                <li>JavaScript & jQuery</li>
                <li>React</li>
                <li>Git</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <dl>
              <dt>HTML,CSS</dt>
              <dd>
                HTML, CSS를 이용한 웹표준 코딩 가능합니다. HTML5, CSS3에 대한
                기초 지식을 가지고 있고, 직접적으로 응용해서 동적으로 그려내는
                부분은 약하나 구글에서 애니메이션 기능을 찾아서 구현하고
                있습니다. 이미지 블렌딩이나 그라데이션 효과 주는 기능 또한
                약하지만 검색해서 기능을 찾아 구현하는데는 문제가 없습니다.
              </dd>
            </dl>
            <dl>
              <dt>JAVASCRIPT, JQUERY</dt>
              <dd>
                자바스크립트와 제이쿼리에 대한 기초문법을 익혔으며 유지보수하는
                등 코드수정을 담당했습니다.
              </dd>
            </dl>
            <dl>
              <dt>반응형웹, 부트스트랩</dt>
              <dd>
                반응형웹 퍼블리싱 과정 교육을 이수했으며 부트스트랩을 이용해서
                사이트 제작 경험이 있습니다.
              </dd>
            </dl>
            <dl>
              <dt>SASS</dt>
              <dd>
                SASS에 대한 기초적인 내용을 알고, 실제 프로젝트에서 사용해 본
                경험이 있습니다. SASS의 경우는 변수활용, nesting기능 활용,
                include기능 활용, partial 기능 활용 가능합니다.
              </dd>
            </dl>
            <dl>
              <dt>버전관리프로그램</dt>
              <dd>
                git, github를 활용하고 사용했습니다. git은 간단한 터미널 사용
                가능합니다.
              </dd>
            </dl>
            <dl>
              <dt>리액트</dt>
              <dd>
                회사에서 React관련 프로젝트를 진행했습니다. 간단한 기능 구현은
                가능하지만 복잡한 로직에는 다소 약합니다.
              </dd>
            </dl>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TechSkill;
