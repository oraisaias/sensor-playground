import React from 'react';
import useBarometer from './useBarometer';
import SensorCardLayout from '../../shared/components/SensorCardLayout';

export default function BarometerCard() {
  const { pressure, relativeAltitude } = useBarometer();

  const values = [
    { label: 'Pressure', value: `${pressure.toFixed(2)} hPa` },
    { label: 'Altitude', value: `${relativeAltitude?.toFixed?.(2) ?? '0.00'} m` },
  ];

  const description = 'Estimates altitude based on atmospheric pressure.';

  return (
    <SensorCardLayout
      title="Barometer"
      values={values}
      description={description}
    />
  );
}
