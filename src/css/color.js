import { css } from 'styled-components';

export const ColorTo = (from, to) => `
  @keyframes colorTo {
    from {
      color: ${from};
    }
    to {
      color: ${to};
    }
  }
`;
export const BackgroundColorTo = (from, to) => `
  @keyframes backgroundColorTo {
    from {
      background-color: ${from};
    }
    to {
      background-color: ${to};
    }
  }
`;
