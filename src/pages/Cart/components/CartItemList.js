import { React } from 'react';
import './CartItemList.scss';

const CartItemList = ({
  itemInfo,
  onChangeProps,
  checkedItem,
  handleSingleCheck,
  deleteCart,
}) => {
  const {
    product_id,
    tumbnail_url,
    name,
    standard_unit,
    price,
    thick,
    quantity,
  } = itemInfo;

  const plusQuantity = () => {
    onChangeProps(product_id, 'quantity', quantity + 1);
    console.log(`${name}수량 : ${quantity}`);
  };

  const minusQuantity = () => {
    onChangeProps(product_id, 'quantity', quantity === 1 ? 1 : quantity - 1);
    console.log(`${name}수량 : ${quantity}`);
  };

  return (
    <li>
      <div className="check_area">
        <input
          type="checkbox"
          id={`check${product_id}`}
          title="선택"
          checked={checkedItem.includes(product_id)}
          onChange={handleSingleCheck}
        />
        <label htmlFor={`check${product_id}`} />
      </div>
      <img src={tumbnail_url} alt="sample" />
      <div className="product_info">
        <p className="name">
          {name}
          <span className="option">{standard_unit}</span>
        </p>
        <span className="standard">{thick}g 기준</span>
      </div>
      <div className="amount_box">
        <button className="box" onClick={minusQuantity}>
          <i className="fa-solid fa-minus" />
        </button>
        <p className="box">{quantity}</p>
        <button className="box" onClick={plusQuantity}>
          <i className="fa-solid fa-plus" />
        </button>
      </div>
      <p className="price">{(price * quantity).toLocaleString()}원</p>
      <button className="delete_btn" onClick={() => console.log(product_id)}>
        <i className="fa-solid fa-xmark" />
      </button>
    </li>
  );
};

export default CartItemList;
