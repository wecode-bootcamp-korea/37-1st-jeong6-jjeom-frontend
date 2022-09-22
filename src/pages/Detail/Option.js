import React from 'react';

const Option = ({ handlOption, option }) => {
  return (
    <ul className="option_btn_container">
      {option.map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              className="option_btn"
              onClick={handlOption}
              value={option}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Option;
