import React from 'react';
import './SuccessModal.scss';
const CheckModal = ({ modalHandler }) => {
  return (
    <>
      <div onClick={modalHandler} className="successModalBack"></div>
      <div className="successModal">
        <p className="successHeader">약관 동의</p>
        <p className="successContent">
          이용약관과 개인정보 이용 방침에 모두 동의해주세요.
        </p>
        <button onClick={modalHandler} className="successBtn">
          확인
        </button>
      </div>
    </>
  );
};

export default CheckModal;
