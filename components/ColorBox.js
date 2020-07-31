import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, colorHex }) => {
  const boxColor = {
    backgroundColor: colorHex,
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
        {colorName}: {colorHex}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },

  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default ColorBox;
