import React from 'react';

const StepBtn = ({ handleStep, preStep, nextStep, confirmOrder }) => {
  return (
    <div className="payment_btn_container">
      <button className="step_btn" onClick={() => handleStep()}>
        이전 단계
      </button>
      <button className="step_btn" onClick={() => handleStep()}>
        다음 단계
      </button>
    </div>
  );
};

export default StepBtn;
