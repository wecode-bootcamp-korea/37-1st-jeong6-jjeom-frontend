import React from 'react';
import { useState } from 'react';
import './SignupData.scss';
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
    <div className="registerWrap">
      <div className="registerHeader">회원가입</div>
      <div className="registerIcon">
        <i className="fa-solid fa-file-circle-check icon1" />
        <span className="agreeTerms">01.약관동의</span>
        <i className="fa-solid fa-chevron-right " />
        <i className="fa-regular fa-pen-to-square icon2" />
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
            id="registerContent"
            title="registerDocument"
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
            id="AgreeContent"
            title="AgreeDocument"
            className="AgreeContent"
            src="https://yookgak.com/assets/private-20220502.html"
          />
        </div>
      </div>
      <div className="btnWrap">
        <button
          onClick={() => {
            navigate(-1);
            window.scrollTo(0, 0);
          }}
          className="backBtn"
        >
          이전으로
        </button>

        <button
          onClick={() => {
            checkBoxAcitve && checkBoxAcitve2
              ? setTransPage(true)
              : setModal(true);
            window.scrollTo(0, 0);
          }}
          className="agreeBtn"
        >
          동의하기
        </button>
        <ModalPortal>
          {modal && (
            <CheckInfoModal
              title="약관동의"
              comment="약관에 동의하지 않으셨습니다"
              onClick={modalHandler}
            />
          )}
        </ModalPortal>
      </div>
    </div>
  );
};
export default SignupData;
