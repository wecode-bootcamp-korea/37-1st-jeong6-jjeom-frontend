import React from 'react';

const StepBtn = ({ handleStep }) => {
  return (
    <div className="payment_btn_container">
      <button className="step_btn" value="completion" onClick={handleStep}>
        이전 단계
      </button>
      <button className="step_btn" value="confirm" onClick={handleStep}>
        다음 단계
      </button>
    </div>
  );
};

export default StepBtn;
