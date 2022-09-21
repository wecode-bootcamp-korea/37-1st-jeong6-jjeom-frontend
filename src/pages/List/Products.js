import React from 'react';
import './Products.scss';

const Products = ({ data }) => {
  const { title, price, gram, img_url, antibiotic } = data;
  return (
    <li className="list_data_container">
      <div className="list_img">
        {antibiotic && <span className="">무항생제</span>}
        <img src={img_url} alt="상품 이미지" />
        <button>
          <i className="fa-solid fa-cart-shopping" />
        </button>
      </div>
      <h6>{title}</h6>
      <p>
        기준가 {price}원/{gram}g
      </p>
    </li>
  );
};

export default Products;
