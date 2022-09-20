import React from 'react';
import './Nav.scss';

const Nav = ({ isActive, showNav }) => {
  return (
    <nav className={isActive ? 'nav active' : 'nav'}>
      <div className="dim" onClick={showNav} />
      <div className="nav_box">
        <section className="menu_top">
          <h3 className="menu_name">메뉴</h3>
          <ul className="icon_menu">
            <li className="cart">
              <i className="fa-solid fa-cart-shopping" />
            </li>
            <li className="close" onClick={showNav}>
              <i className="fa-solid fa-xmark" />
            </li>
          </ul>
        </section>
        <section className="menu_list">
          <h4 className="menu_name">쇼핑하기</h4>
          <ul className="catogry_list">
            <li className="pig">
              <img src="./images/pig.png" alt="돼지" />
              <p className="category_name">돼지</p>
            </li>
            <li className="cow">
              <img src="./images/cow.png" alt="소" />
              <p className="category_name">소</p>
            </li>
            <li className="chicken">
              <img src="./images/chicken.png" alt="닭" />
              <p className="category_name">닭</p>
            </li>
            <li className="fish">
              <img src="./images/fish.png" alt="수산" />
              <p className="category_name">수산</p>
            </li>
            <li className="mealkit">
              <img src="./images/cutlery.png" alt="밀키트" />
              <p className="category_name">밀키트</p>
            </li>
            <li className="milk">
              <img src="./images/milk.png" alt="우유" />
              <p className="category_name">우유</p>
            </li>
            <li className="eggs">
              <img src="./images/eggs.png" alt="계란" />
              <p className="category_name">계란</p>
            </li>
            <li className="baby_food">
              <img src="./images/baby-food.png" alt="이유식" />
              <p className="category_name">이유식</p>
            </li>
          </ul>
        </section>
        <section className="menu_link">
          <p>브랜드스토리</p>
          <p>이용가이드</p>
          <p>공지사항</p>
          <p>고객센터</p>
        </section>
        <section className="menu_member">
          <p className="mypage">
            <i className="fa-regular fa-user" />
            마이페이지
          </p>
          <p className="logout">
            <i className="fa-solid fa-arrow-right-from-bracket" />
            로그아웃
          </p>
          <p className="signup">
            <i className="fa-solid fa-user-plus" />
            회원가입
          </p>
          <p className="login">
            <i className="fa-solid fa-arrow-right-to-bracket" />
            로그인
          </p>
        </section>
      </div>
    </nav>
  );
};

export default Nav;
