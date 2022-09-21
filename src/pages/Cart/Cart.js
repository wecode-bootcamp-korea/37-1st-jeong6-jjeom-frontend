import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <h3 className="title">장바구니</h3>
      <div className="container">
        <div className="item_table">
          <div className="item_header">
            <p className="header_title">상품정보</p>
            <p className="header_title">수량</p>
            <p className="header_title">가격</p>
          </div>
          <ul className="item_list">
            <li>
              <img
                src="https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-seoul-app/frontend/thumbnails/transparent_background/porkbelly-clean-list.png"
                alt="sample"
              />
              <div className="product_info">
                <p className="name">
                  초신선 무항생제 <br /> 돼지 삽겹살 구이용
                  <span className="option">보통(16mm)</span>
                </p>
                <span className="standard">600g 기준</span>
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
              <p classNam="price">46800원</p>
              <button className="delete_btn">
                <i className="fa-solid fa-xmark" />
              </button>
            </li>
            <li>
              <img
                src="https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-seoul-app/frontend/thumbnails/transparent_background/porkbelly-clean-list.png"
                alt="sample"
              />
              <div className="product_info">
                <p className="name">
                  초신선 무항생제 <br /> 돼지 삽겹살 구이용
                  <span className="option">보통(16mm)</span>
                </p>
                <span className="standard">600g 기준</span>
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
              <p classNam="price">46800원</p>
              <button className="delete_btn">
                <i className="fa-solid fa-xmark" />
              </button>
            </li>
          </ul>
        </div>
        <div className="payment_area">
          <ul className="payment_list">
            <li className="all_price">
              <p>총 상품 금액</p>
              <p>213000원</p>
            </li>
            <li className="all_price">
              <p>총 배송비</p>
              <p>3500원</p>
            </li>
            <li className="option_price">
              <dl className="option">
                <dt className="delivery">기본 배송비</dt>
                <dd className="delivery">3500원</dd>
                <dt className="sale">신선할인</dt>
                <dd className="sale">-0%</dd>
              </dl>
            </li>
            <li>
              <p className="final_title">예상 결제 금액</p>
              <p className="final_price">24800원</p>
            </li>
          </ul>
          <button className="payment_btn order">전체상품 주문하기</button>
          <button className="payment_btn shopping">쇼핑계속하기</button>
        </div>
        <div className="no_product">
          <p>장바구니에 담은 상품이 없습니다.</p>
          <button className="shopping_btn">쇼핑 계속하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
