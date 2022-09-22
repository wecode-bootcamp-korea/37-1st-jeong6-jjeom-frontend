import React from 'react';
import './Product.scss';

const Products = ({ data }) => {
  const { title, price, gram, img_url, antibiotic } = data;
  return (
    <li className="products_container">
      <div className="products_img">
        {antibiotic && <span className="antibiotic">무항생제</span>}
        <img className="prducut_img" src={img_url} alt="상품 이미지" />
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
