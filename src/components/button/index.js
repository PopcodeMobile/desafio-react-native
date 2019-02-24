// @flow

import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type Props = {
  label: string,
  onPress: Function,
  color?: 'primary' | 'info' | 'danger' | 'success' | 'warning' | 'light',
  icon?: boolean,
  children: any,
  style?: any,
  active?: boolean,
  disabled?: boolean,
};

const Button = (props: Props) => {
  const { color, children } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.buttonContainer,
        props.active ? styles.primary : styles[color],
        props.icon && styles.iconButton,
        props.disabled && styles.disabledButton,
        { ...props.style },
      ]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      {props.icon ? (
        <Text style={styles.buttonText}>{children}</Text>
      ) : (
        <Text style={styles.buttonText}>{props.label}</Text>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  color: 'primary',
  icon: false,
  style: {},
  active: false,
  disabled: false,
};

export default Button;
