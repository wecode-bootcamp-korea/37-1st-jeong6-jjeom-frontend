import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };
  const goToRegister = () => {
    navigate('/register');
  };
  return (
    <div className="signUpWrap">
      <div className="signUpWord">회원가입</div>
      <div className="subTextSignUp">이메일로 가입하기</div>
      <button onClick={goToRegister} className="signUpBtn">
        정육각 회원가입 하기
      </button>
      <div className="gotoLogin">
        <span>정육각 회원이신가요?</span>
        <span onClick={goToLogin} className="goToLoginBtn">
          로그인하기
        </span>
      </div>
    </div>
  );
};

export default SignUp;
