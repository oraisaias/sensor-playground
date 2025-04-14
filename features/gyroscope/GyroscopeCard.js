import React from 'react';
import useGyroscope from './useGyroscope';
import SensorCardLayout from '../../shared/components/SensorCardLayout';

export default function GyroscopeCard() {
  const { x, y, z } = useGyroscope();

  const values = [
    { label: 'X', value: x.toFixed(2) },
    { label: 'Y', value: y.toFixed(2) },
    { label: 'Z', value: z.toFixed(2) },
  ];

  const description = 'Measures rotational movement of the device around 3 axes.';

  return (
    <SensorCardLayout
      title="Gyroscope"
      values={values}
      description={description}
    />
  );
}
