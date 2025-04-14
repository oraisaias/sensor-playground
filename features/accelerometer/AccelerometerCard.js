import React from 'react';
import useAccelerometer from './useAccelerometer';
import AccelerometerChart from './AccelerometerChart';
import SensorCardLayout from '../../shared/components/SensorCardLayout';

export default function AccelerometerCard() {
  const { x, y, z } = useAccelerometer();

  const values = [
    { label: 'X', value: x.toFixed(2) },
    { label: 'Y', value: y.toFixed(2) },
    { label: 'Z', value: z.toFixed(2) },
  ];

  const description = 'Measures linear movement of the device in 3 axes.';

  return (
    <SensorCardLayout title="Accelerometer" values={values} description={description}>
      <AccelerometerChart />
    </SensorCardLayout>
  );
}
