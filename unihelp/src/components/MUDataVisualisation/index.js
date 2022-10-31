import React, { useState } from "react";
import {
  MUContainer,
  MUH1,
  MUWrapper,
  MUCard,
  MUIcon,
  MUH2,
  MUP,
  CarouselItem,
  Img,
  CarouselCaption,
  CarouselButton,
  H1,
  ArrowForward,
  ArrowRight,
  MyUniBtnWrapper,
  DVContainer,
  ContentWrapper,
} from "./MUDVElements";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Column1 } from "../InfoSection/InfoElements";

const DataVisualisation = (
  column,
) => {
  const now = 60;
  return (
    <DVContainer>
      <ProgressBar animated now={now} label={`${now}%`} />
      <ContentWrapper column={'row'}>
        <Img src="logos/ntu_logo.jpg" />
        <H1>School Name</H1>
      </ContentWrapper>
    </DVContainer>
  );
};

export default DataVisualisation;
