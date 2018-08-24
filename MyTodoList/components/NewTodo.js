import React from 'react'
import { Alert, CheckBox, Dimensions, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

import ITodoItem from '../interfaces/ITodoItem'
import TitleSmall from './TitleSamall'

// @flow
interface INew { cod: number, onSave: (item: ITodoItem) => void }

export default class NewTodo extends React.Component<INew> {
  
  // @flow
  state: {
    +cod: number,
    checked: boolean,
    title: string,
    description: string,
    deadline: string,
  }

  // @flow
  constructor (props: INew) {
    super(props)
    this.state = {
        cod: props.cod === undefined ? NaN : props.cod,
        checked: false,
        title: "",
        description: "",
        deadline: "",
      }
  }

  componentWillMount () {
    const confirm = () => {
      return <Icon 
        name="check" 
        type="evilicon"
        size={40} 
        iconStyle={{ marginRight: 5 }} 
        onPress={this.onSave}/>
    }
    this.props.navigation.setParams({ 'right': confirm })
  }

  render(){
    return <View style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          <View style={{ flex: 8 }}>
            <TitleSmall title={"Title"} />
          </View>
          <View style={{ flex: 4 }}>
            <View style={styles.row}>
              <View style={{ flex: 3 }}>
                <CheckBox 
                  value={this.state.checked} 
                  onValueChange={value => this.setState({ checked: value }) }
                />
              </View>
              <View style={{ flex: 9 }}>
                <TitleSmall title={"Done"} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.row} >
          <View style={{ flex: 12 }} >
            <TextInput 
              style={{ margin: 0 }}
              value={this.state.title} 
              onChangeText={(value) => this.setState({ title: value }) }
            />
          </View>
        </View>
        <View style={styles.row} >
          <View style={{ flex: 12 }} >
            <TitleSmall title={"Due date"} />
          </View>
        </View>
        <View style={styles.row} >
          <View style={{ flex: 12 }} >
            <TextInput 
              style={{ margin: 0 }} 
              value={this.state.deadline}
              onChangeText={value => this.setState({ deadline: value })}
            />
          </View>
        </View>
        <View style={styles.row} >
          <View style={{ flex: 12 }} >
            <TitleSmall title={"Description"} />
          </View>
        </View>
        <View style={styles.row} >
          <View style={{ flex: 12 }} >
            <TextInput 
              style={{ margin: 0, textAlignVertical: 'top' }}
              multiline={true}
              value={this.state.description} 
              onChangeText={value => this.setState({ description: value })}
            />
          </View>
        </View>
      </ScrollView> 
    </View>
  }

  onSave = () => {
    if (this.props.onSave !== undefined) {

      if (this.state.title === "") {
        Alert.alert("No title", "You must set a Title to add new item");
        return;
      }
      this.props.onSave({ 
        cod: this.state.cod,
        checked: this.state.checked,
        title: this.state.title,
        description: this.state.description,
        deadline: this.state.deadline,
      })
      Actions.pop();
    }
  }
}

const { height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: height - 80,
  },
  row: {
    flexDirection: 'row',
  },
})