import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './SortingModal.scss';

const SortingModal = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <div className="sorting_wrap">
        <button
          onClick={() => {
            searchParams.set('name', 'best_items');
            setSearchParams(searchParams);
          }}
          className="sorting_best"
        >
          베스트상품
        </button>
        <button
          onClick={() => {
            searchParams.set('name', 'anti_bio');
            setSearchParams(searchParams);
          }}
          className="sorting_antibiotic"
        >
          무항생제
        </button>
        <button
          onClick={() => {
            searchParams.set('name', 'recommend');
            setSearchParams(searchParams);
          }}
          className="sorting_random"
        >
          추천상품
        </button>
      </div>
    </div>
  );
};

export default SortingModal;
