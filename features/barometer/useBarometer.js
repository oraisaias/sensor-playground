import { useEffect, useState } from 'react';
import { Barometer } from 'expo-sensors';
import { useSensorContext } from '../../shared/context/SensorContext';

export default function useBarometer() {
  const { interval, isPaused } = useSensorContext();
  const [data, setData] = useState({ pressure: 0, relativeAltitude: 0 });

  useEffect(() => {
    if (isPaused) return;

    Barometer.setUpdateInterval(interval);
    const subscription = Barometer.addListener(setData);

    return () => {
      subscription.remove();
    };
  }, [interval, isPaused]);

  return data;
}
