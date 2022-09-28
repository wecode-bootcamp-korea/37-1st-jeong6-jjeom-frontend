import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItemList from './components/CartItemList';
import ItemNone from './components/ItemNone';
import './Cart.scss';

const DELIVERY_FEE = 3500;

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  //console.log('선택된 상품:', checkedItem);
  //console.log('장바구니에 담긴 상품', cartItem);

  const navigate = useNavigate();
  const goToPayment = () => {
    navigate('/payment');
  };
  const goToList = () => {
    navigate('/list');
  };

  const isAllChecked =
    checkedItem.length !== 0 && cartItem.length === checkedItem.length;

  const handleSingleCheck = id => {
    if (checkedItem.includes(id)) {
      setCheckedItem(checkedItem.filter(el => el !== id));
    } else {
      setCheckedItem(checkedItem.concat(id));
    }
  };

  const handleAllCheck = () => {
    if (isAllChecked) {
      setCheckedItem([]);
    } else {
      setCheckedItem(cartItem.map(({ product_id }) => product_id));
    }
  };

  const onChangeProps = (id, key, value) => {
    setCartItem(prevItem => {
      return prevItem.map(obj => {
        if (obj.product_id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  const totalPrice = cartItem.reduce(
    (acc, cart) =>
      checkedItem.indexOf(cart.product_id) !== -1
        ? acc + Number(cart.price) * cart.quantity
        : acc,
    0
  );
  const sumAllPrice = checkedItem.length === 0 ? 0 : totalPrice + DELIVERY_FEE;

  //POST
  const postOrder = id => {
    fetch(`cart post api주소`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        // TODO: 어떤 형태로 받아야하는지 백엔드와 정하기 => 상품 id 값을 전달해달라고 하심
        product_id: cartItem.product_id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('주문하기 페이지로 이동합니다.');
          goToPayment(); //주문하기 페이지로 이동
        }
      });
  };

  //DELETE
  const deleteProduct = async () => {
    const response = await fetch(`cart delete api주소`, {
      //http://localhost:3000/carts/delete?product_id=${checkedItem.join('&product_id=')}
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    });

    const data = await response.json();

    if (data) {
      const response = await fetch('cart api주소', {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });

      const data = await response.json();
      const filteredList = data.filter(
        el =>
          !checkedItem.includes(el.product_id).map(obj => {
            return {
              product_id: obj.product_id,
              name: obj.name,
              price: obj.price,
              quantity: obj.quantity,
              tumbnail_url: obj.tumbnail_url,
              standard_unit: obj.standard_unit,
              thick: obj.thick,
            };
          })
      );
      setCartItem(filteredList);
    }
  };

  // GET
  const getCartData = () => {
    fetch('/data/cartList.json', {
      //http://localhost:3000/carts/get
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setCartItem(data));
  };

  useEffect(() => {
    getCartData();
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
                    onChange={handleAllCheck}
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
                    key={data.product_id}
                    itemInfo={data}
                    onChangeProps={onChangeProps}
                    checkedItem={checkedItem}
                    handleSingleCheck={() => handleSingleCheck(data.product_id)}
                    deleteProduct={deleteProduct}
                  />
                ))}
              </ul>
              <button className="all_delete" onClick={deleteProduct}>
                선택 상품 삭제
              </button>
            </div>
            <div className="payment_area">
              <ul className="payment_list">
                <li className="all_price">
                  <p>총 상품 금액</p>
                  <p>{totalPrice.toLocaleString()}원</p>
                </li>
                <li className="all_price">
                  <p>총 배송비</p>
                  <p>
                    {checkedItem.length === 0
                      ? 0
                      : DELIVERY_FEE.toLocaleString()}
                    원
                  </p>
                </li>
                <li className="option_price">
                  <dl className="option">
                    <dt className="delivery">기본 배송비</dt>
                    <dd className="delivery">
                      {DELIVERY_FEE.toLocaleString()}원
                    </dd>
                  </dl>
                </li>
                <li>
                  <p className="final_title">예상 결제 금액</p>
                  <p className="final_price">
                    {sumAllPrice.toLocaleString()}원
                  </p>
                </li>
              </ul>
              <button className="payment_btn order" onClick={() => postOrder()}>
                상품 주문하기
              </button>
              <button
                className="payment_btn shopping"
                onClick={() => goToList()}
              >
                쇼핑계속하기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
