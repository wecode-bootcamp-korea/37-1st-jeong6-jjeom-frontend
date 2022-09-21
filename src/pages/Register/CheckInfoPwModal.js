import React from 'react';
import './CheckInfoPwModal.scss';

const CheckInfoPwModal = ({ closeCheckInfoPwModal }) => {
  return (
    <>
      <div onClick={closeCheckInfoPwModal} className="successModalBack"></div>
      <div className="successModal">
        <p className="successHeader">경고</p>
        <p className="successContent">비밀번호를 확인해주세욧!!</p>
        <button onClick={closeCheckInfoPwModal} className="successBtn">
          확인
        </button>
      </div>
    </>
  );
};
export default CheckInfoPwModal;
