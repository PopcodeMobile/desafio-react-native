import React from 'react'
import { StyleSheet, View } from 'react-native'

import RadioGroup from 'react-native-radio-buttons-group'

import TitleSmall from './TitleSamall'

interface ITodoFilter {
  filter: Array<{ label: string, value: string }>,
  onFilter: (value: string) => void
}

export default class TodoFilter extends React.Component<ITodoFilter>{
  render() {
    if (this.props.filter.lenght === 0) {
      return null;
    }
    return <View style={styles.row}>
      <View style={{ flex: 3, alignItems: 'flex-start' }}>
        <TitleSmall title={"Filter"} />
      </View>
      <View style={{ flex: 9, alignItems: 'flex-end' }}>
        <RadioGroup 
          radioButtons={this.props.filter} 
          flexDirection="row"
          onPress={this.onPress}
        />
      </View>
    </View>
  }

  onPress = (value: string) => {
    if (this.props.onFilter !== undefined) {
      this.props.onFilter(value)
    }
  }
}

const styles = StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
  },
})