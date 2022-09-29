import React from 'react';
import { Link } from 'react-router-dom';
import './ItemNone.scss';

const ItemNone = () => {
  return (
    <div className="no_product">
      <p>장바구니에 담은 상품이 없습니다.</p>
      <Link to="/">
        <button className="shopping_btn">쇼핑 계속하기</button>
      </Link>
    </div>
  );
};

export default ItemNone;
