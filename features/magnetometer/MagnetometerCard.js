import React from 'react';
import useMagnetometer from './useMagnetometer';
import SensorCardLayout from '../../shared/components/SensorCardLayout';

export default function MagnetometerCard() {
  const { x, y, z } = useMagnetometer();

  const values = [
    { label: 'X', value: x.toFixed(2) },
    { label: 'Y', value: y.toFixed(2) },
    { label: 'Z', value: z.toFixed(2) },
  ];

  const description = 'Measures the strength and direction of magnetic fields.';

  return (
    <SensorCardLayout
      title="Magnetometer"
      values={values}
      description={description}
    />
  );
}
