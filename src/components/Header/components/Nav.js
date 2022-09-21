import React from 'react';
import './Nav.scss';
import NAV_LIST from '../navData';
const Nav = ({ isActive, showNav }) => {
  return (
    <>
      <div className={`dim ${isActive ? ' active' : ''}`} onClick={showNav} />
      <div className={`nav_box ${isActive ? ' active' : ''}`}>
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
            {NAV_LIST.map(({ id, image, catogory }) => (
              <li key={id}>
                <img src={image} alt={catogory} />
                <p className="category_name">{catogory}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="menu_link">
          <p className="menu_name">브랜드스토리</p>
          <p className="menu_name">이용가이드</p>
          <p className="menu_name">공지사항</p>
          <p className="menu_name">고객센터</p>
        </section>
        <section className="menu_member">
          <p className="menu_name hide">
            <i className="fa-regular fa-user" />
            마이페이지
          </p>
          <p className="menu_name hide">
            <i className="fa-solid fa-arrow-right-from-bracket" />
            로그아웃
          </p>
          <p className="menu_name">
            <i className="fa-solid fa-user-plus" />
            회원가입
          </p>
          <p className="menu_name">
            <i className="fa-solid fa-arrow-right-to-bracket" />
            로그인
          </p>
        </section>
      </div>
    </>
  );
};

export default Nav;
