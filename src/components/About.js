import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 736px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
  margin: 0 0 0 auto;
`;

const About = () => (
  <Wrapper>
    <h2>About me</h2>
    <p>
      I have been learning JavaScript, CSS, and HTML with ups and downs for 1.5 year - I know what is destructuring and after spending hours in
      documentation I finally know how to do it properly. Currently, I'm learning a framework and my choice is React. <br />
      <br />I have experience with working with people both colleagues and clients so that's why I fit into your team. I am also multi-tasking and
      doing great with new tasks.
    </p>
    <h2>Technologies</h2>
    <div></div>
  </Wrapper>
);

export default About;
