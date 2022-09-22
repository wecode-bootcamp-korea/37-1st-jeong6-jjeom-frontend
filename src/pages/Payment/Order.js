import React from 'react';
import './Order.scss';

const Order = () => {
  return (
    <div className="order">
      <section className="order_address">
        <div className="order_address_container">
          <p className="order_title">보내시는 분</p>

          <div className="order_form">
            <div className="order_wrap">
              <div className="order_head">이름</div>
              <div className="order_content">신주안</div>
            </div>
            <div className="order_wrap">
              <div className="order_head">전화번호</div>
              <div className="order_content">01029935911</div>
            </div>
            <div className="order_wrap">
              <div className="order_head">이메일</div>
              <div className="order_content">shinjuan0101@gmail.com</div>
            </div>
          </div>
        </div>
      </section>

      <section className="order_address">
        <div className="order_address_container">
          <p className="order_title">받으시는 분</p>

          <div className="order_form">
            <div className="order_wrap">
              <div className="order_head">
                <p>*이름</p>
              </div>
              <div className="order_input">
                <input placeholder="홍길동" />
              </div>
            </div>

            <div className="order_wrap">
              <div className="order_head">
                <p>*전화번호</p>
              </div>
              <div className="order_input">
                <input placeholder="'-'를 제외한 전화번호를 입력해주세요" />
              </div>
            </div>

            <div className="order_wrap">
              <div className="order_head">
                <p>*주소</p>
              </div>
              <div className="order_input">
                <input placeholder="주소를 입력해주세요" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="order_delivery">
        <div className="order_delivery_container">
          <p className="order_delivery_title">도착 희망일</p>
          <div className="order_delivery_date">
            <input type="text" placeholder="2022-09-23(금)" />
          </div>
        </div>
        <div className="order_delivery_container">
          <p className="order_delivery_title">배송 방법</p>
          <div className="order_delivery_radio">
            <label>
              <input type="radio" name="radio_btn" />
              새벽배송 (오전 7시 전 도착)
            </label>
            <label>
              <input type="radio" name="radio_btn" />
              당일배송 (오후 2시 - 7시 도착)
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
