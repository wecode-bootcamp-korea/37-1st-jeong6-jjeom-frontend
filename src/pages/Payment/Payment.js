import React, { useState } from 'react';
import Completion from './Completion';
import Confirm from './Confirm';
import Order from './Order';
import './Payment.scss';
import StepBtn from './StepBtn';

const Payment = () => {
  const [step, setStep] = useState('order');

  const handleStep = e => {
    setStep(e.target.value);
  };

  const stepUi = {
    order: <Order />,
    confirm: <Confirm />,
    completion: <Completion />,
  };

  return (
    <div className="payment container">
      <p className="payment_title">주문하기</p>
      <article className="payment_status_container">
        <div className="payment_status_step">
          <i className="fa-regular fa-pen-to-square status_icon" />
          <span className="payment_status_text">01. 배송 정보 입력</span>
        </div>
        <i className="fa-solid fa-chevron-right status_icon" />

        <div className="payment_status_step">
          <i className="fa-regular fa-credit-card status_icon" />
          <span className="payment_status_text">02. 주문 확정</span>
        </div>
        <i className="fa-solid fa-chevron-right status_icon" />

        <div className="payment_status_step">
          <i className="fa-solid fa-check status_icon" />
          <span className="payment_status_text">03. 주문 완료</span>
        </div>
      </article>
      {stepUi[step]}
      <StepBtn handleStep={handleStep} />
    </div>
  );
};

export default Payment;
