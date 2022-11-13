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

function DataVisualisation({uni}){
  const now = 60;

  function setName(name){
    if(name=='smu'){
      return 'Singapore Management University'
    }else if(name == 'ntu'){
      return 'Nanyang Technological University'
    }
    else{
      return 'National University Singapore'
    }
  }
  
  return (
    <DVContainer>
      <ProgressBar animated now={now} label={`${now}%`} />
      <ContentWrapper column={'row'}>
        <Img src={`logos/${uni}_logo.jpg`} />
        <H1>{setName(uni)}</H1>
      </ContentWrapper>
    </DVContainer>
  );
}
  

export default DataVisualisation;
