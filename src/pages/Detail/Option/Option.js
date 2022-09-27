import React from 'react';

const Option = ({ handleOption, option }) => {
  return (
    <ul className="option_btn_container">
      {option.map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              className="option_btn"
              onClick={handleOption}
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
