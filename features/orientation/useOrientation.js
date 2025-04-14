import { useEffect, useState } from 'react';
import { DeviceMotion } from 'expo-sensors';
import { useSensorContext } from '../../shared/context/SensorContext';

export default function useOrientation() {
  const { interval, isPaused } = useSensorContext();
  const [data, setData] = useState({ pitch: 0, roll: 0, yaw: 0 });

  useEffect(() => {
    if (isPaused) return;

    DeviceMotion.setUpdateInterval(interval);
    const subscription = DeviceMotion.addListener(({ rotation }) => {
      if (rotation) {
        setData({
          pitch: rotation.beta || 0,
          roll: rotation.gamma || 0,
          yaw: rotation.alpha || 0,
        });
      }
    });

    return () => {
      subscription.remove();
    };
  }, [interval, isPaused]);

  return data;
}
