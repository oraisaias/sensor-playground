import React, { createContext, useState, useContext, useCallback } from 'react';

const SensorContext = createContext();

export const SensorProvider = ({ children }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [interval, setInterval] = useState(60);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  const changeInterval = useCallback(() => {
    setInterval((prev) => (prev === 60 ? 100 : 60));
  }, []);

  const value = {
    isPaused,
    interval,
    togglePause,
    changeInterval,
    setIsPaused,
    setInterval,
  };

  return (
    <SensorContext.Provider value={value}>
      {children}
    </SensorContext.Provider>
  );
};

export const useSensorContext = () => useContext(SensorContext);
