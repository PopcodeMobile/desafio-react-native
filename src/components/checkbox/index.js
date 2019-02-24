// @flow

import React from 'react';

import { Icon } from 'components';

type Props = {
  checked: boolean,
  onPress: () => mixed,
};

const Checkbox = (props: Props) => {
  const possibleNames = {
    checked: 'checkbox',
    unchecked: 'square-outline',
  };
  return (
    <Icon
      {...props}
      name={props.checked ? possibleNames.checked : possibleNames.unchecked}
      onPress={props.onPress}
    />
  );
};

export default Checkbox;
