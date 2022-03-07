import React from 'react';
import { Wrapper, Title } from './About.styles.js';
import TechnologiesIcons from './TechnologiesIcons.js';
const About = () => (
  <Wrapper>
    <Title>About me</Title>
    <p>
      I have been learning JavaScript, CSS, and HTML with ups and downs for 1.5 year - I know what is destructuring and after spending hours in
      documentation I finally know how to do it properly. Currently, I'm learning a framework and my choice is React. <br />
      <br />I have experience with working with people both colleagues and clients so that's why I fit into your team. I am also multi-tasking and
      doing great with new tasks.
    </p>
    <Title>Technologies</Title>
    <TechnologiesIcons />
  </Wrapper>
);

export default About;
