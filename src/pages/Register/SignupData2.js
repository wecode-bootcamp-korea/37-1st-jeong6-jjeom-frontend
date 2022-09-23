import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalPortal from '../../Portal';
import CheckInfoModal from './CheckInfoModal';
import './SignupData2.scss';

const SignupData2 = ({ setTransPage }) => {
  const navigate = useNavigate();
  const [suceessModal, setSuccessModal] = useState(false);

  const moveLogin = () => {
    setSuccessModal(false);
    navigate('/login');
  };

  const [checkInfoModal, setCheckInfoModal] = useState(false);
  const closeCheckInfoModal = () => {
    setCheckInfoModal(false);
  };
  const [checkInfoPwModal, setCheckInfoPwModal] = useState(false);
  const closeCheckInfoPwModal = () => {
    setCheckInfoPwModal(false);
  };
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    name: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const joinBtn = () => {
    if (inputValues.password === inputValues.pwCheck) {
      fetch('https://937d-211-106-114-186.jp.ngrok.io/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          email: inputValues.email,
          password: inputValues.password,
          phoneNumber: inputValues.phoneNumber,
          name: inputValues.name,
        }),
      })
        .then(response => response.json())
        .then(result =>
          result.message === 'success'
            ? setSuccessModal(true)
            : setCheckInfoModal(true)
        );
    } else {
      setCheckInfoPwModal(true);
    }
  };
  return (
    <div>
      <div className="registerWrap">
        <div className="registerHeader">회원가입</div>
        <div className="registerIcon">
          <i className="fa-solid fa-file-circle-check colored1" />
          <span>01.약관동의</span>
          <i className="fa-solid fa-chevron-right" />
          <i className="fa-regular fa-pen-to-square colored2" />
          <span className="inputInfo">02.정보입력</span>
        </div>
        <div className="infoWrap">
          <div className="subTextInfo">가입정보 입력</div>
          <div className="userInfoWrap">
            <div className="userBox">
              <div className="userInfo">아이디(이메일주소)</div>
              <div className="userInputBox">
                <input
                  name="email"
                  value={inputValues.email}
                  onChange={handleInput}
                  className="inputText"
                  placeholder="이메일형식으로 맞춰주세용"
                />
              </div>
            </div>
            <div className="userBox">
              <div className="userInfo">비밀번호</div>
              <div className="userInputBox">
                <input
                  name="password"
                  type="password"
                  value={inputValues.password}
                  onChange={handleInput}
                  className="inputText"
                  placeholder="비밀번호는 8자리 이상 넣어주세요"
                />
              </div>
            </div>
            <div className="userBox">
              <div className="userInfo">비밀번호 확인</div>
              <div className="userInputBox">
                <input
                  name="pwCheck"
                  type="password"
                  value={inputValues.pwCheck}
                  onChange={handleInput}
                  className="inputText"
                  placeholder=""
                />
              </div>
            </div>
            <div className="userBox">
              <div className="userInfo">이름</div>
              <div className="userInputBox">
                <input
                  name="name"
                  value={inputValues.name}
                  onChange={handleInput}
                  className="inputText"
                  placeholder=""
                />
              </div>
            </div>
            <div className="userBox">
              <div className="userInfo">휴대폰번호</div>
              <div className="userInputBox">
                <input
                  name="phoneNumber"
                  value={inputValues.phoneNumber}
                  onChange={handleInput}
                  className="inputText"
                  placeholder="ex) 010-1234-5678"
                />
              </div>
            </div>
            <div className="btnWrap">
              <button
                onClick={() => {
                  {
                    setTransPage(false);
                  }
                }}
                className="backBtn"
              >
                이전으로
              </button>
              <button onClick={joinBtn} className="agreeBtn">
                가입하기
              </button>
            </div>
            <ModalPortal>
              {suceessModal && (
                <CheckInfoModal
                  title="회원가입 성공!"
                  comment="정육쩜에 방문해 주신 여러분 환영합니다"
                  onClick={moveLogin}
                />
              )}
            </ModalPortal>

            <ModalPortal>
              {checkInfoModal && (
                <CheckInfoModal
                  title="알람"
                  comment="이미 가입한 회원이거나 양식에 맞지 않습니다."
                  onClick={closeCheckInfoModal}
                />
              )}
            </ModalPortal>

            <ModalPortal>
              {checkInfoPwModal && (
                <CheckInfoModal
                  title="알람"
                  comment="비밀번호가 다릅니다. 다시 한번 확인해주세요"
                  onClick={closeCheckInfoPwModal}
                />
              )}
            </ModalPortal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupData2;
