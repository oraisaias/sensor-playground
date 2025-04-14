import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ControlPanel({ isPaused, onTogglePause, onClear, interval, onChangeInterval }) {
  return (
    <View style={styles.controls}>
      <TouchableOpacity style={styles.button} onPress={onTogglePause}>
        <Text style={styles.buttonText}>{isPaused ? '▶️ Resume' : '⏸ Pause'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onClear}>
        <Text style={styles.buttonText}>🧹 Clear Graph</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onChangeInterval}>
        <Text style={styles.buttonText}>⏱ {interval}ms</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1f1f1f',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
