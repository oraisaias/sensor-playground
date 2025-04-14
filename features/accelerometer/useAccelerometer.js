import { useEffect, useState } from 'react';
import { Accelerometer } from 'expo-sensors';

export default function useAccelerometer(interval = 60) {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Accelerometer.setUpdateInterval(interval);

    const subscription = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });

    return () => {
      subscription && subscription.remove();
    };
  }, [interval]);

  return data;
}
