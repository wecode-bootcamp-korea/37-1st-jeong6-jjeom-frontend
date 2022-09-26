import { React, useState, useEffect } from 'react';
import './Cart.scss';
import CartItemList from './components/CartItemList';
import ItemNone from './components/ItemNone';

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  const isAllChecked = cartItem.length === checkedItem.length;

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckedItem(prev => [...prev, id]);
    } else {
      setCheckedItem(checkedItem.filter(el => el !== id));
    }
  };

  const handleAllCheck = checked => {
    if (checked) {
      setCheckedItem(cartItem.map(({ id }) => id));
    } else {
      setCheckedItem([]);
    }
  };

  // const checkItem = cartItem.filter(item => item.isChecked);
  // const checkedId = checkItem.map(item => item.id);

  // const removeChild = id => {
  //   let removeProducts;
  //   id.forEach(
  //     item => (removeProducts = cartItem.filter(product => product.id !== item))
  //   );
  //   id.forEach(
  //     item =>
  //       (removeProducts = removeProducts.filter(
  //         removeProducts => removeProducts.id !== item
  //       ))
  //   );
  //   setCartItem(removeProducts);
  // };

  // const handelAllCheckbox = value => {
  //   setCartItem(prevItem => {
  //     return prevItem.map(obj => {
  //       return { ...obj, isChecked: value };
  //     });
  //   });

  //   isSetAllCheckBox(value);
  // };

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

  // const sumItemPrice = () => {
  //   let totalPrice = 0;
  //   for (let i = 0; i < checkItem.length; i++) {
  //     totalPrice += checkItem[i].price * checkItem[i].amount;
  //   }
  //   return totalPrice;
  // };

  // const sumAllPrice = totalPrice => {
  //   if (checkItem.length === 0) {
  //     return 0;
  //   } else {
  //     return sumItemPrice() + 3500;
  //   }
  // };

  useEffect(() => {
    fetch('/data/cartList.json')
      .then(res => res.json())
      .then(data => setCartItem(data));
  }, []);

  // useEffect(() => {
  //   let checkedArr = [];

  //   cartItem.forEach(item => {
  //     checkedArr.push(item.isChecked);
  //   });

  //   checkedArr.includes(false)
  //     ? isSetAllCheckBox(false)
  //     : isSetAllCheckBox(true);
  // }, [cartItem]);

  return (
    <div className="cart">
      <h3 className="title">장바구니</h3>
      <div className="container">
        {cartItem.length === 0 ? (
          <ItemNone />
        ) : (
          <>
            <div className="item_table">
              <div className="item_header">
                <div className="check_area">
                  <input
                    type="checkbox"
                    id="checkAll"
                    title="선택"
                    checked={isAllChecked}
                    onChange={e => {
                      handleAllCheck(e.target.checked);
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
                    checkedItem={checkedItem}
                    handleSingleCheck={handleSingleCheck}
                  />
                ))}
              </ul>
              <button className="all_delete">선택 상품 삭제</button>
            </div>
            <div className="payment_area">
              <ul className="payment_list">
                <li className="all_price">
                  <p>총 상품 금액</p>
                  <p>원</p>
                </li>
                <li className="all_price">
                  <p>총 배송비</p>
                  <p />
                </li>
                <li className="option_price">
                  <dl className="option">
                    <dt className="delivery">기본 배송비</dt>
                    <dd className="delivery">3500원</dd>
                  </dl>
                </li>
                <li>
                  <p className="final_title">예상 결제 금액</p>
                  <p className="final_price">원</p>
                </li>
              </ul>
              <button className="payment_btn order">상품 주문하기</button>
              <button className="payment_btn shopping">쇼핑계속하기</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
