import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Product from './Product';
import './List.scss';

const List = () => {
  const [products, setProducts] = useState([]);
  const [tabSwitch, setTabSwitch] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsId = searchParams.get('id');

  const handleTab = pageId => {
    searchParams.set('id', pageId);
    setSearchParams(searchParams);
    setTabSwitch(pageId);
  };

  useEffect(() => {
    fetch(
      // `https://0bec-211-106-114-186.jp.ngrok.io/products/list?categoriesId=${paramsId}`,
      `https://jsonplaceholder.typicode.com/users/`
      // {
      //   // mode: 'no-cors',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8',
      //   },
      // }
    )
      .then(res => res.json())
      .then(data => setProducts(data));
  });
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
                    tab.id === tabSwitch && 'active'
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
  { id: 1, text: '돼지', name: '돼지' },
  { id: 2, text: '소', name: '소' },
  { id: 3, text: '닭', name: '닭' },
  { id: 4, text: '수산', name: '수산' },
  { id: 5, text: '밀키트', name: '밀키트' },
  { id: 6, text: '우유', name: '우유' },
  { id: 7, text: '달걀', name: '달걀' },
  { id: 8, text: '이유식', name: '이유식' },
];
