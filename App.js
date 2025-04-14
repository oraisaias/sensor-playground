import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { SensorProvider } from './shared/context/SensorContext';
import useSensorManager from './shared/hooks/useSensorManager';
import ControlPanel from './shared/components/ControlPanel';

// Cards
import AccelerometerCard from './features/accelerometer/AccelerometerCard';
import GyroscopeCard from './features/gyroscope/GyroscopeCard';
import MagnetometerCard from './features/magnetometer/MagnetometerCard';
import BarometerCard from './features/barometer/BarometerCard';
import OrientationCard from './features/orientation/OrientationCard';
import ProximityCard from './features/proximity/ProximityCard';
import AmbientLightCard from './features/ambientLight/AmbientLightCard';

export default function App() {
  return (
    <SensorProvider>
      <SensorDashboard />
    </SensorProvider>
  );
}

function SensorDashboard() {
  useSensorManager(); // activa sensores con lógica global

  return (
    <SafeAreaView style={styles.container}>
      <ControlPanelWrapper />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <AccelerometerCard />
        <GyroscopeCard />
        <MagnetometerCard />
        <BarometerCard />
        <OrientationCard />
        <ProximityCard />
        <AmbientLightCard />
      </ScrollView>
    </SafeAreaView>
  );
}

// Separamos el panel para usar el contexto
import { useSensorContext } from './shared/context/SensorContext';

function ControlPanelWrapper() {
  const {
    isPaused,
    interval,
    togglePause,
    changeInterval,
  } = useSensorContext();

  const handleClear = () => {
    // Este botón puede activarse para limpiar gráfica si se necesita
    console.log('Clear action triggered (placeholder)');
  };

  return (
    <ControlPanel
      isPaused={isPaused}
      interval={interval}
      onTogglePause={togglePause}
      onChangeInterval={changeInterval}
      onClear={handleClear}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  scrollContainer: {
    padding: 12,
  },

});