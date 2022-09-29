import React from 'react';
import StepBtn from './StepBtn';
import './Confirm.scss';

const Confirm = ({
  totalPrice,
  inputValue,
  handleStep,
  saveInputValue,
  cartItem,
}) => {
  const validation = inputValue.paymentMethod === '무통장 입금';

  return (
    <div className="confirm container">
      <section className="confirm_way">
        <p className="confirm_title">결제 방법</p>
        <form className="confirm_form">
          <label className="confirm_radio">
            <input
              className="radio_btn"
              type="radio"
              value="무통장 입금"
              name="paymentMethod"
              onChange={saveInputValue}
            />
            무통장 입금
          </label>
        </form>
      </section>

      <section className="confirm_order">
        <p className="confirm_order_title">주문 상품</p>
        <div className="confirm_order_container">
          <ul className="confirm_order_list">
            {cartItem.map(product => {
              return (
                <li className="confirm_order_product" key={product.id}>
                  <div className="product_title">
                    <p className="product_name">{product.name}</p>
                    <p className="product_option">{product.thick}</p>
                  </div>
                  <span className="product_gram">
                    {product.standard_unit}기준
                  </span>
                  <span className="product_quan">{product.quantity}팩</span>
                  <span className="product_price">{product.price}원</span>
                </li>
              );
            })}
          </ul>
          <div className="product_summary">
            <div className="summary_text">
              <p className="summary_title">총 상품 금액</p>
              <p className="summary_price">
                {totalPrice()}
                <span>원</span>
              </p>
            </div>
            <i className="fa-solid fa-circle-plus" />
            <div className="summary_text">
              <p className="summary_title">할인 금액</p>
              <p className="summary_price">
                0<span>원</span>
              </p>
            </div>
            <i className="fa-solid fa-circle-plus" />
            <div className="summary_text">
              <p className="summary_title">배송금액</p>
              <p className="summary_price">
                0<span>원</span>
              </p>
            </div>
            <i className="fa-solid fa-circle-plus" />
            <div className="summary_text">
              <p className="summary_title">세금</p>
              <p className="summary_price">
                0<span>원</span>
              </p>
            </div>
            <i className="fa-solid fa-circle-pause" />
            <div className="summary_text">
              <p className="summary_title">예상 결제 금액</p>
              <p className="summary_price last-price">
                {totalPrice()}
                <span>원</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="confirm_delivery">
        <p className="confirm_title">배송정보</p>
        <div className="confirm_delivery_container">
          {inputValue.arrivalDate} 오후 2시 - 7시 전 도착 예정
        </div>
      </section>
      <StepBtn
        validation={validation}
        handleStep={handleStep}
        prev="order"
        next="completion"
      />
    </div>
  );
};

export default Confirm;
