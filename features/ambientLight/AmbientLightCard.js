import React from 'react';
import useAmbientLight from './useAmbientLight';
import SensorCardLayout from '../../shared/components/SensorCardLayout';

export default function AmbientLightCard() {
  const { lux } = useAmbientLight();

  const values = [{ label: 'Lux', value: `${lux} lx` }];
  const description = 'Simulated: measures surrounding light intensity.';

  return (
    <SensorCardLayout
      title="Ambient Light"
      values={values}
      description={description}
    />
  );
}
