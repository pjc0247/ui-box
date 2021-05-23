import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  transition: all 0.5s ease;

  ${({ size }) => `
    width: ${size}px;
    height: ${size}px;
  `}
`;

export const Space = ({
  size,
}) => {
  return (
    <Container
      size={size}
    />
  );
};
