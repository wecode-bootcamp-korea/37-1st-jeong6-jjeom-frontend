import React, { useEffect } from 'react';
import './LoginModal.scss';

const LoginModal = ({ title, comment, onClick, ClickToMain }) => {
  // useEffect(() => {
  //   fetch('https://937d-211-106-114-186.jp.ngrok.io/users/signin', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json;charset=utf-8' },
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log(result));
  // });
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
