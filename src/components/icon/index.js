// @flow
import React from 'react';

import { Platform, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const rightIconPrefix = Platform.select({
  ios: 'ios-',
  android: 'md-',
});

type Props = {
  name: string,
  onPress?: () => mixed,
};

const PlatformIcon = (props: Props) => {
  const renderIcon = () => <Icon {...props} name={rightIconPrefix + props.name} />;
  if (props.onPress) {
    return <TouchableOpacity onPress={props.onPress}>{renderIcon()}</TouchableOpacity>;
  }

  return renderIcon();
};

PlatformIcon.defaultProps = {
  onPress: null,
};

export default PlatformIcon;
