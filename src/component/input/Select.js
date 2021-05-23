import React, { useState } from 'react';
import styled from 'styled-components';
import { fromTo } from '../../css';

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
const SelectedText = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  width: 100%;
  height: 32px;

  animation:
    top2To 0.5s ease,
    opacity2To 0.5s ease;
  animation-delay: 0.05s;
  animation-fill-mode: forwards;

  @keyframes top2To {
    from {
      top: 50px;
    }
    to {
      top: 0px;
    }
  }
  @keyframes opacity2To {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const FlyawayText = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 1;
  width: 100%;
  height: 32px;

  ${fromTo('top', '0px', '-50px')}
  ${fromTo('opacity', '1', '0')}

  animation:
    topTo 0.5s ease,
    opacityTo 0.5s ease;
  animation-delay: 0.05s;
  animation-fill-mode: forwards;
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
  const [prevValue, setPrevValue] = useState('');
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
              setPrevValue(value);
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
        <SelectedText
          key={value}
        >
          {value}
        </SelectedText>
        <FlyawayText
          key={prevValue}
        >
          {prevValue}
        </FlyawayText>
      </SelectBody>
    </Container>
  );
};
