import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Products from '../List/Product';
import './BestItems.scss';

import SortingModal from './SortingModal';

const BestItems = () => {
  const [bestItems, setBestItems] = useState([]);

  const [modal, setModal] = useState(true);

  const modalHandler = () => {
    setModal(!modal);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const getNames = searchParams.getAll('name');

  useEffect(() => {
    fetch(`./data/bestItems.json?name=${getNames}`)
      .then(res => res.json())
      .then(result => setBestItems(result));
  }, []);
  return (
    <div className="bestItems">
      <div className="best_header">
        <span className="best_title">정육쩜 베스트 상품</span>
        {modal && <SortingModal />}
        <i onClick={modalHandler} className="fa-solid fa-bars"></i>
      </div>

      <ul className="products_list">
        {bestItems.map(data => {
          return <Products data={data} key={data.id} />;
        })}
      </ul>
    </div>
  );
};

export default BestItems;
