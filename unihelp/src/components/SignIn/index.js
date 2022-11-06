import React from 'react';
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

import { Link } from 'react-router-dom';
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
} from './SigninElements';

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    console.log(email, password)
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><img src={"logos/Unihelp_white.png"} height="80"></img></Icon>
          <FormContent>
            <Form action='/main-page' onSubmit={handleSubmit}>
              <FormH1>Sign In to Your Account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required
              onChange={(e) => setEmail(e.target.value)} 
              value={email}/>
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} />
              { !isPending && <FormButton type='submit'>Continue</FormButton> }
              { isPending && <FormButton type='submit'>Loading...</FormButton> }
              { error && <p>{error}</p> }
              
              <Text>No account? <Link to='/signup'>Create one</Link></Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;


