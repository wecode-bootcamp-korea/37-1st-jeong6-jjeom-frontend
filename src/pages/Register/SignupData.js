import React from 'react';
import { useState } from 'react';
import './SignupData.scss';
import SignupData2 from './SignupData2';
const SignupData = ({ setTransPage }) => {
  const [checkBoxAcitve, setCheckBoxActive] = useState(false);
  const [checkBoxAcitve2, setCheckBoxActive2] = useState(false);
  const isCheckBoxClicked = () => {
    setCheckBoxActive(!checkBoxAcitve);
  };
  const isCheckBoxClicked2 = () => {
    setCheckBoxActive2(!checkBoxAcitve2);
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
        <div className="btnWrap">
          <button className="backBtn">이전으로</button>
          <button
            onClick={() => {
              if (checkBoxAcitve === true && checkBoxAcitve2 === true) {
                return setTransPage(true);
              } else {
                alert('확인죰');
              }
            }}
            className="agreeBtn"
          >
            동의하기
          </button>
        </div>
      </div>
    </>
  );
};
export default SignupData;
