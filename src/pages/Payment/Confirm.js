import React from 'react';
import './Confirm.scss';
import StepBtn from './StepBtn';

const Confirm = ({ handleStep, saveInputValue }) => {
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
          <label className="confirm_radio">
            <input
              className="radio_btn"
              type="radio"
              value="카카오 입금"
              name="paymentMethod"
              onChange={saveInputValue}
            />
            카카오 입금
          </label>
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
            <li className="confirm_order_product">
              <div className="product_title">
                <p className="product_name">
                  초신선 무항생제 돼지 삼겹살 구이용
                </p>
                <p className="product_option">보통(16mm)</p>
              </div>
              <span className="product_gram">300g 기준</span>
              <span className="product_quan">1팩</span>
              <span className="product_price">21,300원</span>
            </li>
          </ul>
          <div className="product_summary">
            <div className="summary_text">
              <p className="summary_title">총 상품 금액</p>
              <p className="summary_price">
                44,700<span>원</span>
              </p>
            </div>
            <i className="fa-solid fa-circle-plus" />
            <div className="summary_text">
              <p className="summary_title">총 상품 금액</p>
              <p className="summary_price">
                44,700<span>원</span>
              </p>
            </div>
            <i className="fa-solid fa-circle-plus" />
            <div className="summary_text">
              <p className="summary_title">총 상품 금액</p>
              <p className="summary_price">
                44,700<span>원</span>
              </p>
            </div>
            <i className="fa-solid fa-circle-plus" />
            <div className="summary_text">
              <p className="summary_title">총 상품 금액</p>
              <p className="summary_price">
                44,700<span>원</span>
              </p>
            </div>
            <i className="fa-solid fa-circle-pause" />
            <div className="summary_text">
              <p className="summary_title">예상 결제 금액</p>
              <p className="summary_price last-price">
                44,700<span>원</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="confirm_delivery">
        <p className="confirm_title">배송정보</p>
        <div className="confirm_delivery_container">
          2022-09-22 (목) 오후 2시 - 7시 전 도착 예정
        </div>
      </section>
      <StepBtn handleStep={handleStep} preStep="order" nextStep="completion" />
    </div>
  );
};

export default Confirm;
