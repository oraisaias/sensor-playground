import { useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { useSensorContext } from '../context/SensorContext';

export default function useSensorManager() {
  const { isPaused, interval } = useSensorContext();

  useEffect(() => {
    let subscription;

    if (!isPaused) {
      Accelerometer.setUpdateInterval(interval);
      subscription = Accelerometer.addListener(() => {
        // Aquí puedes centralizar datos si lo decides más adelante
      });
    }

    return () => {
      subscription?.remove();
    };
  }, [isPaused, interval]);
}
