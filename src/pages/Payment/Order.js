import React, { useEffect, useState } from 'react';
import StepBtn from './StepBtn';
import './Order.scss';

const Order = ({ handleStep, saveInputValue }) => {
  const [userData, setUserData] = useState({});

  let currentDay =
    new Date().getMonth() + 1 + '월 ' + new Date().getDate() + '일';

  useEffect(() => {
    fetch('/data/user-data.json')
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);

  return (
    <div className="order">
      <section className="order_address">
        <div className="order_address_container">
          <p className="order_title">보내시는 분</p>

          <div className="order_form">
            <div className="order_wrap">
              <div className="order_head">이름</div>
              <div className="order_content">{userData.name}</div>
            </div>
            <div className="order_wrap">
              <div className="order_head">전화번호</div>
              <div className="order_content">{userData.phoneNumber}</div>
            </div>
            <div className="order_wrap">
              <div className="order_head">이메일</div>
              <div className="order_content">{userData.mail}</div>
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
                name="date"
                type="number"
                placeholder={currentDay}
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
                  name="delivery"
                  value="새벽배송 (오전 7시 전 도착)"
                  onChange={saveInputValue}
                />
                새벽배송 (오전 7시 전 도착)
              </label>
              <label>
                <input
                  type="radio"
                  name="delivery"
                  value=" 당일배송 (오후 2시 - 7시 도착)"
                  onChange={saveInputValue}
                />
                당일배송 (오후 2시 - 7시 도착)
              </label>
            </div>
          </div>
        </section>
      </form>

      <StepBtn handleStep={handleStep} preStep="" nextStep="confirm" />
    </div>
  );
};

export default Order;
