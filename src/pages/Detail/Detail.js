import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Option from './Option/Option';
import ItemInfo from './ItemInfo/ItemInfo';
import Info from './Info/Info';
import './Detail.scss';
import { API } from '../../config';

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [quantityItem, setQuantityItem] = useState(1);
  const [isOptionSwtich, setIsOptionSwitch] = useState(false);
  const [optionContent, setOptionContent] = useState('선택');
  const [currTab, setCurrTab] = useState('상품설명');
  const [isModal, setIsModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [description, setDescription] = useState({});
  const navigate = useNavigate();

  // TODO : 받은 데이터로 보여주기
  const TAB_LIST = {
    상품설명: <ItemInfo description_url={detailData.description_url} />,
    상품정보안내: <Info description={description} />,
  };
  // console.log(detailData.option[1 - 1].value);

  useEffect(() => {
    // TODO : API Integration
    fetch(`${API.DETAIL}/${id}`)
      //fetch(`http://172.20.10.3:3000/products/${id}`
      .then(res => res.json())
      .then(data => setDetailData(data.getProduct));
  }, [id]);

  const handlePlusCount = () => {
    setQuantityItem(quantityItem + 1);
  };

  const handleMinusCount = () => {
    if (quantityItem === 1) return;

    setQuantityItem(quantityItem - 1);
  };

  const handleOption = optionValue => {
    setIsOptionSwitch(!isOptionSwtich);
    setOptionContent(optionValue.thick);
  };

  const handleTab = tab => {
    fetch(`${API.DETAIL}/${id}/description`)
      //fetch(`http://172.20.10.3:3000/products/${id}/description`)
      .then(res => res.json())
      .then(data => setDescription(data.getDescription));
    setCurrTab(tab);
  };

  const handleModal = () => {
    setIsModal(false);
  };
  const handleBtn = button => {
    if (optionContent === '선택') {
      setModalContent('옵션을 선택해주세요!🤔');
      setIsModal(true);
      setTimeout(handleModal, 3000);
    } else if (button === 'buy') {
      fetch(`${API.CART}/post`, {
        // fetch(`http://172.20.10.3:3000/carts/post`
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          optionProductsId: detailData.id,
          quantity: quantityItem,
        }),
      })
        .then(response => {
          if (response.ok === true) {
            return response.json();
          }
          throw new Error('통신실패');
        })
        .then(data => {
          if (data.message === 'add succes') {
            navigate('/cart');
          }
        });
    } else if (button === 'cart') {
      fetch(`${API.CART}/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          optionProductsId: detailData.id,
          quantity: quantityItem,
        }),
      })
        .then(res => {
          if (res.ok === true) {
            return res.json();
          }
          throw new Error('통신실패!');
        })
        .then(data => {
          if (data.message === 'add success') {
            setModalContent('장바구니에 담겼습니당🎉');
            setIsModal(true);
            setTimeout(handleModal, 3000);
          }
        });
    }
  };
  return (
    <div className="detail">
      <div className="modal">
        <p className={isModal ? 'on' : 'off'}>{modalContent}</p>
      </div>
      <section className="detail_top">
        <div className="detail_top_data">
          <img src={detailData.tumbnail_url} alt="상품 이미지" />

          <div className="detail_top_content">
            <h2 className="detail_top_title">{detailData.name}</h2>
            <p className="detail_top_gram">100g당 3,550원</p>
            <p className="detail_top_price">
              기준가 {detailData.price}원({detailData.gram})
            </p>
            <div className="detail_top_option">
              <span>옵션</span>
              <div>
                <button
                  type="button"
                  className="option_btn"
                  onClick={() => handleOption(optionContent)}
                >
                  {optionContent}
                </button>
                {isOptionSwtich && (
                  <Option
                    handleOption={handleOption}
                    option={detailData.thick}
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
              <button onClick={() => handleBtn('buy')}>바로구매</button>
              <button onClick={() => handleBtn('cart')}>장바구니</button>
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
