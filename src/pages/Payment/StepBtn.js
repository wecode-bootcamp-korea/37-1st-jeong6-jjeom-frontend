import React from 'react';

const StepBtn = ({ handleStep, prev, next, confirmOrder }) => {
  return (
    <div className="payment_btn_container">
      <button className="step_btn" onClick={() => handleStep(prev)}>
        이전 단계
      </button>
      <button className="step_btn" onClick={() => handleStep(next)}>
        다음 단계
      </button>
    </div>
  );
};

export default StepBtn;
