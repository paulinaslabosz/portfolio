import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 490px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export const UserPhoto = styled.img`
  border-radius: 40px;
  width: 230px;
  margin-bottom: 10px;
`;

export const Name = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin: 15px 0 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Position = styled.h3`
  width: fit-content;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 40px;
`;
