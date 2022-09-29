import React, { useState } from 'react';
import './Register.scss';

import SignupData from './SignupData';
import SignupData2 from './SignupData2';

const Register = () => {
  const [transPage, setTransPage] = useState(false);

  return (
    <div>
      {transPage ? (
        <SignupData2 setTransPage={setTransPage} />
      ) : (
        <SignupData setTransPage={setTransPage} />
      )}
    </div>
  );
};
export default Register;
