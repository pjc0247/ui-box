import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { Space } from '../layout';

const Container = styled.div`
`;
const Label = styled.span`
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputBox = styled.div`
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
const Input = styled.input`
  border: none;
  color: transparent;
  text-shadow: 0 0 0 black;

  &:focus {
    outline: none;
  }
`;

export const CodeInput = ({
  value,
  onChange,
}) => {
  const inputs = useRef([]);
  const [focused, setFocused] = useState(false);
  const idx = value.length;

  return (
    <Container
      onClick={() => setFocused(true)}
    >
      <Label>
        Code
      </Label>
      <InputContainer>
        {[0, 1, 2, 3, 4, 5].map(x => (
          <>
            <InputBox
              focused={focused}
              active={focused && idx === x}
            >
              <Input
                ref={(e) => inputs.current[x] = e}
                maxLength={1}
                onChange={(e) => {
                  onChange(value + e.target.value);
                  inputs.current[x + 1].focus();
                }}
              />
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
