import React from 'react';
import SignUp from '../components/SignUp';
import ScrollToTop from '../components/ScrollToTop';
import SignUpSuccess from '../components/SuccessfulSignUp';

function SignupPage() {
  return (
    <>
      <ScrollToTop />
      <SignUp />
      <SignUpSuccess />
    </>
  );
}

export default SignupPage;



