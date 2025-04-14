import React from 'react';
import useProximity from './useProximity';
import SensorCardLayout from '../../shared/components/SensorCardLayout';

export default function ProximityCard() {
  const { value } = useProximity();

  const values = [{ label: 'Value', value: value.toString() }];
  const description = 'Simulated: detects presence of nearby objects.';

  return (
    <SensorCardLayout
      title="Proximity"
      values={values}
      description={description}
    />
  );
}
