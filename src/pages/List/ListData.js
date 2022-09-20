import React from 'react';

const ListData = ({ data }) => {
  const { title, price, gram, img_url, antibiotic } = data;
  return (
    <li className="list_data_container">
      <div className="list_img">
        {antibiotic ? <span>무항생제</span> : null}
        <img src={img_url} alt="이미지" />
        <button>
          <i class="fa-solid fa-cart-shopping" />
        </button>
      </div>
      <h6>{title}</h6>
      <p>
        기준가 {price}원/{gram}g
      </p>
    </li>
  );
};

export default ListData;
