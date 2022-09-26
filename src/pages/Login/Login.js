import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalPortal from '../../Portal';
import LoginModal from './LoginModal';
import './Login.scss';

const Login = () => {
  const [fade, setFade] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 500);

    return () => {
      setFade('');
    };
  }, []);
  const [modal, setModal] = useState(false);
  const [failModal, setFailModal] = useState(false);
  const modalHandler = () => {
    setModal(false);
  };
  const failModalHandler = () => {
    setFailModal(false);
  };
  const navigate = useNavigate();
  const goToSignUp = () => {
    navigate('/signup');
  };
  const ClickToMain = () => {
    navigate('/main');
  };
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  console.log(inputValues);
  const loginBtn = e => {
    e.preventDefault();
    console.log(inputValues);
    fetch('https://937d-211-106-114-186.jp.ngrok.io/users/signin', {
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
          ? (localStorage.setItem('name', result.username),
            localStorage.setItem('또큰', result.accessToken),
            setModal(true))
          : setFailModal(true)
      );
  };

  return (
    <>
      <div className={`loginWrap start ${fade}`}>
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
        <ModalPortal>
          {modal && (
            <LoginModal
              title="로그인 성공!"
              comment={`환영합니다. ${localStorage.getItem('name')}님`}
              onClick={modalHandler}
              ClickToMain={ClickToMain}
            />
          )}
        </ModalPortal>
        <ModalPortal>
          {failModal && (
            <LoginModal
              title="알림"
              comment="아이디 또는 비밀번호를 확인해주세요."
              onClick={failModalHandler}
            />
          )}
        </ModalPortal>
      </div>
    </>
  );
};

export default Login;
