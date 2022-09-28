import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import { useSearchParams } from 'react-router-dom';
import './List.scss';

const List = () => {
  const [products, setProducts] = useState([]);
  const [tabSwtich, setTabSwitch] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = searchParams.get('categories');

  const handleTab = pageId => {
    searchParams.set('categories', pageId);
    setSearchParams(searchParams);
    setTabSwitch(pageId);
  };

  useEffect(() => {
    fetch(`http://172.20.10.3:3000/products/${tabSwtich}/list`) //`name=${name}`
      .then(res => res.json())
      .then(data => setProducts(data.result));
  }, [categories]);

  return (
    <div className="list">
      <section className="list_banner" />
      <div className="container">
        <section className="list_tab">
          <ul className="list_tab_container">
            {LIST_TAB.map(tab => {
              return (
                <li
                  className={`list_tab_button ${
                    tab.id === tabSwtich && 'active'
                  }`}
                  key={tab.id}
                  onClick={() => {
                    handleTab(tab.id);
                  }}
                >
                  {tab.text}
                </li>
              );
            })}
          </ul>
        </section>
        <ul className="products_list">
          {products.map(data => {
            return <Product key={data.id} data={data} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;

const LIST_TAB = [
  { id: 1, text: '돼지', name: 'pork' },
  { id: 2, text: '소', name: 'cow' },
  { id: 3, text: '닭', name: 'chicken' },
  { id: 4, text: '수산', name: 'seafood' },
  { id: 5, text: '밀키트', name: 'mealkit' },
  { id: 6, text: '우유', name: 'milk' },
  { id: 7, text: '달걀', name: 'egg' },
  { id: 8, text: '이유식', name: 'baby' },
];
