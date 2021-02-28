import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { fadeIn } from '../../css';
import { Space } from '../layout';

const Container = styled.div`
  position: relative;
`;
const Label = styled.span`
  position: absolute;

  transition: all 0.5s ease;

  ${({ focused }) => focused ? `
    top: -25px;
    left: 10px;

    color: black;

    font-size: 16px;
  ` : `
    top: 7px;
    left: 10px;

    color: #999;

    font-size: 12px;
  `}
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputBox = styled.div`
  height: 25px;

  transition: all 0.5s ease;

  ${({ focused }) => focused ? `
    width: calc(40px - 10px);
  ` : `
    width: 40px;
  `}
  ${({ active }) => active ? `
    border-bottom: 2px solid blue;
  ` : `
    border-bottom: 2px solid #dcdcdc;
  `}
`;
const HiddenInput = styled.input`
  width: 0px;
  height: 0px;
  transform: scale(0);
  padding: 0;

  box-sizing: border-box;
`;
const NumberText = styled.div`
  ${({ hasValue }) => hasValue ? `
    ${fadeIn}
  ` : `
  `}
`;

export const CodeInput = ({
  value,
  onChange,
}) => {
  const hiddenInput = useRef();
  const [focused, setFocused] = useState(false);
  const idx = Math.min(5, value.length);

  return (
    <Container
      onClick={() => {
        setFocused(true);
        hiddenInput.current.focus();
      }}
    >
      <Label
        focused={focused || value.length > 0}
      >
        Code
      </Label>
      <InputContainer>
        <HiddenInput
          ref={hiddenInput}
          value={value}
          maxLength={6}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setFocused(false)}
        />
        {[0, 1, 2, 3, 4, 5].map(x => (
          <>
            <InputBox
              focused={focused}
              active={focused && idx === x}
            >
              <NumberText
                hasValue={value.length > x}
              >
                {value[x]}
              </NumberText>
            </InputBox>
            {x !== 5 && (
              <Space
                size={focused ? 12 : 0}
              />
            )}
          </>
        ))}
      </InputContainer>
    </Container>
  );
};
