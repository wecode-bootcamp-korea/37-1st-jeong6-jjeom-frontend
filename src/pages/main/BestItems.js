import React, { useState } from 'react';
import Products from '../List/Product/Product';
import './BestItems.scss';

const BestItems = () => {
  const [bestItems, setBestItems] = useState([]);

  const antiBio = bestItems.filter(e => {
    return e.antibiotic == true;
  });

  const tabClickHandler = index => {
    setActiveIndex(index);
  };

  const arr = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * bestItems.length);
    let recommend = bestItems[randomIndex];
    arr.push(recommend);
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const tabContArr = [
    {
      tabTitle: (
        <span
          className={
            activeIndex === 0
              ? 'headerTitle is-active'
              : 'headerTitle none-active'
          }
          onClick={() => {
            tabClickHandler(0);
          }}
        >
          무항생제
        </span>
      ),
      tabCont: antiBio.map(data => {
        return <Products data={data} key={data.id} />;
      }),
    },

    {
      tabTitle: (
        <span
          className={
            activeIndex === 1
              ? 'headerTitle is-active'
              : 'headerTitle none-active'
          }
          onClick={() => {
            tabClickHandler(1);
          }}
        >
          베스트아이템
        </span>
      ),
      tabCont: bestItems.map(data => {
        return <Products data={data} key={data.id} />;
      }),
    },

    {
      tabTitle: (
        <span
          className={activeIndex === 2 ? 'is-active' : 'none-active'}
          onClick={() => {
            tabClickHandler(2);
          }}
        >
          추천제품
        </span>
      ),
      tabCont: arr.map((data, index) => {
        return <Products data={data} key={index} />;
      }),
    },
  ];

  useEffect(() => {
    fetch('./data/bestItems.json')
      .then(res => res.json())
      .then(result => setBestItems(result));
  }, []);
  return (
    <div className="bestItems">
      <div
        onMouseLeave={() => {
          setModal(false);
        }}
        className="best_header"
      >
        <span className="best_title">
          {tabContArr.map((section, index) => {
            return section.tabTitle;
          })}
        </span>
      </div>

      <ul className="products_list">{tabContArr[activeIndex].tabCont}</ul>
    </div>
  );
};

export default BestItems;
