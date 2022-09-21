import React from 'react';
import './ItemNone.scss';

const ItemNone = () => {
  return (
    <div className="no_product">
      <p>장바구니에 담은 상품이 없습니다.</p>
      <button className="shopping_btn">쇼핑 계속하기</button>
    </div>
  );
};

export default ItemNone;
