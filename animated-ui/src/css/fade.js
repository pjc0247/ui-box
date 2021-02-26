import { css } from 'styled-components';

export const fadeIn = css`
  animation: fadein 0.5s ease;

  @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
`;
export const fadeInWithDelay = (delay) => `
  animation: fadein 0.5s ease;
  animation-delay: ${delay}s;
  animation-fill-mode: forwards;

  opacity: 0;

  @keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
`;
