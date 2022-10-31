import React from 'react';
import Icon1 from '../../images/dashboard.png';
import Icon2 from '../../images/forum.png';
import Icon3 from '../../images/notepad.png';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>MyUni</ServicesH2>
          <ServicesP>
            Track your progress and view admission data
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Forum</ServicesH2>
          <ServicesP>
            Read others' thoughts about the universities
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Submit Results</ServicesH2>
          <ServicesP>
            Help others' application process with your data
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
