import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const dummyValue = (label, value) => (
  <View style={styles.valueBox}>
    <Text style={styles.valueLabel}>{label}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);

const SensorCard = ({ title, description, children, values }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <View style={styles.valuesRow}>{values}</View>
    {children}
    <Text style={styles.description}>{description}</Text>
  </View>
);

const LineChartPlaceholder = () => (
  <View style={styles.chartPlaceholder}>
    <Text style={styles.chartText}>[Graph Placeholder]</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sensor Playground</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>🔁 Resume</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>🧹 Clear Graph</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>⏱ 60ms</Text></TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SensorCard
          title="Accelerometer"
          description="Measures linear movement."
          values={[
            dummyValue('X', '0.00'),
            dummyValue('Y', '0.00'),
            dummyValue('Z', '0.00'),
          ]}
        >
          <LineChartPlaceholder />
        </SensorCard>

        <SensorCard
          title="Gyroscope"
          description="Measures rotation."
          values={[
            dummyValue('X', '0.00'),
            dummyValue('Y', '0.00'),
            dummyValue('Z', '0.00'),
          ]}
        />

        <SensorCard
          title="Magnetometer"
          description="Detects magnetic field."
          values={[
            dummyValue('X', '0.00'),
            dummyValue('Y', '0.00'),
            dummyValue('Z', '0.00'),
          ]}
        />

        <SensorCard
          title="Barometer"
          description="Reads atmospheric pressure."
          values={[
            dummyValue('Pressure', '0.00 hPa'),
            dummyValue('Altitude', '0.00 m'),
          ]}
        />

        <SensorCard
          title="Orientation"
          description="Pitch, Roll and Yaw."
          values={[
            dummyValue('Pitch', '0°'),
            dummyValue('Roll', '0°'),
            dummyValue('Yaw', '0°'),
          ]}
        />

        <SensorCard
          title="Proximity"
          description="Detects nearby presence."
          values={[
            dummyValue('Value', '0'),
          ]}
        />

        <SensorCard
          title="Ambient Light"
          description="Measures environmental brightness."
          values={[
            dummyValue('Lux', '0 lx'),
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    padding: 16,
    backgroundColor: '#1f1f1f',
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1f1f1f',
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
  },
  scrollContainer: {
    padding: 12,
  },
  card: {
    backgroundColor: '#181818',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  valuesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 8,
  },
  valueBox: {
    backgroundColor: '#2a2a2a',
    borderRadius: 6,
    padding: 8,
    minWidth: '28%',
    alignItems: 'center',
    marginBottom: 6,
  },
  valueLabel: {
    color: '#aaa',
    fontSize: 12,
  },
  valueText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    color: '#888',
    fontSize: 12,
    marginTop: 6,
  },
  chartPlaceholder: {
    backgroundColor: '#0f0f0f',
    height: 120,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  chartText: {
    color: '#666',
    fontStyle: 'italic',
  },
});