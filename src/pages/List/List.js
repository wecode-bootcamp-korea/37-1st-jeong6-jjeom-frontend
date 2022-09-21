import React, { useEffect, useState } from 'react';
import Products from './Products';
import './List.scss';

const List = () => {
  const [products, setProducrts] = useState([]);

  useEffect(() => {
    fetch('/data/list-data.json')
      .then(res => res.json())
      .then(data => setProducrts(data));
  }, []);

  return (
    <div className="list">
      <section className="list_banner" />
      <div className="container">
        <section className="list_tab">
          <ul className="list_tab_container">
            {LIST_TAB.map(tab => {
              return (
                <li className="list_tab_button" key={tab.id}>
                  {tab.text}
                </li>
              );
            })}
          </ul>
        </section>
        <ul className="products_list">
          {products.map(data => {
            return <Products key={data.id} data={data} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;

const LIST_TAB = [
  { id: 1, text: '돼지' },
  { id: 2, text: '소' },
  { id: 3, text: '닭' },
  { id: 4, text: '수산' },
  { id: 5, text: '밀키트' },
  { id: 6, text: '우유' },
  { id: 7, text: '달걀' },
  { id: 8, text: '이유식' },
];
