import React from 'react';
import StepBtn from './StepBtn';
import './Order.scss';

const Order = ({ inputValue, handleStep, saveInputValue, cartItem }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDate = new Date().getDate();
  const currentDay =
    currentYear +
    '-' +
    (currentMonth.toString().length === 1 ? '0' : '') +
    currentMonth +
    '-' +
    currentDate;

  const validation =
    inputValue.name.length !== 0 &&
    inputValue.phoneNumber.length !== 0 &&
    inputValue.address.length !== 0 &&
    inputValue.arrivalDate.length !== 0 &&
    inputValue.deliveryMethod.length !== 0;
  return (
    <div className="order">
      <section className="order_address">
        <div className="order_address_container">
          <p className="order_title">보내시는 분</p>

          <div className="order_form">
            <div className="order_wrap">
              <div className="order_head">이름</div>
              <div className="order_content">{cartItem[0].userName}</div>
            </div>
            <div className="order_wrap">
              <div className="order_head">전화번호</div>
              <div className="order_content">{cartItem[0].phone_number}</div>
            </div>
            <div className="order_wrap">
              <div className="order_head">이메일</div>
              <div className="order_content">{cartItem[0].email}</div>
            </div>
          </div>
        </div>
      </section>

      <form>
        <section className="order_address">
          <div className="order_address_container">
            <p className="order_title">받으시는 분</p>

            <div className="order_form">
              <div className="order_wrap">
                <div className="order_head">
                  <p>*이름</p>
                </div>
                <div className="order_input">
                  <input
                    name="name"
                    placeholder="홍길동"
                    value={inputValue.name}
                    onChange={saveInputValue}
                  />
                </div>
              </div>

              <div className="order_wrap">
                <div className="order_head">
                  <p>*전화번호</p>
                </div>
                <div className="order_input">
                  <input
                    name="phoneNumber"
                    placeholder="'-'를 제외한 전화번호를 입력해주세요"
                    value={inputValue.phoneNumber}
                    onChange={saveInputValue}
                  />
                </div>
              </div>

              <div className="order_wrap">
                <div className="order_head">
                  <p>*주소</p>
                </div>
                <div className="order_input">
                  <input
                    name="address"
                    placeholder="주소를 입력해주세요"
                    value={inputValue.address}
                    onChange={saveInputValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="order_delivery">
          <div className="order_delivery_container">
            <p className="order_delivery_title">도착 희망일</p>
            <div className="order_delivery_date">
              <input
                name="arrivalDate"
                type="date"
                min={currentDay}
                value={inputValue.arrivalDate}
                onChange={saveInputValue}
              />
            </div>
          </div>
          <div className="order_delivery_container">
            <p className="order_delivery_title">배송 방법</p>
            <div className="order_delivery_radio">
              <label>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value={(inputValue.deliveryMethod, 0)}
                  onChange={saveInputValue}
                  checked={inputValue.deliveryMethod === '0'}
                />
                새벽배송 (오전 7시 전 도착)
              </label>
              <label>
                <input
                  type="radio"
                  name="deliveryMethod"
                  value={(inputValue.deliveryMethod, 1)}
                  onChange={saveInputValue}
                  checked={inputValue.deliveryMethod === '1'}
                />
                당일배송 (오후 2시 - 7시 도착)
              </label>
            </div>
          </div>
        </section>
      </form>
      <StepBtn
        handleStep={handleStep}
        prev="cart"
        next="confirm"
        validation={validation}
      />
    </div>
  );
};

export default Order;
