import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PalattePreview = ({ handlePress, colorPalette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{colorPalette.paletteName}</Text>
    </TouchableOpacity>
  );
};

export default PalattePreview;
