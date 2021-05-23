import React, { useEffect, useState } from 'react';

export const useAnimatedValues = (input, enable = false, options = {}) => {
  const {
    from = 0,
    fuzzy = false,
    sequencial = true,
  } = options;

  const getInitialValues = () => {
    if (fuzzy)
      return new Array(input.length).fill(from).map(x => 50 + (-15 + Math.random() * 30));
    else
      return new Array(input.length).fill(from);
  };
  const [values, setValues] = useState(getInitialValues());
  const [count, setCount] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += 1;

      if (p <= 20) return;

      setValues((values) => values.map((x, idx) => x + (input[idx] - x) * (0.05 * (sequencial ? ((input.length - idx + 1) / input.length) : 1))));
      if (p === 500) { // fixme
        setValues(input);
        clearInterval(id);
      }
    }, 16);

    return () => clearInterval(id);
  }, [enable, count]);

  return [enable ? values : getInitialValues(), () => {
    setValues(getInitialValues());
    setCount((count) => count + 1);
  }];
};
