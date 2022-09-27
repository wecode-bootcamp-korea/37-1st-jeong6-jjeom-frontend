import React, { useState, useEffect } from 'react';
import CartItemList from './components/CartItemList';
import ItemNone from './components/ItemNone';
import './Cart.scss';

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  console.log(checkedItem);
  console.log(cartItem);

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
    for (let i = 0; i < checkedItem.length; i++) {
      totalPrice += cartItem[i].price * cartItem[i].amount;
    }
    return totalPrice;
  };

  const sumAllPrice = totalPrice => {
    if (checkedItem.length === 0) {
      return 0;
    } else {
      return sumItemPrice() + 3500;
    }
  };

  //POST
  const postOrder = () => {
    fetch(`/data/cartList.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name: cartItem.name,
        option: cartItem.price,
      }),
    })
      .then(res => {
        res.json();
      })
      .then(data => {
        console.log(data);
      });
  };

  //PATCH
  const addCart = (id, amount) => {
    //http://localhost:3000/carts/patch?optionProductsId=1&quantity=1
    fetch(`/data/cartList.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        amount: amount,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  //DELETE
  const deleteCart = id => {
    fetch(`/data/cartList.json?id=${id}`, {
      //http://localhost:3000/carts/post
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setCartItem(data));
  };

  // GET
  useEffect(() => {
    fetch('/data/cartList.json', {
      //http://localhost:3000/carts/get
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setCartItem(data));
  }, []);

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
                    deleteCart={deleteCart}
                  />
                ))}
              </ul>
              <button
                className="all_delete"
                onClick={() => console.log(checkedItem)}
              >
                선택 상품 삭제
              </button>
            </div>
            <div className="payment_area">
              <ul className="payment_list">
                <li className="all_price">
                  <p>총 상품 금액</p>
                  <p>{sumItemPrice().toLocaleString()}원</p>
                </li>
                <li className="all_price">
                  <p>총 배송비</p>
                  <p>{checkedItem.length === 0 ? '0원' : '3,500원'}</p>
                </li>
                <li className="option_price">
                  <dl className="option">
                    <dt className="delivery">기본 배송비</dt>
                    <dd className="delivery">3,500원</dd>
                  </dl>
                </li>
                <li>
                  <p className="final_title">예상 결제 금액</p>
                  <p className="final_price">
                    {sumAllPrice(sumItemPrice).toLocaleString()}원
                  </p>
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
