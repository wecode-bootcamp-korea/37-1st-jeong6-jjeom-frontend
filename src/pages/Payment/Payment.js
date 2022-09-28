import React, { useEffect, useState } from 'react';
import Completion from './Completion';
import Confirm from './Confirm';
import Order from './Order';
import './Payment.scss';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({});
  const [step, setStep] = useState('order');
  const [inputValue, setInputValue] = useState({
    name: '',
    phoneNumber: ' ',
    adddress: '',
    date: '',
    delivery: '',
    paymentMethod: '',
    order: [],
  });
  const handleStep = e => {
    setStep(e.target.value);
  };

  const saveInputValue = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const stepUi = {
    order: <Order handleStep={handleStep} saveInputValue={saveInputValue} />,
    confirm: (
      <Confirm handleStep={handleStep} saveInputValue={saveInputValue} />
    ),
    completion: (
      <Completion handleStep={handleStep} saveInputValue={saveInputValue} />
    ),
  };

  // useEffect(() => {
  //   // Todo : cartID 장바구니에서 쿼리스트링 형식으로 받아와야함
  //   // fetch('http://dadsa/order/information/cartId')
  //     .then(res => res.json())
  //     .then(data => setPaymentData(data));
  // });

  return (
    <div className="payment container">
      <p className="payment_title">주문하기</p>
      <article className="payment_status_container">
        {STEP_STATUS.map(status => {
          return (
            <div
              key={status.id}
              className={`payment_status_step ${
                step === status.name && 'active'
              }`}
            >
              <div>
                <i className={status.icon} />
                <span className="payment_status_text">{status.text}</span>
              </div>
              <i
                className={`fa-solid fa-chevron-right status_icon ${
                  step === status.name && 'active'
                } ${
                  status.id === STEP_STATUS[STEP_STATUS.length - 1].id && 'hide'
                }`}
              />
            </div>
          );
        })}
      </article>
      {stepUi[step]}
    </div>
  );
};

export default Payment;

const STEP_STATUS = [
  {
    id: 1,
    name: 'order',
    text: '01. 배송정보 입력',
    icon: 'fa-regular fa-pen-to-square status_icon',
  },
  {
    id: 2,
    name: 'confirm',
    text: '02. 주문 확정',
    icon: 'fa-regular fa-credit-card status_icon',
  },
  {
    id: 3,
    name: 'completion',
    text: ' 03. 주문 완료',
    icon: 'fa-solid fa-check status_icon',
  },
];
