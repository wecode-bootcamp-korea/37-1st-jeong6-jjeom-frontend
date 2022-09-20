import React from 'react';
import './Header.scss';

const Header = () => {
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
                <li>로그인</li>
                <li>회원가입</li>
              </ul>
              <p className="cart">
                <i className="fa-solid fa-cart-shopping" />
              </p>
              <button className="all_menu_btn">
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav className="nav">
        <div className="dim" />
        <section className="menu_top">
          <h3 className="menu_name">메뉴</h3>
          <ul className="icon_menu">
            <li className="cart">
              <i className="fa-solid fa-cart-shopping" />
            </li>
            <li className="close">
              <i class="fa-solid fa-xmark" />
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
            <i class="fa-regular fa-user" />
            마이페이지
          </p>
          <p className="logout">
            <i className="fa-solid fa-arrow-right-from-bracket" />
            로그아웃
          </p>
        </section>
      </nav>
    </>
  );
};

export default Header;
