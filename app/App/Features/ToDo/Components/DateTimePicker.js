import React, { useState } from 'react';
import { View, Platform, Text, TouchableOpacity, Image } from 'react-native';
import { Images } from '../../../Themes';

import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './DateTimePicker.style';

const DTPicker = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');

    if (mode === 'date') {
      const currentDate = selectedValue || new Date();
      setDate(currentDate);
      setMode('time');
      setShow(Platform.OS !== 'ios');
    } else {
      const selectedTime = selectedValue || new Date();
      setTime(selectedTime);
      setShow(Platform.OS === 'ios');
      setMode('date');
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <TouchableOpacity style={styles.touchable} onPress={showDatepicker}>
        <Image source={Images.bell['24px']} style={styles.image} />
        <Text style={styles.textTouchable}>Lembrar-me </Text>
        <Text style={styles.textDateTime}> {formatDate(date, time)}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display='default'
          onChange={onChange}
        />
      )}
    </View>
  );
};

const formatDate = (date, time) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} às ${time.getHours()}:${time.getMinutes()}`;
};

export default DTPicker;
