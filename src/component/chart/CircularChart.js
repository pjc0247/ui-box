import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Align, fadeIn, fadeInWithDelay } from '../../css';

import { useAnimatedValue, useAnimatedValues } from '../../util';

const Container = styled.div`
  position: relative;
`;
const InnerContent = styled.div`
  ${Align.JustifyCenter}
  ${Align.AlignCenter}

  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;

  pointer-events: none;
`;
const InnerText = styled.div`
  ${fadeInWithDelay(0.5)}

  font-size: 27px;
  font-weight: bold;

  margin-top: auto;
  margin-bottom: auto;

  ${({ color = 'black' }) => `
    color: ${color};
  `}
`;
const Path = styled.path`
  pointer-events: all;
  transition: opacity 2.0s ease;

  ${({ active }) => active ? `
  ` : `
    opacity: 0.4;
  `}
`;

export const CircularChart = ({
  chunks = [],
  size = 200,
  width = 8,
}) => {
  const [hoveredIdx, setHoveredIdx] = useState(-1);
  const [_offset, resetOffset] = useAnimatedValue(-45, 45);
  const [radiusOffset, resetRadiusOffset] = useAnimatedValue(0, 10);
  const [values, resetValues] = useAnimatedValues(chunks.map(x => x.value), true);

  let offset = _offset;
  for (let i=0;i<chunks.length;i++) {
    chunks[i].startsAt = offset;
    chunks[i].endsAt = offset + values[i] * (3.6);
    offset += values[i] * (3.6);
  }

  useEffect(() => {
    if (hoveredIdx === -1) return;
    resetRadiusOffset();
  }, [hoveredIdx]);

  return (
    <Container>
      <svg
        width={size}
        height={size}
      >
        {chunks.map((x, idx) => {
          const hasHover = hoveredIdx >= 0;
          const active = hasHover
            ? hoveredIdx === idx
            : true;
          const d = describeArc(
            size / 2,
            size / 2,
            (size / 2) - width + (hasHover
              ? (active ? radiusOffset * 0.5 : -radiusOffset)
              : 0),
            x.startsAt,
            x.endsAt,
          );

          return (
            <Path
              active={active}
              fill="transparent"
              stroke={x.color || '#ff0000'}
              strokeWidth={width}
              d={d}
              onMouseEnter={(e) => setHoveredIdx(idx)}
              onMouseLeave={(e) => setHoveredIdx(-1)}
            />
          );
        })}
      </svg>
      <InnerContent>
        {hoveredIdx >= 0 && (
          <InnerText
            color={chunks[hoveredIdx].color}
          >
            {chunks[hoveredIdx].value}
          </InnerText>
        )}
      </InnerContent>
    </Container>
  );
};

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};
const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  const d = [
    'M', start.x, start.y, 
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');
  return d;       
};
