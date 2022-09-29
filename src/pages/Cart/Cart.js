import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItemList from './components/CartItemList';
import ItemNone from './components/ItemNone';
import './Cart.scss';
import { API } from '../../config';

const DELIVERY_FEE = 3500;

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [checkedItem, setCheckedItem] = useState([]);

  console.log('선택된 상품:', checkedItem);
  console.log('장바구니에 담긴 상품', cartItem);

  const navigate = useNavigate();
  //POST
  const postOrder = () => {
    navigate('/payment', { state: { cartId: checkedItem } });
  };

  const isAllChecked =
    checkedItem.length !== 0 && cartItem.length === checkedItem.length;

  const totalPrice = cartItem.reduce(
    (acc, cart) =>
      checkedItem.indexOf(cart.id) !== -1
        ? acc + Number(cart.price) * cart.quantity
        : acc,
    0
  );
  const sumAllPrice = checkedItem.length === 0 ? 0 : totalPrice + DELIVERY_FEE;

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
      setCheckedItem(cartItem.map(({ id }) => id));
    }
  };

  const onChangeProps = (id, key, value) => {
    setCartItem(prevItem => {
      return prevItem.map(obj => {
        if (obj.option_products_id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  // PATCH
  const patchAmount = async (optionProductsId, quantity) => {
    const response = await fetch(
      `${API.CART}/patch?optionProductsId=${optionProductsId}&quantity=${quantity}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      }
    );

    const data = await response.json();
    if (data) {
      const response = await fetch(`${API.CART}/user`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });

      const data = await response.json();
      const patchedItem = data.getCartbyId
        .map(obj => {
          return {
            id: obj.id,
            option_products_id: obj.option_products_id,
            name: obj.name,
            price: +obj.price,
            quantity: +obj.quantity,
            tumbnail_url: obj.tumbnail_url,
            standard_unit: obj.standard_unit,
            thick: obj.thick,
          };
        })
        .filter(obj => {
          return obj.option_products_id === optionProductsId;
        });
      setCartItem(prevState => {
        return prevState.map(obj => {
          if (obj.option_products_id === optionProductsId) {
            return patchedItem[0];
          } else {
            return obj;
          }
        });
      });
    }
  };

  //DELETE == 성공
  const deleteProduct = async () => {
    const response = await fetch(
      `${API.CART}/delete?cartsId=${checkedItem.join('&cartsId=')}`,

      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
      }
    );

    const data = await response.json();

    if (data) {
      const response = await fetch(`${API.CART}/user`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });

      const data = await response.json();
      const filteredList = data.getCartbyId
        .filter(el => {
          return !checkedItem.includes(el.id);
        })
        .map(obj => {
          return {
            id: obj.id,
            option_products_id: obj.option_products_id,
            name: obj.name,
            price: obj.price,
            quantity: obj.quantity,
            tumbnail_url: obj.tumbnail_url,
            standard_unit: obj.standard_unit,
            thick: obj.thick,
          };
        });
      setCartItem(filteredList);
    }
  };

  // GET == 성공
  const getCartData = () => {
    fetch(`${API.CART}/user`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setCartItem(data.getCartbyId)); //data.getCartbyId
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
                    key={data.id}
                    itemInfo={data}
                    onChangeProps={onChangeProps}
                    checkedItem={checkedItem}
                    handleSingleCheck={() => handleSingleCheck(data.id)}
                    deleteProduct={deleteProduct}
                    setCartItem={setCartItem}
                    patchAmount={patchAmount}
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
              <button
                className="payment_btn"
                onClick={postOrder}
                disabled={!checkedItem.length}
              >
                {!checkedItem.length ? '상품을 선택해 주세요' : '주문하기'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
