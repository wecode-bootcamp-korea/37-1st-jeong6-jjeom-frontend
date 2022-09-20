import { React, useState } from 'react';
import Nav from './components/Nav';
import './Header.scss';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const showNav = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <img src="./images/logo_w.png" alt="정육쩜 로고" />
          </h1>
          <div className="menu_wrap">
            <ul className="service_menu">
              <li className="on">쇼핑하기</li>
              <li>배송안내</li>
              <li>이벤트</li>
            </ul>
            <div className="etc_menu">
              <ul className="contact_menu">
                <li>공지사항</li>
                <li>고객센터</li>
              </ul>
              <ul className="register_menu">
                {/* <li>로그인</li>
                <li>회원가입</li> */}
                <li>로그아웃</li>
                <li>마이페이지</li>
              </ul>
              <p className="cart">
                <i className="fa-solid fa-cart-shopping" />
              </p>
              <button className="all_menu_btn" onClick={showNav}>
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Nav isActive={isActive} showNav={showNav} />
    </>
  );
};

export default Header;
