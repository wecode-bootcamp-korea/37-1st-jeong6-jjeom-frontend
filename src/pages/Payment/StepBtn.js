import React from 'react';

const StepBtn = ({ handleStep, preStep, nextStep, confirmOrder }) => {
  return (
    <div className="payment_btn_container">
      <button className="step_btn" value={preStep} onClick={handleStep}>
        이전 단계
      </button>
      <button
        className="step_btn"
        value={nextStep}
        onClick={(handleStep, confirmOrder)}
      >
        다음 단계
      </button>
    </div>
  );
};

export default StepBtn;
