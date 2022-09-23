import { React } from 'react';
import './CartItemList.scss';

const CartItemList = ({ itemInfo, onChangeProps, setCartItem, cartItem }) => {
  const { id, img, name, option, price, gram, amount, isChecked } = itemInfo;
  const handleCheckBox = () => {
    onChangeProps(id, 'isChecked', !isChecked);
  };

  const plusQuantity = () => {
    onChangeProps(id, 'amount', amount + 1);
  };

  const minusQuantity = () => {
    onChangeProps(id, 'amount', amount === 1 ? 1 : amount - 1);
  };

  const removeItem = id => {
    setCartItem(
      cartItem.filter(item => {
        return item.id !== id;
      })
    );
  };

  return (
    <li>
      <div className="check_area">
        <input
          type="checkbox"
          id={`check${id}`}
          title="선택"
          checked={isChecked}
          onChange={handleCheckBox}
        />
        <label htmlFor={`check${id}`} />
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
      <button
        className="delete_btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        <i className="fa-solid fa-xmark" />
      </button>
    </li>
  );
};

export default CartItemList;
