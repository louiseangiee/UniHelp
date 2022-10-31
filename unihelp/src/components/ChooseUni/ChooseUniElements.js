import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const MUContainer = styled.div`
  height: ${({ intro }) => (intro ? "90vh" : "75.7vh")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ intro }) => (intro ? "#f9f9f9" : "#5271ff")};

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const MUWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const MUCard = styled(LinkR)`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #4a5378;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: #fff;
    color: #9aabf9;
  }
`;

export const MUIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const MUH1 = styled.h1`
  font-size: 2.5rem;
  color: ${({ intro }) => (intro ? "#304ED8" : "#fff")};
  margin-bottom: 64px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const MUH2 = styled.h2`
  margin-top: 10px;
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const MUP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const CarouselItem = styled(Carousel.Item)`
  max-height: 90vh;
  display: block;
  width: 98.8vw;
  overflow: hidden;
  vertical-align: middle;
  position: relative;
`;

export const Img = styled.img`
  max-height: 90vh;
  display: block;
  width: 98.8vw;
  filter: brightness(40%);
  z-index: 0;
`;



export const CarouselCaption = styled(Carousel.Caption)`
  position: absolute;
  // margin-top: auto;
  // margin-bottom: auto;
  top: 250px;
  vertical-align: center;
  z-index: 2;
`;

export const CarouselButton = styled(Button)`
  background: #FFE052;
  color: #4A5378;
  border: 0;
  border-radius: 50px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: #5271ff;
    color: #fff;
  }
`;

export const H1 = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 40px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const MyUniBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;