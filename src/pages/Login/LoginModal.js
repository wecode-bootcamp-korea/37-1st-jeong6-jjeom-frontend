import React from 'react';
import './LoginModal.scss';

const LoginModal = ({ title, comment, onClick, ClickToMain }) => {
  return (
    <>
      <div onClick={onClick} className="successModalBack"></div>
      <div className="successModal">
        <p className="successHeader">{title}</p>
        <p className="successContent">{comment}</p>
        <button onClick={ClickToMain} className="successBtn">
          확인
        </button>
      </div>
    </>
  );
};
export default LoginModal;
