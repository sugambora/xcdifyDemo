import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function CustomText(props) {
  return (
    <View>
      <Text style={localStyles.text}>{props.children}</Text>
    </View>
  );
}

const localStyles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
