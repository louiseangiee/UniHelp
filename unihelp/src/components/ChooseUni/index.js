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
} from "./ChooseUniElements";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "../ButtonElements";

const ChooseUni = () => {
  return (
    <MUContainer id="chooseUni">
      <MUH1>Choose A University</MUH1>
      <MUWrapper>
        <MUCard to="nus">
          {/* <ServicesIcon src={NUSlogo} /> */}
          <img src={"logos/nus_logo.jpg"} width="220px" />
        </MUCard>
        <MUCard to="ntu">
          {/* <ServicesIcon src={NTUlogo} /> */}
          <img src={"logos/ntu_logo.jpg"} width="230px" />
        </MUCard>
        <MUCard to="smu">
          {/* <ServicesIcon src={SMUlogo} /> */}
          <img src={"logos/smu_logo.jpg"} width="220px" />
        </MUCard>
      </MUWrapper>
    </MUContainer>
  );
};

// const IntroMyUni = ({ intro }) => {
//   const [hover, setHover] = useState(false);

//   const onHover = () => {
//     setHover(!hover);
//   };
//   return (
//     <MUContainer intro={"intro"}>
//       {/* <MUH1 intro={"intro"}>MyUni Dashboard</MUH1> */}
//       <Carousel fade>
//         <CarouselItem interval={2000}>
//           <Img
//             className="d-block w-100 h-100"
//             src="pictures/myuni-gif-2.gif"
//             alt="First slide"
//           />
//           <CarouselCaption>
//             <H1>Applying for Universities in Singapore?</H1>
//             {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
//           </CarouselCaption>
//         </CarouselItem>
//         <CarouselItem interval={2000}>
//           <Img
//             className="d-block w-100 h-100"
//             src="pictures/myuni-3.jpg"
//             alt="Second slide"
//           />

//           <CarouselCaption>
//             <H1>
//               Struggling to keep track of all the application requirements and
//               pending deadlines?
//             </H1>
//             {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
//           </CarouselCaption>
//         </CarouselItem>
//         <CarouselItem interval={2000}>
//           <Img
//             className="d-block w-100 h-100"
//             src="pictures/myuni-gif-1.gif"
//             alt="Third slide"
//           />
//           <CarouselCaption>
//             <H1>Organize your college applications with UniHelp!</H1>
//             {/* <CarouselButton href="#chooseUni" className="p-3 my-0">Choose A University To Start</CarouselButton> */}
//             <MyUniBtnWrapper>
//             <Button
//               to="chooseUni"
//               smooth={true}
//               duration={500}
//               spy={true}
//               exact="true"
//               offset={-80}
//               primary="true"
//               dark="true"
//               onMouseEnter={onHover}
//               onMouseLeave={onHover}
//             >
//               Choose A University to Start {hover ? <ArrowForward /> : <ArrowRight />}
//             </Button>
//             </MyUniBtnWrapper>
            
//           </CarouselCaption>
//         </CarouselItem>
//       </Carousel>
//     </MUContainer>
//   );
// };

export { ChooseUni };
