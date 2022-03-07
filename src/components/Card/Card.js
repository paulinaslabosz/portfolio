import React from 'react';
import Personal from '../Personal/Personal.js';
import About from '../About/About.js';
import { Wrapper } from './Card.styles.js';

const Card = () => (
  <Wrapper>
    <Personal />
    <About />
  </Wrapper>
);

export default Card;
