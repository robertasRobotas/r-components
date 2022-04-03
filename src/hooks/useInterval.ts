import React, { useEffect, useRef, useCallback } from 'react';

export const useInterval = (callback: any, delay: any) => {
  const savedCallbackRef = useRef(callback);

  const intervalIdRef = useRef<any>();

  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  // handle tick
  useEffect(() => {
    const tick = () => {
      savedCallbackRef.current();
    };

    if (delay !== null) {
      intervalIdRef.current = setInterval(tick, delay);
    }

    const id = intervalIdRef.current;
    return () => {
      clearInterval(id);
    };
  }, [delay]);

  // handle unmount
  useEffect(() => {
    const id = intervalIdRef.current;
    return () => {
      clearInterval(id);
    };
  }, []);

  const resetInterval = useCallback(() => {
    clearInterval(intervalIdRef.current);
    setInterval(intervalIdRef.current);
    const tick = () => {
      savedCallbackRef.current();
    };
    intervalIdRef.current = setInterval(tick, delay);
  }, [delay]);

  return resetInterval;
};
