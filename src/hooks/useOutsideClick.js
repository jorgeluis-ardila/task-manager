import { useEffect, useRef } from 'react';

const useOutsideClick = callback => {
  const ref = useRef();

  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handler);
    return () => {
      window.removeEventListener('mousedown', handler);
    };
  }, [ref, callback]);

  return ref;
};

export { useOutsideClick };
