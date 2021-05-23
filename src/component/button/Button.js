import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;

  background: rgb(157, 217, 255);

  border: none;
  border-radius: 12px;

  padding: 10px 20px;

  cursor: pointer;
  user-select: none;
  transition: all 0.5s ease;

  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.45);
    transform: translateY(-3px);
  }
  &:active {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(0px);
  }
`;

export const Button = ({
  children,
}) => {
  return (
    <Container>
      {children}
    </Container>
  )
};
