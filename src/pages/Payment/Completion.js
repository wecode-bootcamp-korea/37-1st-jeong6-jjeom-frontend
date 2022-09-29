import React from 'react';
import './Completion.scss';
const Completion = () => {
  return (
    <div className="completion">
      <i className="fa-solid fa-circle-check" />
      <p className="completion_title">주문이 완료되었습니다.</p>
      <p className="completion_sub">기한 내에 입금을 완료해주세요.</p>
      <p className="completion_delivery_date">
        {' '}
        입금 시 9월 23일 (금) 도착 예정
      </p>
      <ul className="account_container">
        <li className="account_info">
          <p>계좌명</p>
          <p>정육각</p>
        </li>
        <li className="account_info">
          <p>입금 계좌</p>
          <p>신한은행 : 110-440-487867</p>
        </li>
        <li className="account_info">
          <p>입금 기한</p>
          <p>2022-09-22 20:00</p>
        </li>
        <li className="account_info">
          <p>입금 금액</p>
          <p className="account_final_price">79,200원</p>
        </li>
      </ul>
      <div className="final_warning">
        <i className="fa-solid fa-circle-exclamation" />
        <p>
          입금자와 주문자가 다른 경우,
          <br />
          반드시 고객센터(1800-0658)로 연락 부탁드립니다.
        </p>
      </div>
    </div>
  );
};

export default Completion;
