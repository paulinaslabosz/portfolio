import React from 'react';
import styled from 'styled-components';
import photo from '../assets/Pola.jpeg';
const Wrapper = styled.div`
  width: 490px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

const UserPhoto = styled.img`
  border-radius: 40px;
  width: 230px;
  margin-bottom: 15px;
`;

const Name = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 23px;
  color: ${({ theme }) => theme.colors.black};
`;

const Position = styled.h3`
  width: fit-content;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 40px;
`;

const Personal = () => (
  <Wrapper>
    <UserPhoto src={photo} alt="Paulina Słabosz"></UserPhoto>
    <Name>
      Paulina <strong>Słabosz</strong>
    </Name>
    <Position>Junior Frontend Developer</Position>
    <div></div>
  </Wrapper>
);

export default Personal;
