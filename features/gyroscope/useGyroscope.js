import { useEffect, useState } from 'react';
import { Gyroscope } from 'expo-sensors';
import { useSensorContext } from '../../shared/context/SensorContext';

export default function useGyroscope() {
  const { interval, isPaused } = useSensorContext();
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if (isPaused) return;

    Gyroscope.setUpdateInterval(interval);
    const subscription = Gyroscope.addListener(setData);

    return () => {
      subscription.remove();
    };
  }, [interval, isPaused]);

  return data;
}
