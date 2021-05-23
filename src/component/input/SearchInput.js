import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as _SearchIcon } from '../../asset/search.svg';
import { fadeIn, fadeInWithDelay, fromTo } from '../../css';
import { BackgroundColorTo, ColorTo } from '../../css/color';
import { Space } from '../layout';

const InputState = {
  Inactive: 'inactive',
  Input: 'input',
  HasResult: 'has_result'
};

const Holder = styled.div`
  position: relative;
`;
const Container = styled.div`
  position: absolute;
  display: inline-block;

  width: 42px;
  height: 42px;

  background: black;

  border-radius: 18px;

  padding: 12px 12px;

  cursor: pointer;
  transition: all 0.5s ease;

  ${({ state }) => {
    return {
      [InputState.Inactive]: `
        top: 0px;
        left: 50px;
      `,
      [InputState.Input]: `
        top: 0px;
        left: 0px;

        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);

        ${fromTo('background-color', 'black', 'white')}
        ${fromTo('width', '42px', '300px')}

        animation:
          background-colorTo 0.5s ease,
          widthTo 0.5s ease;
        animation-delay: 0.4s;
        animation-fill-mode: forwards;
      `,
      [InputState.HasResult]: `
        top: 0px;
        left: 0px;

        background-color: white;
        width: 300px;
        height: 300px;

        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
      `,
    }[state];
  }}
`;
const SearchIcon = styled(_SearchIcon)`
  position: absolute;
  top: 18px;
  left: 18px;

  width: 32px;
  height: 32px;

  color: white;

  transition: all 0.5s ease;

  ${({ state }) => {
    return {
      [InputState.Inactive]: `
      `,
      [InputState.Input]: `
        ${ColorTo('white', 'black')}

        animation: colorTo 0.5s ease;
        animation-delay: 0.4s;
        animation-fill-mode: forwards;
      `,
      [InputState.HasResult]: `
        color: black;
      `,
    }[state];
  }}
`;
const Input = styled.input`
  ${fadeIn}
  
  position: absolute;
  top: 12px;
  left: 72px;

  width: 200px;
  height: 42px;
  font-size: 24px;

  border: none;
  &:focus {
    outline: none;
  }
`;
const ResultTopMargin = styled.div`
  ${fadeIn}

  width: 0px;
  height: 48px;

  border-bottom: 1px solid #dcdcdc;

  margin-bottom: 12px;

  transition: all 0.5s ease;

  ${fromTo('width', '0px', '300px')}
  animation: widthTo 0.5s ease;
  animation-delay: 0.05s;
  animation-fill-mode: forwards;
`;
const ResultItem = styled.div`
  ${({ idx }) => `
    ${fadeInWithDelay(idx * 0.1)}
  `}

  display: flex;
  align-items: center;

  width: calc(100% + 12px);
  height: 48px;

  font-size: 24px;
  font-weight: 500;
  
  margin-left: -12px;
  margin-right: -12px;
  padding-left: 12px;

  transition: all 0.5s ease;

  &:hover {
    background: rgba(157, 217, 255, 0.2);
  }
`;

export const SearchInput = ({
  value,
  onChange,
}) => {
  const inputRef = useRef();
  const [showInput, setShowInput] = useState(false);
  const [state, setState] = useState(InputState.Inactive);

  useEffect(() => {
    if (state === InputState.Input) {
      setTimeout(() => {
        setShowInput(true);
      }, 750);
    }
  }, [state]);
  useEffect(() => {
    if (value.length === 0) return;

    setTimeout(() => {
      setState(InputState.HasResult);
    }, 3000);

    setTimeout(() => {
      setState(InputState.Inactive);
    }, 6000);
  }, [value]);

  const onClick = () => {
    if (state === InputState.Inactive)
      setState(InputState.Input);
  };

  return (
    <Holder>
      <Container
        state={state}
        onClick={onClick}
      >
        <SearchIcon
          src={require('../../asset/search.svg').default}
          state={state}
        />

        {(state !== InputState.Inactive && showInput) && (
          <Input
            autoFocus
            placeholder="Search"
            ref={inputRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
        {state === InputState.HasResult && (
          <>
            <ResultTopMargin />
            {['asdf', 'bsadf', 'werwrw', '5151', 'helo'].map((x, idx) => (
              <ResultItem
                idx={idx}
              >
                {x}
              </ResultItem>
            ))}
          </>
        )}
      </Container>
    </Holder>
  );
};
