import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Products = ({ data }) => {
  const { id, title, price, gram, img_url, antibiotic } = data;

  return (
    <li className="products_container">
      <Link to={`/detail/${id}`}>
        <div className="products_img">
          {antibiotic && <span className="antibiotic">무항생제</span>}
          <img className="prducut_img" src={img_url} alt="상품 이미지" />
          <button className="cart_btn">
            <i className="fa-solid fa-cart-shopping" />
          </button>
        </div>
        <h6 className="product_title">{title}</h6>
        <p className="product_price">
          기준가 {price}원/{gram}g
        </p>
      </Link>
    </li>
  );
};

export default Products;
