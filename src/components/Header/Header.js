import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const token = localStorage.getItem('token');

  const showNav = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo" onClick={() => navigate('/main')}>
            <img src="./images/logo_w.png" alt="정육쩜 로고" />
          </h1>
          <div className="menu_wrap">
            <ul className="service_menu">
              <li onClick={() => navigate('/list')}>쇼핑하기</li>
              <li>배송안내</li>
              <li>이벤트</li>
            </ul>
            <div className="etc_menu">
              <ul className="contact_menu">
                <li>공지사항</li>
                <li>고객센터</li>
              </ul>
              <ul className="register_menu">
                <li
                  className={token ? 'hide' : ''}
                  onClick={() => navigate('/login')}
                >
                  로그인
                </li>
                <li
                  className={token ? 'hide' : ''}
                  onClick={() => navigate('/signup')}
                >
                  회원가입
                </li>
                <li className={token ? '' : 'hide'}>로그아웃</li>
                <li className={token ? '' : 'hide'}>마이페이지</li>
              </ul>
              <p
                className="cart"
                onClick={() => {
                  navigate('/cart');
                }}
              >
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
