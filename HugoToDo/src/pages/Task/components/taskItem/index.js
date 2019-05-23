import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function taskItem() {
  return (
    <View style={style.contianer}>
      <View>
        <Text>Calendario</Text>
      </View>
      <View>
        <Text>Title</Text>
        <Text>Descricao</Text>
      </View>
      <View>
        <Text>Icon</Text>
      </View>
    </View>
  );
}
