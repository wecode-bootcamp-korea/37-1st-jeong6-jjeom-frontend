import React, { useState } from 'react';

import './Register.scss';
import ModalPortal from '../../Portal';
import RegisterInfo from './RegisterInfo';
import SuccessModal from './SuccessModal';

const Register = () => {
  const [suceessModal, setSuccessModal] = useState(true);

  const closeModal = () => {
    setSuccessModal(false);
  };

  const [checkBoxAcitve, setCheckBoxActive] = useState(false);
  const isCheckBoxClicked = () => {
    setCheckBoxActive(!checkBoxAcitve);
  };
  const [checkBoxAcitve2, setCheckBoxActive2] = useState(false);
  const isCheckBoxClicked2 = () => {
    setCheckBoxActive2(!checkBoxAcitve2);
  };
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const joinBtn = () => {
    if (
      checkBoxAcitve &&
      checkBoxAcitve2 &&
      inputValues.password === inputValues.pwCheck
    ) {
      fetch('http://10.58.2.161:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          email: inputValues.email,
          password: inputValues.password,
          name: inputValues.name,
          phoneNumber: inputValues.phoneNumber,
        }),
      })
        .then(Response => Response.json())
        .then(result =>
          result.message === 'success'
            ? alert('이미 있는 계정이거나, 회원가입 양식이 틀렸습니다.')
            : setSuccessModal(true)
        );
    } else {
      alert('이용약관과 개인정보 이용 방침에 모두 동의해주세요.');
    }
  };

  return (
    <>
      <div className="registerWrap">
        <div className="registerHeader">회원가입</div>
        <div className="registerIcon">
          <i className="fa-solid fa-file-circle-check" />
          <span>01.약관동의</span>
          <i className="fa-solid fa-chevron-right" />
          <i className="fa-regular fa-pen-to-square" />
          <span>02.정보입력</span>
        </div>
        <div className="serviceAgree">
          <label>
            <input
              onClick={isCheckBoxClicked}
              className="checkbox"
              type="checkbox"
            />
            정육각 서비스 약관 동의
          </label>
          <div className="registerAgreeContent">
            <iframe
              className="AgreeContent"
              src="https://yookgak.com/website/term-20191015.html"
            />
          </div>
        </div>
        <div className="serviceAgree">
          <label>
            <input
              onClick={isCheckBoxClicked2}
              className="checkbox"
              type="checkbox"
            />
            개인정보 이용 방침
          </label>

          <div className="registerAgreeContent">
            <iframe
              className="AgreeContent"
              src="https://yookgak.com/assets/private-20220502.html"
            />
          </div>
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
                  placeholder="하이픈(-) 은 빼고 입력해주세요. ex) 010-1234-5678"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="btnWrap">
          <button className="backBtn">이전으로</button>
          <button
            onClick={joinBtn}
            // onClick={() => {
            //   if (checkBoxAcitve === true && checkBoxAcitve2 === true) {
            //     return joinBtn;
            //   } else {
            //     alert('확인죰');
            //   }
            // }}
            className="agreeBtn"
          >
            동의하기
          </button>
        </div>
      </div>
      <ModalPortal>
        {suceessModal && <SuccessModal closeModal={closeModal} />}
      </ModalPortal>
    </>
  );
};
export default Register;
