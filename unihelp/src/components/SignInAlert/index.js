import React, { useState } from 'react';
import {CAlert, AlertHeading} from './SignInAlertElements';
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const SignInSuccess = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <CAlert variant="success" onClose={() => setShow(false)} dismissible>
        <AlertHeading>Signed In Successfully</AlertHeading>
        {/* <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p> */}
      </CAlert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}



export default SignInSuccess;