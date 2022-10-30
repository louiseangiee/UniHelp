import React from 'react';
// import NUSlogo from 'logos/nus_logo.jpg';
// import NTUlogo from 'logos/ntu_logo.jpg';
// import SMUlogo from 'logos/smu_logo.JPG';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const ChooseUni = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Choose A University</ServicesH1>
      <ServicesWrapper>
        <ServicesCard
            to="nus">
          {/* <ServicesIcon src={NUSlogo} /> */}
          <img src={'logos/nus_logo.jpg'} height="160px"/>
          <ServicesH2>NUS</ServicesH2>
          <ServicesP>
            National University of Singapore
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={NTUlogo} /> */}
          <img src={'logos/ntu_logo.jpg'} height="160px"/>
          <ServicesH2>NTU</ServicesH2>
          <ServicesP>
            Nanyang Technological University
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          {/* <ServicesIcon src={SMUlogo} /> */}
          <img src={'logos/smu_logo.jpg'} height="160px"/>
          <ServicesH2>SMU</ServicesH2>
          <ServicesP>
            Singapore Management University
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default ChooseUni;
