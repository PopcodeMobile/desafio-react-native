import React, { Component } from 'react'
import { 
  Dimensions, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import RadioGroup from 'react-native-radio-buttons-group'

import Title from './Title';
import TitleSmall from './TitleSamall';
import TodoFilter from './TodoFilter';
import TodoItem from './TodoItem';
import ITodoItem from "../interfaces/ITodoItem";

export default class TodoList extends Component<{}> {

  cods = 0;
  state: { filter: string, itens: ITodoItem[] }

  constructor(props: {}) {
    super(props)
    this.state = { 
      filter: "all", 
      itens: [{ 
        cod: this.cods++, 
        checked: true, 
        title: "Title for example", 
        description: "Some significative description", 
        deadline: "Maybe in sunday" 
      }] 
    }
  }

  componentWillMount(){
    const addButton = () => {
      return <Icon 
        name="plus" 
        type="evilicon"
        size={40} 
        iconStyle={{ marginRight: 5 }} 
        onPress={this.onNew}/>
    }
    this.props.navigation.setParams({ 'right': addButton })
  }

  render() { 

    const itens = this.state.itens;

    const itensChecked = ((): number => {
      return itens.reduce((acc, curr) => {
        return curr.checked ? acc + 1 : acc;
      }, 0)
    })()
    
    const renderItens = () => {
      if (itens.length === 0) {
        return <Title title={"No item added yet. Add something. :D"} />
      }
      return <View>
        <Title title={"My Todo List"} />
        <TodoFilter 
          filter={[
            { label: "All", value: "all", },
            { label: "Done", value: "done" },
            { label: "To do", value: "todo", },
          ]} 
          onFilter={value => this.setState({ filter: value })}
        />
        <View style={styles.row}>
          <View style={{ flex: 10, alignItems: 'flex-start' }}>
            <TitleSmall title={"Itens done:"} />
          </View>
          <View style={{ flex: 2, alignItems: 'flex-end' }}>
            <TitleSmall title={ itensChecked } />
          </View>
        </View>
        { 
          itens.map((item, index) => {
            const filter = this.state.filter;
            return (filter === 'all')
                || (filter === 'done' && item.checked)
                || (filter === 'todo' && !item.checked)
              ? <TodoItem 
                  key={index}
                  checked={item.checked}
                  title={item.title}
                  onEdit={this.onEdit}
                  onChecked={this.onChecked}
                />
              : null
          })
        }
      </View>
    }

    return <View style={styles.container}>
      <ScrollView>
        { renderItens() }
      </ScrollView>
    </View>
  }

  onNew = () => {
    Actions.newTodo({ cod: this.cods++, onSave: this.onSave })
  }
  
  onEdit = (title: string) => {
    const todoItem = this.state.itens.find(i => {
      return i.title === title;
    })
    if (todoItem !== undefined) {
      Actions.editTodo({ item: todoItem, onSave: this.onSave, onDelete: this.onDelete })
    }
  }

  onSave = (item: ITodoItem) => {
    const oldItens = this.state.itens;
    let oldItem = oldItens.find(i => {
      return i.cod === item.cod;
    })
    if (oldItem === undefined) {
      oldItens.push(item);
    } else { 
      const index = oldItens.indexOf(oldItem)
      oldItens[index] = item;
    }
    this.setState({ itens: oldItens })
  }

  onDelete = (cod: number) => {
    const newItens = this.state.itens.filter(i => {
      return i.cod !== cod
    })
    this.setState({ itens: newItens })
  }

  onChecked = (title: string, check: boolean) => {
    const newItens = this.state.itens;
    newItens.forEach((n, i, a) => {
      if (n.title === title) {
        n.checked = check
      }
    })
    this.setState({ itens: newItens })
  }
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 10,
    paddingBottom: 50,
    backgroundColor: '#f0f0f0',
  },
  row: {
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
  },
})