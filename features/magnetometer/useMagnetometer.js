import { useEffect, useState } from 'react';
import { Magnetometer } from 'expo-sensors';
import { useSensorContext } from '../../shared/context/SensorContext';

export default function useMagnetometer() {
  const { interval, isPaused } = useSensorContext();
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if (isPaused) return;

    Magnetometer.setUpdateInterval(interval);
    const subscription = Magnetometer.addListener(setData);

    return () => {
      subscription.remove();
    };
  }, [interval, isPaused]);

  return data;
}
