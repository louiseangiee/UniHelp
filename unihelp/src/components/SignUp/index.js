import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './SignupElements';
import { useSignup } from '../../../hooks/useSignup';

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>UniHelp</Icon>
          <FormContent>
            <Form action='/signin'>
              <FormH1>Sign up for your account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

