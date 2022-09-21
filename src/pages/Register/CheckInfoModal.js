import React from 'react';
import './CheckInfoModal.scss';

const CheckInfoModal = ({ closeCheckInfoModal }) => {
  return (
    <>
      <div onClick={closeCheckInfoModal} className="successModalBack"></div>
      <div className="successModal">
        <p className="successHeader">약관 동의</p>
        <p className="successContent">
          이용약관과 개인정보 이용 방침에 모두 동의해주세요.
        </p>
        <button className="successBtn">확인</button>
      </div>
    </>
  );
};

export default CheckInfoModal;
