import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 736px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
  margin: auto;
  padding: 0 30px;
  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  position: relative;
  padding-bottom: 8px;
  margin: 25px 0;
  ::before {
    content: '';
    position: absolute;
    width: 30%;
    height: 1px;
    bottom: 0;
    background-color: black;
  }
`;
