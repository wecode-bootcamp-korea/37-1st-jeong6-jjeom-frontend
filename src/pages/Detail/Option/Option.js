import React from 'react';

const Option = ({ handleOption, option }) => {
  return (
    <ul className="option_btn_container">
      {option.map((option, index) => {
        return (
          <li key={option.thick}>
            <button
              type="button"
              className="option_btn"
              onClick={() => handleOption(option, index)}
            >
              {option.thick}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Option;
