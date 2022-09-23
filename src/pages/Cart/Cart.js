import { React, useState, useEffect } from 'react';
import './Cart.scss';
import CartItemList from './components/CartItemList';
import ItemNone from './components/ItemNone';

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [isAllCheckBox, isSetAllCheckBox] = useState(false);
  // console.log(cartItem);
  console.log(isAllCheckBox);

  const handelAllCheckbox = value => {
    // idSetAllCheckBox(e.target.checked);
    setCartItem(prevItem => {
      return prevItem.map(obj => {
        return { ...obj, isChecked: value };
      });
    });

    isSetAllCheckBox(value);
  };

  const onChangeProps = (id, key, value) => {
    setCartItem(prevItem => {
      return prevItem.map(obj => {
        if (obj.id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  const sumItemPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartItem.length; i++) {
      totalPrice += cartItem[i].price * cartItem[i].amount;
    }
    return totalPrice;
  };

  const sumAllPrice = totalPrice => {
    return sumItemPrice() + 3500;
  };

  useEffect(() => {
    fetch('/data/cartList.json')
      .then(res => res.json())
      .then(data => setCartItem(data));
  }, []);

  return (
    <div className="cart">
      <h3 className="title">장바구니</h3>
      <div className="container">
        <div className="item_table">
          <div className="item_header">
            <div className="check_area">
              <input
                type="checkbox"
                id="checkAll"
                title="선택"
                checked={isAllCheckBox}
                onChange={e => {
                  handelAllCheckbox(e.target.checked);
                }}
              />
              <label htmlFor="checkAll" />
            </div>
            <p className="header_title">상품정보</p>
            <p className="header_title">수량</p>
            <p className="header_title">가격</p>
          </div>
          <ul className="item_list">
            {cartItem.map(data => (
              <CartItemList
                key={data.id}
                itemInfo={data}
                onChangeProps={onChangeProps}
                // checkedItemHandler={checkedItemHandler}
              />
            ))}
          </ul>
          <button className="all_delete">선택 상품 삭제</button>
        </div>
        <div className="payment_area">
          <ul className="payment_list">
            <li className="all_price">
              <p>총 상품 금액</p>
              <p>{sumItemPrice()}원</p>
            </li>
            <li className="all_price">
              <p>총 배송비</p>
              <p>3500원</p>
            </li>
            <li className="option_price">
              <dl className="option">
                <dt className="delivery">기본 배송비</dt>
                <dd className="delivery">3500원</dd>
                {/* <dt className="sale">신선할인</dt>
                <dd className="sale">-0%</dd> */}
              </dl>
            </li>
            <li>
              <p className="final_title">예상 결제 금액</p>
              <p className="final_price">{sumAllPrice(sumItemPrice)}원</p>
            </li>
          </ul>
          <button className="payment_btn order">상품 주문하기</button>
          <button className="payment_btn shopping">쇼핑계속하기</button>
        </div>
        <ItemNone />
      </div>
    </div>
  );
};

export default Cart;
