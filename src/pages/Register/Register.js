import React, { useState } from 'react';
import './Register.scss';
import ModalPortal from '../../Portal';
import RegisterInfo from './RegisterInfo';
import SuccessModal from './SuccessModal';
import SignupData from './SignupData';
import SignupData2 from './SignupData2';

const Register = () => {
  const [transPage, setTransPage] = useState(false);

  return (
    <>
      {transPage ? (
        <SignupData2></SignupData2>
      ) : (
        <SignupData setTransPage={setTransPage}></SignupData>
      )}
    </>
  );
};
export default Register;
