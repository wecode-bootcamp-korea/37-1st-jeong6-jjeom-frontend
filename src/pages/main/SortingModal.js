import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SortingModal.scss';

const SortingModal = ({ bestItems, filterAnti, key }) => {
  return (
    <div>
      <div className="sorting_wrap">
        <button className="sorting_best">베스트상품</button>
        <button onClick={filterAnti} className="sorting_antibiotic">
          무항생제
        </button>
        <button className="sorting_random">추천상품</button>
      </div>
    </div>
  );
};

export default SortingModal;
