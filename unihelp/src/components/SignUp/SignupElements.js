import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: auto;
  background: #5271ff;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  // margin-left: 32px;
  // margin-top: 32px;
  position: absolute;
  top: 10px;
  left: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  // padding-top: 20px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #fff;
  width: 1000px;
  height: 1000px;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 10px auto;
  padding: 10px 32px;
  padding-bottom: 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-top: 8px;
  margin-bottom: 16px;
  color: #010101;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #010101;
`;
export const FormInput = styled.input`
  padding: 8px 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  background: #ececec;
`;

export const FormButton = styled.button`
  background: #5271ff;
  padding: 8px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 8px 8px;
  margin-bottom: 16px;
  border: none;
  border-radius: 4px;
  background: #ececec;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 16px 16px;
  }
`;
