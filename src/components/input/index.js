// @flow
import React from 'react';

import { TextInput, Text, View } from 'react-native';

import styles from './styles';

type Props = {
  label?: string,
};

const Input = (props: Props) => (
  <View>
    {props.label && <Text style={styles.label}>{props.label}</Text>}
    <TextInput {...props} style={styles.input} />
  </View>
);

Input.defaultProps = {
  label: null,
};

export default Input;
