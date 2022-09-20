import React from 'react';

const Option = ({ handlOptionValue }) => {
  return (
    <ul className="option_btn_container">
      <li>
        <button
          type="button"
          className="option_btn"
          onClick={handlOptionValue}
          value="보통(16mm)"
        >
          보통(16mm)
        </button>
      </li>
      <li>
        <button
          type="button"
          className="option_btn"
          value="얇게(11mm)"
          onClick={handlOptionValue}
        >
          얇게(11mm)
        </button>
      </li>
      <li>
        <button
          type="button"
          className="option_btn"
          value="두껍(24mm)"
          onClick={handlOptionValue}
        >
          두껍(24mm)
        </button>
      </li>
    </ul>
  );
};

export default Option;
