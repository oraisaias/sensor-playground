import { useEffect, useState } from 'react';
import { useSensorContext } from '../../shared/context/SensorContext';

// Proximidad requiere implementación nativa o librería externa.
// Aquí se simula un valor binario como placeholder.

export default function useProximity() {
  const { isPaused } = useSensorContext();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      // Simulación binaria: 0 (lejos), 1 (cerca)
      setValue(Math.random() > 0.85 ? 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return { value };
}
