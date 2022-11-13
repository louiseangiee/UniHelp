import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import ProgressBar from "react-bootstrap/ProgressBar";

export const DVContainer = styled.div`
  background: #fff;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  color: #4a5378;
  font-weight: 600;
  padding-left: 20px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Img = styled.img`
  max-height: 100px;
`;
