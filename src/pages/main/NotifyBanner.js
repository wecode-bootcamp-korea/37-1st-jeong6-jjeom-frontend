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

  if (move2 === -1150) {
    return setMove(0);
  }
  console.log(move2);

  return (
    <div>
      <div className="notifyBanner">
        <div className="secondBannerWrap">
          <div style={active} className="secondBannerContent">
            <p>프론트엔드</p>
            <div>
              <span>안수진</span>
              <span>신주안</span>
              <span>김효성</span>
            </div>
          </div>
          <div style={active} className="secondBannerContent">
            <p>백엔드</p>
            <div>
              <span>추재호</span>
              <span>정우진</span>
            </div>
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
