import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import ColorBox from './components/ColorBox';

export default function App() {
  return (
    <SafeAreaView style={styles.areaView}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colors
        </Text>
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Blue" colorHex="#268bd2" />
        <ColorBox colorName="Magenta" colorHex="#d33682" />
        <ColorBox colorName="Orange" colorHex="#cb4b16" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
