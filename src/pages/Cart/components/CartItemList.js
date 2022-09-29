import { React } from 'react';
import './CartItemList.scss';

const CartItemList = ({
  itemInfo,
  onChangeProps,
  checkedItem,
  handleSingleCheck,
  setCartItem,
  patchAmount,
}) => {
  const {
    id,
    option_products_id,
    tumbnail_url,
    name,
    standard_unit,
    price,
    thick,
    quantity,
  } = itemInfo;

  //PATCH
  // TODO: state update와 싱크 맞추기!
  // 1. fetch 결과가 성공적이면 setState(plusQuantity에서 onChangeProps)
  // 2. fetch 결과가 성공적이면 한번 더 getData (setState X)

  // PATCH
  // const plusQuantity = () => {
  //   onChangeProps(option_products_id, 'quantity', quantity + 1);
  //   // console.log(
  //   //   `option_products_id: ${option_products_id}`,
  //   //   `quantity: ${quantity}`
  //   // );
  //   fetch(
  //     `http://172.20.10.3:3000/carts/patch?optionProductsId=${option_products_id}&quantity=${quantity}`,
  //     {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8',
  //         Authorization: localStorage.getItem('token'),
  //       },
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(data => setCartItem(data.getCartbyId)); //*응답 key값이 getCarybyId 인지 확인 필요
  // };
  const plusQuantity = () => {
    onChangeProps(option_products_id, 'quantity', quantity + 1);
    patchAmount(option_products_id, quantity + 1);
    patchAmount();
  };

  // const minusQuantity = () => {
  //   onChangeProps(
  //     option_products_id,
  //     'quantity',
  //     quantity === 1 ? 1 : quantity - 1
  //   );
  //   // console.log(
  //   //   `option_products_id: ${option_products_id}`,
  //   //   `quantity: ${quantity}`
  //   // );

  //   fetch(
  //     `http://172.20.10.3:3000/carts/patch?optionProductsId=${option_products_id}&quantity=${quantity}`,
  //     {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8',
  //         Authorization: localStorage.getItem('token'),
  //       },
  //     }
  //   )
  //     .then(res => res.json())
  //     .then(data => setCartItem(data.getCartbyId));
  // };

  const minusQuantity = () => {
    onChangeProps(
      option_products_id,
      'quantity',
      quantity === 1 ? 1 : quantity - 1
    );
    patchAmount(option_products_id, quantity - 1);
    patchAmount();
  };

  return (
    <li>
      <div className="check_area">
        <input
          type="checkbox"
          id={`check${id}`}
          title="선택"
          checked={checkedItem.includes(id)}
          onChange={handleSingleCheck}
        />
        <label htmlFor={`check${id}`} />
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
      {/* <button className="delete_btn">
        <i className="fa-solid fa-xmark" />
      </button> */}
    </li>
  );
};

export default CartItemList;
