import { React } from 'react';
import './CartItemList.scss';

const CartItemList = ({ itemInfo, onChangeProps }) => {
  const { id, img, name, option, price, gram, amount } = itemInfo;

  const plusQuantity = () => {
    onChangeProps(id, 'amount', amount + 1);
  };

  const minusQuantity = () => {
    onChangeProps(id, 'amount', amount === 1 ? 1 : amount - 1);
  };

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
        <span className="standard">{gram}g 기준</span>
      </div>
      <div className="amount_box">
        <button className="box" onClick={minusQuantity}>
          <i className="fa-solid fa-minus" />
        </button>
        <p className="box">{amount}</p>
        <button className="box" onClick={plusQuantity}>
          <i className="fa-solid fa-plus" />
        </button>
      </div>
      <p className="price">{price * amount}원</p>
      <button className="delete_btn">
        <i className="fa-solid fa-xmark" />
      </button>
    </li>
  );
};

export default CartItemList;
