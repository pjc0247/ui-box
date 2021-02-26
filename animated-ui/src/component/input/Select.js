import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  width: 300px;
  height: 40px;
`;
const SelectBody = styled.div`
  position: absolute;

  width: 300px;
  height: 40px;

  background: white;
  border-radius: 8px;

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);

  transition: all 0.5s ease;

  ${({ focused }) => focused ? `
    left: 0px;
    top: -50px;
  ` : `
    left: 0px;
    top: 0px;
  `}
`;
const ItemContainer = styled.div`
  position: absolute;

  width: 300px;
  max-height: 200px;

  background: white;
  border-radius: 8px;
  overflow: hidden;

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);

  transition: all 0.5s ease;

  ${({ focused }) => focused ? `
    opacity: 1;
    left: 0px;
    top: 5px;
    height: auto;
  ` : `
    opacity: 0;
    left: 0px;
    top: 0px;
    height: 0px;
  `}
`;
const Item = styled.div`
  display: flex;

  width: 100%;
  height: 40px;

  align-items: center;
  justify-content: center;

  transition: all 0.5s ease;

  &:hover {
    background: rgba(157, 217, 255, 0.2);
  }
`;

export const Select = ({
  items,
  value,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <Container
    >
      <ItemContainer
        focused={focused}
      >
        {items.map(x => (
          <Item
            onClick={() => {
              onChange(x);
              setFocused(false);
            }}
          >
            {x}
          </Item>
        ))}
      </ItemContainer>
      <SelectBody
        focused={focused}
        onClick={() => setFocused(true)}
      >
        {value}
      </SelectBody>
    </Container>
  );
};
