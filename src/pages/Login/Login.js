import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalPortal from '../../Portal';
import Modal from '../../components/Modal/Modal';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [isFade, setIsFade] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isFailModal, setIsFailModal] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputValues;

  useEffect(() => {
    setTimeout(() => {
      setIsFade(true);
    }, 500);

    return () => {
      setIsFade(false);
    };
  }, []);

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToMain = () => {
    navigate('/main');
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const loginBtn = e => {
    e.preventDefault();

    const isAllFilled = email && password;

    if (!isAllFilled) {
      setIsFailModal(true);

      return;
    }

    fetch('http://172.20.10.3:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'signIn success') {
          localStorage.setItem('name', result.username);
          localStorage.setItem('token', result.accessToken);
          setIsModal(true);
        } else {
          setIsFailModal(true);
        }
      });
  };

  return (
    <div className={`loginWrap${isFade ? ' end' : ''}`}>
      <div className="loginWord">로그인</div>
      <div className="subTextLogin"> 이메일 로그인</div>
      <form className="inputWrap">
        <input
          name="email"
          value={email}
          onChange={handleInput}
          className="inputText"
          placeholder="아이디(이메일 주소)를 입력하세요"
        />
        <input
          name="password"
          value={password}
          onChange={handleInput}
          className="inputText"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
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
        {isModal && (
          <Modal
            title="로그인 성공!"
            comment={`환영합니다. ${localStorage.getItem('name')}님`}
            closeModal={() => setIsModal(false)}
            confirm={goToMain}
          />
        )}
      </ModalPortal>
      <ModalPortal>
        {isFailModal && (
          <Modal
            title="알림"
            comment="아이디 또는 비밀번호를 확인해주세요."
            closeModal={() => setIsFailModal(false)}
            confirm={() => setIsFailModal(false)}
          />
        )}
      </ModalPortal>
    </div>
  );
};

export default Login;
