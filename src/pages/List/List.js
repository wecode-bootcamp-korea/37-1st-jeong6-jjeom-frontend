import React, { useEffect, useState } from 'react';
import './List.scss';
import ListData from './ListData';

const List = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch('/data/list-data.json')
      .then(res => res.json())
      .then(data => setListData(data));
  }, []);

  return (
    <div className="list">
      <section className="list_banner" />
      <div className="container">
        <section className="list_tab">
          <ul>
            {LIST_TAB.map(tab => {
              return <li key={tab.id}>{tab.text}</li>;
            })}
          </ul>
        </section>
        <ul className="list_data">
          {listData.map(data => {
            return <ListData key={data.id} data={data} />;
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
