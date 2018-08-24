import React from 'react'
import { CheckBox, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

import ITodoItem from '../interfaces/ITodoItem'
import TitleSmall from './TitleSamall';

interface IItem {
  title: string,
  checked: boolean,
  onEdit: (title: string) => void,
  onChecked: (title: string, checked: boolean) => void,
}

export default class TodoItem extends React.Component<IItem> {
  
  // @flow
  state: { checked: boolean }

  // @flow
  constructor (props: IItem) {
    super(props)
    this.state = {
      checked: props.checked === undefined ? false : props.checked,
    }
  }

  render() {
    return <View style={table.row}>
      <View style={table.check}>
        <CheckBox 
          title={""} 
          value={this.state.checked}
          onValueChange={this.onChecked}
        /> 
      </View>
      <View style={table.text}>
        <TitleSmall title={this.props.title} /> 
      </View>
      <View style={table.button}>
        <Icon 
          color="blue" 
          name="pencil"
          size={40} 
          type="evilicon" onPress={this.onEdit}
        />
      </View>
    </View>
  }

  onChecked = (value: boolean) => {
    if (this.props.onChecked !== undefined) {
      this.props.onChecked(this.props.title, value)
    }
    this.setState({ checked: value })
  }

  onEdit = () => {
    if (this.props.onEdit !== undefined) {
      this.props.onEdit(this.props.title);
    }
  }
}

const table = StyleSheet.create({
  row: {
    paddingTop: 10,
    paddingBottom: 5,
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d0d0d0',
  },
  check: {
    flex: 1,
    alignSelf: 'center',
    paddingRight: 3,
  },
  text: {
    flex: 9,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
  }, 
  button: {
    flex: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
})