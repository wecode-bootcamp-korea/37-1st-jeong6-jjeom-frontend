import React, { useState, useEffect } from 'react';
import { API } from '../../config';
import { useLocation } from 'react-router-dom';
import Completion from './Completion';
import Confirm from './Confirm';
import Order from './Order';
import './Payment.scss';

const Payment = () => {
  const [step, setStep] = useState('order');
  const location = useLocation();
  const { cartId } = location.state;
  const [cartItem, setCartItem] = useState([
    { userName: '', phone_number: '', email: '' },
  ]);
  const [inputValue, setInputValue] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    arrivalDate: '',
    deliveryMethod: '',
    paymentMethod: '',
  });

  const totalPrice = () => {
    let result = 0;
    for (let i = 0; i < cartItem.length; i++) {
      result += cartItem[i].price;
    }
    return result;
  };

  const checkedQueryString = () => {
    let checkedProducts = '';
    for (let i = 0; i < cartId.length; i++) {
      checkedProducts += `cartId=${cartId[i]}&`;
    }
    return checkedProducts.slice(0, -1);
  };

  const saveInputValue = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // Todo : cartId=1& 장바구니에서 쿼리스트링 형식으로 받아와야함
  useEffect(() => {
    fetch(`${API.ORDER}/information?${checkedQueryString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setCartItem(data.orderInfo));
  }, []);

  const getQuan = cartItem.map(item => {
    return item.quantity;
  });
  // console.log(getQuan.toString());

  const getProductId = cartItem.map(item => {
    return item.id;
  });

  const handleStep = step => {
    if (step === 'completion') {
      fetch(`${API.ORDER}/makeOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          optionProductsId: getProductId,
          name: inputValue.name,
          phoneNumber: inputValue.phoneNumber,
          address: inputValue.address,
          arrivalDate: inputValue.arrivalDate,
          deliveryMethod: inputValue.deliveryMethod,
          quantity: getQuan,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    }
    setStep(step);
    window.scroll(0, 0);
  };

  const stepUi = {
    order: (
      <Order
        handleStep={handleStep}
        saveInputValue={saveInputValue}
        inputValue={inputValue}
        cartItem={cartItem}
      />
    ),
    confirm: (
      <Confirm
        handleStep={handleStep}
        saveInputValue={saveInputValue}
        inputValue={inputValue}
        cartItem={cartItem}
        totalPrice={totalPrice}
      />
    ),
    completion: (
      <Completion
        handleStep={handleStep}
        saveInputValue={saveInputValue}
        totalPrice={totalPrice}
      />
    ),
  };
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
