import React from 'react';

const ItemInfo = ({ description_url }) => {
  return (
    <section className="detail_desc">
      <img src={description_url} alt="데스크 이미지" />
    </section>
  );
};
export default ItemInfo;
