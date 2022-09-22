import React from 'react';
import './CartItemList.scss';

const CartItemList = ({ itemInfo }) => {
  const { img, name, option, price, gram } = itemInfo;

  return (
    <li>
      <div className="check_area">
        <input type="checkbox" id="check1" title="선택" />
        <label htmlFor="check1" />
      </div>
      <img src={img} alt="sample" />
      <div className="product_info">
        <p className="name">
          {name}
          <span className="option">{option}</span>
        </p>
        <span className="standard">{gram} 기준</span>
      </div>
      <div className="amount_box">
        <button className="box">
          <i className="fa-solid fa-minus" />
        </button>
        <div className="box">1</div>
        <button className="box">
          <i className="fa-solid fa-plus" />
        </button>
      </div>
      <p className="price">{price}원</p>
      <button className="delete_btn">
        <i className="fa-solid fa-xmark" />
      </button>
    </li>
  );
};

export default CartItemList;
