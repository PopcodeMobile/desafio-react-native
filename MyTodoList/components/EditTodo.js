import React from 'react'
import { 
  Alert, 
  CheckBox, 
  Dimensions, 
  ScrollView, 
  StyleSheet, 
  TextInput, 
  View
} from 'react-native'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

import ITodoItem from '../interfaces/ITodoItem'
import TitleSmall from './TitleSamall'

interface IEdit {
  item: ITodoItem,
  onSave: (item: ITodoItem) => void,
  onDelete: (cod: number) => void,
}

export default class EditTodo extends React.Component<IEdit> {
  
  state: {
    +cod: number,
    checked: boolean,
    title: string,
    description: string,
    deadline: string,
  }

  constructor (props: IEdit) {
    super(props)
    this.state = props.item === undefined 
      ? { cod: NaN, checked: false, title: "no-title", description: "", deadline: "" } 
      : {
        cod: props.item.cod === undefined ? NaN : props.item.cod,
        checked: props.item.checked === undefined ? false : props.item.checked,
        title: props.item.title === undefined ? "no-title" : props.item.title,
        description: props.item.description === undefined ? "" : props.item.description,
        deadline: props.item.deadline === undefined ? "" : props.item.deadline,
      }
  }

  componentWillMount(){

    const renderIcon = (index: number, name: string, callback: () => void) => {
      return <Icon 
        key={index}
        name={name} 
        type="evilicon"
        size={40} 
        iconStyle={{ marginRight: 5 }} 
        onPress={callback}
      />
    }
    const buttons = ((icons: Array<{ name: string, callback: () => void }>) => {
      return icons.map((icon, index) => renderIcon(index, icon.name, icon.callback))
    })([
      { name: 'check', callback: this.onSave },
      { name: 'close-o', callback: this.onDelete },
    ])

    this.props.navigation.setParams({ 'right': buttons })
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
        Alert.alert("No Title", "You must set a Title to edit this item")
        return
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
  onDelete = () => {
    if (this.props.onDelete !== undefined) {

      const confirm = () => {
        this.props.onDelete(this.state.cod);
        Actions.pop();
      }
      Alert.alert("Delete", "You really wants delete this item?", [
        { text: "Nop" }, 
        { text: "Yep", onPress: confirm }
      ])
    }
  }
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f0f0f0',
    padding: 10,
    height: height,
  },
  row: {
    flexDirection: 'row',
  },
})