export const fromTo = (name, from, to) => `
  @keyframes ${name}To {
    from {
      ${name}: ${from};
    }
    to {
      ${name}: ${to};
    }
  }
`;