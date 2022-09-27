import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Option from './Option/Option';
import ItemInfo from './ItemInfo/ItemInfo';
import Info from './Info/Info';
import './Detail.scss';

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailDate] = useState({});
  const [quantityItem, setQuantityItem] = useState(1);
  const [isOptionSwtich, setIsOptionSwitch] = useState(false);
  const [option, setOption] = useState('선택');
  const [currTab, setCurrTab] = useState('상품설명');

  // TODO : 받은 데이터로 보여주기
  const TAB_LIST = {
    상품설명: <ItemInfo />,
    상품정보안내: <Info />,
  };

  useEffect(() => {
    // TODO : API Integration
    fetch(`/data/detail${id}.json`)
      .then(res => res.json())
      .then(data => setDetailDate(data));
  }, [id]);

  const handlePlusCount = () => {
    setQuantityItem(quantityItem + 1);
  };

  const handleMinusCount = () => {
    if (quantityItem === 1) return;

    setQuantityItem(quantityItem - 1);
  };

  const handleOption = e => {
    setOption(e.target.value);
    setIsOptionSwitch(!isOptionSwtich);
  };

  const handleTab = tab => {
    setCurrTab(tab);
  };

  return (
    <div className="detail">
      <section className="detail_top">
        <div className="detail_top_data">
          <img
            src="https://jeongyookgak-commerce.s3.ap-northeast-2.amazonaws.com/jyg-custom-seoul-app/frontend/thumbnails/transparent_background/porkbelly-fresh-detail.png"
            alt="상품 이미지"
          />

          <div className="detail_top_content">
            <h2 className="detail_top_title">{detailData.title}</h2>
            <p className="detail_top_gram">100g당 3,550원</p>
            <p className="detail_top_price">
              기준가 {detailData.price}원({detailData.gram}g)
            </p>

            <div className="detail_top_option">
              <span>옵션</span>
              <div>
                <button
                  type="button"
                  className="option_btn"
                  value={option}
                  onClick={handleOption}
                >
                  {option}
                </button>

                {isOptionSwtich && (
                  <Option
                    handleOption={handleOption}
                    option={detailData.option}
                  />
                )}
              </div>
            </div>

            <div className="detail_top_count">
              <span>수량</span>
              <div className="count_container">
                <button onClick={handleMinusCount}>−</button>
                <span>{quantityItem}</span>
                <button onClick={handlePlusCount}>+</button>
              </div>
            </div>

            <div className="detail_content_btn">
              <button>바로구매</button>
              <button>장바구니</button>
            </div>
          </div>
        </div>
      </section>

      <section className="detail_tab">
        {Object.keys(TAB_LIST).map(tab => (
          <button key={tab} onClick={() => handleTab(tab)}>
            <span className={`${currTab === tab ? 'active' : ''}`}>{tab}</span>
          </button>
        ))}
      </section>
      {TAB_LIST[currTab]}
    </div>
  );
};

export default Detail;
