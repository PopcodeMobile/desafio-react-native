import React, { useState } from 'react';
import { View, Picker, Text, Image } from 'react-native';
import { Images } from '../../../Themes';
import styles from './PriorityPicker.style';

const PriorityPicker = () => {
  const [selectedValue, setSelectedValue] = useState('Selecionar');
  return (
    <View style={styles.container}>
      <Image source={Images.flag['24px']} style={styles.image} />
      <Text style={styles.text}>Prioridade</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label='Selecionar' value='0' />
        <Picker.Item label='Baixa (!)' value='1' />
        <Picker.Item label='Média (!!)' value='2' />
        <Picker.Item label='Alta (!!!)' value='3' />
      </Picker>
    </View>
  );
};

export default PriorityPicker;
