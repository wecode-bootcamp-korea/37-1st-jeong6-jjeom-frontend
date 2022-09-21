import React from 'react';
import './SuccessModal.scss';

const SuccessModal = ({ closeModal }) => {
  return (
    <>
      <div onClick={closeModal} className="successModalBack"></div>
      <div className="successModal">
        <p className="successHeader">회원가입 성공!</p>
        <p className="successContent">정육쩜에 오신 걸 환영합니다!</p>
        <button onClick={closeModal} className="successBtn">
          확인
        </button>
      </div>
    </>
  );
};

export default SuccessModal;
