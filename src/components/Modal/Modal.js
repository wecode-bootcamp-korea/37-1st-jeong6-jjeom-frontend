import React from 'react';
import './Modal.scss';

const Modal = ({ title, comment, closeModal, confirm }) => {
  return (
    <>
      <div onClick={closeModal} className="successModalBack" />
      <div className="successModal">
        <p className="successHeader">{title}</p>
        <p className="successContent">{comment}</p>
        <button onClick={confirm} className="successBtn">
          확인
        </button>
      </div>
    </>
  );
};
export default Modal;
