import React from 'react';
import { useState } from 'react';
import './SignupData.scss';
import SignupData2 from './SignupData2';
import CheckModal from './CheckModal';
import ModalPortal from '../../Portal';
import CheckInfoModal from './CheckInfoModal';
import { useNavigate } from 'react-router-dom';
const SignupData = ({ setTransPage }) => {
  const [checkBoxAcitve, setCheckBoxActive] = useState(false);
  const [checkBoxAcitve2, setCheckBoxActive2] = useState(false);
  const isCheckBoxClicked = () => {
    setCheckBoxActive(!checkBoxAcitve);
  };
  const isCheckBoxClicked2 = () => {
    setCheckBoxActive2(!checkBoxAcitve2);
  };

  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(false);
  };
  const navigate = useNavigate();

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
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="backBtn"
          >
            이전으로
          </button>
          <button
            onClick={() => {
              {
                checkBoxAcitve === true && checkBoxAcitve2 === true
                  ? setTransPage(true)
                  : setModal(true);
              }
            }}
            className="agreeBtn"
          >
            동의하기
          </button>
          <ModalPortal>
            {modal && <CheckModal modalHandler={modalHandler} />}
          </ModalPortal>
        </div>
      </div>
    </>
  );
};
export default SignupData;
