import React, { useEffect, useState } from 'react';

export const useAnimatedValue = (from, to) => {
  const [value, setValue] = useState(from);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += 1;

      if (p <= 20) return;

      setValue(x => x + (to - x) * 0.06);
      if (p === 160) {
        setValue(to);
        clearInterval(id);
      }
    }, 16);

    return () => clearInterval(id);
  }, [from, to, count]);

  return [value, () => {
    setValue(from);
    setCount((count) => count + 1);
  }];
};
