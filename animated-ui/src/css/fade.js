import { css } from 'styled-components';

export const FadeIn = css`
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
