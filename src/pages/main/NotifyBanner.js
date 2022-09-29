import React from 'react';
import { useState } from 'react';
import './NotifyBanner.scss';

const NotifyBanner = () => {
  const [move2, setMove] = useState(0);
  const active = {
    transform: `translate(${move2}px)`,
    transition: 'all 1.5s',
  };
  const moveRightHandler = () => {
    setMove(prev => prev - 575);
  };
  const moveLeftHandler = () => {
    setMove(prev => prev + 575);
  };

  if (move2 === -1725) {
    return setMove(0);
  }

  return (
    <div>
      <div className="notifyBanner">
        <div className="secondBannerWrap">
          <div style={active} className="secondBannerContent">
            공지사항1
          </div>
          <div style={active} className="secondBannerContent">
            공지사항2
          </div>
          <div style={active} className="secondBannerContent">
            공지사항3
          </div>
          <div className="secondBtnWrap">
            {move2 === 0 ? (
              <button disabled onClick={moveLeftHandler} className="leftBtn">
                <i className="fa-solid fa-chevron-left" />
              </button>
            ) : (
              <button onClick={moveLeftHandler} className="leftBtn">
                <i className="fa-solid fa-chevron-left" />
              </button>
            )}
            <button onClick={moveRightHandler} className="rightBtn">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifyBanner;
