import React from 'react';
import SignIn from '../components/SignIn';
import ScrollToTop from '../components/ScrollToTop';
import SignInSuccess from '../components/SignInAlert';



function SigninPage() {
  return (
    <>
      <ScrollToTop />
      <SignIn />
      <SignInSuccess />
    </>
  );
}

export default SigninPage;
