import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import { useSearchParams } from 'react-router-dom';
import './List.scss';
import { API } from '../../config';

const List = () => {
  const [products, setProducts] = useState([]);
  const [tabSwtich, setTabSwitch] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTab = pageId => {
    searchParams.set('categories', pageId);
    setSearchParams(searchParams);
    setTabSwitch(pageId);
  };
  useEffect(() => {
    fetch(`${API.LIST}/${tabSwtich}/list`) //`name=${name}`
      // fetch(`data/list-data.json`)
      // fetch(`http://172.20.10.3:3000/products/${tabSwtich}/list`) //`name=${name}`
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [tabSwtich]);
  return (
    <div className="list">
      <section className="list_banner">
        <img src={LIST_TAB[tabSwtich - 1].categories_url} alt="카테고리 배너" />
      </section>
      <div className="container">
        <section className="list_tab">
          <ul className="list_tab_container">
            {LIST_TAB?.map(tab => {
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
          {products?.map(data => {
            return <Product key={data.id} data={data} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;

const LIST_TAB = [
  {
    id: 1,
    text: '돼지',
    name: 'pork',
    categories_url:
      'https://user-images.githubusercontent.com/95614185/192101902-3c2bde7a-f18a-46b0-a784-71fed5dc9177.png',
  },
  {
    id: 2,
    text: '소',
    name: 'cow',
    categories_url:
      'https://user-images.githubusercontent.com/95614185/192101922-b9cc68b4-fbfb-4f4f-b6ab-1396204b1153.png',
  },
  {
    id: 3,
    text: '닭',
    name: 'chicken',
    categories_url:
      'https://user-images.githubusercontent.com/95614185/192101932-856bb7a3-51be-4a34-9e46-30705a41a734.png',
  },
  {
    id: 4,
    text: '수산',
    name: 'seafood',
    categories_url:
      'https://user-images.githubusercontent.com/95614185/192101950-f8e17e43-d4a2-4a45-a502-31f27cf7b592.png',
  },
  {
    id: 5,
    text: '밀키트',
    name: 'mealkit',
    categories_url:
      'https://user-images.githubusercontent.com/95614185/192101956-c775af31-d265-41aa-83bc-47d56ffd53b0.png',
  },
  {
    id: 6,
    text: '우유',
    name: 'milk',
    categories_url:
      'https://user-images.githubusercontent.com/95614185/192101963-c6837998-3431-412a-b560-d8b37b854e3c.png',
  },
  {
    id: 7,
    text: '달걀',
    name: 'egg',
    categories_url:
      'https://user-images.githubusercontent.com/95614185/192101975-4fc7859b-0c54-4cf8-9995-c74ba14dc04c.png',
  },
  {
    id: 8,
    text: '이유식',
    name: 'baby',
    categories_url:
      'https://user-images.githubusercontent.com/95614185/192102021-f0db4594-b69a-4cdd-8959-40552c46e691.png',
  },
];
