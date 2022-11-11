import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

export const CContainer = styled.div`
  height: 75.7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const CH1 = styled.h1`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-align: center;
`

export const CButton = styled(Button)`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  height: 50px;
  width: 600px;
  background: #FFE052;
  border-color: #FFE052;
  color: #010101;
  font-size: 20px;
`
export const CFormGroup  = styled(Form.Group) `
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  // background: #ffffff;
  width: 600px;
`

export const CFormLabel = styled(Form.Label)`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 20px;
`
