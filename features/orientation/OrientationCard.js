import React from 'react';
import useOrientation from './useOrientation';
import SensorCardLayout from '../../shared/components/SensorCardLayout';

export default function OrientationCard() {
  const { pitch, roll, yaw } = useOrientation();

  const values = [
    { label: 'Pitch', value: `${pitch.toFixed(2)}°` },
    { label: 'Roll', value: `${roll.toFixed(2)}°` },
    { label: 'Yaw', value: `${yaw.toFixed(2)}°` },
  ];

  const description = 'Describes the device’s orientation in space.';

  return (
    <SensorCardLayout
      title="Orientation"
      values={values}
      description={description}
    />
  );
}
