import React, { useEffect, useRef, useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import useAccelerometer from './useAccelerometer';

const { width } = Dimensions.get('window');
const MAX_POINTS = 50;
const CHART_HEIGHT = 120;

const getPath = (data, color, height) => {
  if (data.length === 0) return '';
  const stepX = width / MAX_POINTS;
  return data.map((point, i) => {
    const x = i * stepX;
    const y = height / 2 - point * 40;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
};

export default function AccelerometerChart() {
  const { x, y, z } = useAccelerometer();
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const [zData, setZData] = useState([]);

  useEffect(() => {
    setXData((prev) => [...prev.slice(-MAX_POINTS + 1), x]);
    setYData((prev) => [...prev.slice(-MAX_POINTS + 1), y]);
    setZData((prev) => [...prev.slice(-MAX_POINTS + 1), z]);
  }, [x, y, z]);

  return (
    <View style={styles.chartContainer}>
      <Svg width={width - 40} height={CHART_HEIGHT}>
        <Path d={getPath(xData, '#ef4444', CHART_HEIGHT)} stroke="#ef4444" strokeWidth="2" fill="none" />
        <Path d={getPath(yData, '#22c55e', CHART_HEIGHT)} stroke="#22c55e" strokeWidth="2" fill="none" />
        <Path d={getPath(zData, '#3b82f6', CHART_HEIGHT)} stroke="#3b82f6" strokeWidth="2" fill="none" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: '#0f0f0f',
    borderRadius: 6,
    padding: 8,
    marginVertical: 10,
  },
});
