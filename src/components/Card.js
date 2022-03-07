import React from 'react';
import Personal from './Personal';
import About from './About';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1070px;
  width: 100%;
  height: 650px;
  background: linear-gradient(180deg, #3d9af1 0%, #4f74f0 100%);
  border-radius: 40px;
  display: flex;
  box-shadow: 0px 0px 28px -17px rgba(66, 68, 90, 1);
`;

const Card = () => (
  <Wrapper>
    <Personal />
    <About />
  </Wrapper>
);

export default Card;
