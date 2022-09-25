import React, { useEffect, useState } from 'react';
import BestItems from './BestItems';
import './main.scss';
import NotifyBanner from './NotifyBanner';

const Main = () => {
  const [move, setMove] = useState(0);
  const [disable, setDisable] = useState(true);
  const active = { transform: `translate(${move}vw)`, transition: 'all 1.5s' };
  const moveRightHandler = () => {
    setMove(prev => prev - 100);
  };
  const moveLeftHandler = () => {
    setMove(prev => prev + 100);
  };

  if (move === -500) {
    return setMove(0);
  }

  // setTimeout(moveRightHandler, 3000);

  return (
    <div className="mainWrap">
      <div className="wrapWrap">
        <div className="mainBannerImgWrap">
          <div className="mainBanner">
            <img
              className="bannerImg"
              style={active}
              src="images/pork1.jpeg"
              alt="배너이미지"
            />
          </div>
          <div className="mainBanner">
            <img
              className="bannerImg"
              style={active}
              src="images/pork2.jpeg"
              alt="배너이미지"
            />
          </div>
          <div className="mainBanner">
            <img
              className="bannerImg"
              style={active}
              src="images/pork3.jpeg"
              alt="배너이미지"
            />
          </div>
          <div className="mainBanner">
            <img
              className="bannerImg"
              style={active}
              src="images/pork4.jpeg"
              alt="배너이미지"
            />
          </div>
          <div className="mainBanner">
            <img
              className="bannerImg "
              style={active}
              src="images/pork5.jpeg"
              alt="배너이미지"
            />
          </div>
          <div className="btnWrap">
            {move === 0 ? (
              <button disabled onClick={moveLeftHandler} className="btn1">
                <i class="fa-solid fa-chevron-left"></i>
              </button>
            ) : (
              <button onClick={moveLeftHandler} className="btn1">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}

            <button onClick={moveRightHandler} className="btn2">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="secondBanner">
        <div className="notifyBanner">
          <NotifyBanner />
        </div>

        <div className="promotionBanner">홍보게시물!</div>
      </div>
      <BestItems />
      <div className="fourthBanner">다양한 정육쩜 상품을 만나보세요!</div>
    </div>
  );
};

export default Main;
