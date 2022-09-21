import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate('/signup');
  };
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const loginBtn = () => {
    fetch('http://10.58.2.161:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === 'success'
          ? alert('메인페이지로 이동합니다.')
          : alert('첫 방문이신가요? 아이디를 만들어주세요.')
      );
  };

  return (
    <>
      <div className="loginWrap">
        <div className="loginWord">로그인</div>
        <div className="subTextLogin"> 이메일 로그인</div>
        <form className="inputWrap">
          <input
            name="email"
            value={inputValues.email}
            onChange={handleInput}
            className="inputText"
            placeholder="아이디(이메일 주소)를 입력하세요"
          ></input>
          <input
            name="password"
            value={inputValues.password}
            onChange={handleInput}
            className="inputText"
            type="password"
            placeholder="비밀번호를 입력하세요"
          ></input>
          <button onClick={loginBtn} className="loginBtn">
            로그인
          </button>
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
