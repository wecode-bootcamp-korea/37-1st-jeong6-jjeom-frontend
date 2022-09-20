import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="container">
          <ul className="footer_menu">
            <li>인재채용</li>
            <li>이용약관</li>
            <li className="personal_info">개인정보처리방침</li>
          </ul>
          <button className="app_btn">정육쩜 앱 설치</button>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="corp_info">
            <h1 className="ft_logo">
              <img src="./images/logo_b.png" alt="푸터로고" />
            </h1>
            <dl>
              <dt>(주)정육쩜</dt>
              <dd />
              <dt>대표이사:</dt>
              <dd>안수진</dd>
              <dt>주소:</dt>
              <dd>서울 강남구 테헤란로 427 위워크 선릉2호점</dd>
              <dt>사업자등록번호:</dt>
              <dd>123-45-6789</dd>
              <dt>통신판매업신고번호:</dt>
              <dd>111-정육쩜-111</dd>
              <dt>개인정보관리책임자:</dt>
              <dd>안수진(asj9674@gmail.com)</dd>
            </dl>
            <p className="copy">© 2022 Jeong6JJeom Inc. All rights reserved.</p>
          </div>
          <div className="service_info">
            <p className="cs">고객센터</p>
            <p className="cs_number">1234-5678</p>
            <div className="cs_time">
              <p>평일:10:00 ~ 19:00</p>
              <p>점심:13:00 ~ 14:00</p>
              <p>(토,일 및 공휴일 휴무)</p>
            </div>
            <div className="cs_contact">
              <p>
                카카오톡: <span>@없어용</span>
              </p>
              <p>
                이메일: <span>noemail@yookgak.com</span>
              </p>
            </div>
            <div className="cs_question">
              <button>자주묻는질문</button>
              <button>1:1문의</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
