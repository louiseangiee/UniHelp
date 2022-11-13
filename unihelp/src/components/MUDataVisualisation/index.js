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
import { useAuthContext } from "../../hooks/useAuthContext";
import { projectFirestore } from "../../firebase/config";


function DataVisualisation({ uni }) {
  const { user } = useAuthContext();
  const id = 'progress' + user.uid
  const [progress, setProgress] = useState('')

  const unsub = projectFirestore
    .collection("userProgress")
    .doc(id)
    .onSnapshot((doc) => {
      var data = doc.data();
      console.log(data[uni])
      let count = 0
      let total = 0
      let obj = data[uni]
      for (let pro in obj) {
        if (obj[pro].done) {
          count++
          total++
        } else {
          total++
        }
      }
      setProgress(count / total * 100)
    })

  function setName(name) {
    if (name == 'smu') {
      return 'Singapore Management University'
    } else if (name == 'ntu') {
      return 'Nanyang Technological University'
    }
    else {
      return 'National University Singapore'
    }
  }

  return (
    <DVContainer>
      <ProgressBar animated now={progress} label={`${progress}%`} />
      <ContentWrapper column={'row'}>
        <Img src={`logos/${uni}_logo.jpg`} />
        <H1>{setName(uni)}</H1>
      </ContentWrapper>
    </DVContainer>
  );
}


export default DataVisualisation;
