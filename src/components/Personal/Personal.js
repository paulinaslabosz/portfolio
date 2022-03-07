import React from 'react';
import { Wrapper, UserPhoto, Name, Position } from './Personal.styles.js';
import photo from '../../assets/Pola.jpeg';
import Contact from './Contact.js';

const Personal = () => (
  <Wrapper>
    <UserPhoto src={photo} alt="Paulina Słabosz"></UserPhoto>
    <Name>
      Paulina <strong>Słabosz</strong>
    </Name>
    <Position>Junior Frontend Developer</Position>
    <Contact />
  </Wrapper>
);

export default Personal;
