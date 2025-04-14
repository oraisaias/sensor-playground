import { useEffect, useState } from 'react';
import { useSensorContext } from '../../shared/context/SensorContext';

// Nota: Este sensor no está disponible directamente en Expo.
// Simulamos valores de luz para efectos visuales.

export default function useAmbientLight() {
  const { isPaused } = useSensorContext();
  const [lux, setLux] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Simulación de lux (0–1000)
      setLux(parseFloat((Math.random() * 1000).toFixed(2)));
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return { lux };
}
