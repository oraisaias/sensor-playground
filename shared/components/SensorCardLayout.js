import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SensorCardLayout = ({ title, values = [], description, children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>

      <View style={styles.valuesRow}>
        {values.map(({ label, value }, idx) => (
          <View key={idx} style={styles.valueBox}>
            <Text style={styles.valueLabel}>{label}</Text>
            <Text style={styles.valueText}>{value}</Text>
          </View>
        ))}
      </View>

      {children}

      {description && (
        <Text style={styles.description}>{description}</Text>
      )}
    </View>
  );
};

export default SensorCardLayout;

const styles = StyleSheet.create({
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
});
