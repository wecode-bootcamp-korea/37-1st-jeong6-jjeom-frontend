import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <>
      <div className="loginWrap start end">
        <div className="loginWord">로그인</div>
        <div className="subTextLogin"> 이메일 로그인</div>
        <form className="inputWrap">
          <input
            className="inputText"
            placeholder="아이디(이메일 주소)를 입력하세요"
          ></input>
          <input
            className="inputText"
            type="password"
            placeholder="비밀번호를 입력하세요"
          ></input>
          <button className="loginBtn">로그인</button>
        </form>
        <p className="forgetInput"> 아이디 / 비밀번호 찾기 </p>
        <div className="goToSignUp">
          <span>정육각 회원이신가요?</span>
          <span onClick={goToSignUp} className="goToSignUpBtn">
            회원가입하기
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
