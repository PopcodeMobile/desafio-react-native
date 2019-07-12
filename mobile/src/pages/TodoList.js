import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as TodoActions } from "../store/redux/todosRedux";
import api from '../services/api';

import styles from './Styles/TodoListStyles';
import PickerTodo from './components/PickerTodo';


class TodoList extends Component {

    state = {
        text: '',
        label: 'Priority',
        date: '11-07-2019',
        visibile: false,
    }

    async componentDidMount() {
        const response = await api.get('/todo')
        response.data.map(todo => {
            const { _id, text, label, date, complete } = todo;
            this.props.addTodo(_id, text, label, date, complete);
        })
    }

    setTodoText = text => {
        this.setState({ text, visibile: false });
    }

    setTodoDate = date => {
        this.setState({ date })
    }

    setTodoLabel = label => {
        this.setState({ label })
    }

    handleTodo = async () => {
        if (this.state.text !== '') {
            const response = await api.post('/todo', this.state);
            const { _id, text, label, date, complete } = response.data;
            this.props.addTodo(_id, text, label, date, complete);
            this.setState({ visibile: true })
        }
    }

    numberItemsNotCompleted = () => this.props.todos.filter(todo => todo.complete === false).length;
    numberItems = () => this.props.todos.length;

    render() {
        return (
            <View style={styles.appContainer}>
                {this.state.visibile &&
                    <View style={styles.cardView}>
                        <Text style={styles.cardText}>Task added :)</Text>
                    </View>}
                <View style={styles.sectionHeader}>
                    <View>
                        <Text style={styles.title} >Add a task</Text>
                        <Text style={styles.subTitle}>{`Left to be completed: ${this.numberItemsNotCompleted()}`}</Text>
                        <Text style={styles.subTitle}>{`Created tasks: ${this.numberItems()}`}</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.TextIput}
                            onChangeText={this.setTodoText}
                            placeholder="type here" />
                        <PickerTodo
                            date={this.state.date}
                            label={this.state.label}
                            setTodoLabel={this.setTodoLabel}
                            setTodoDate={this.setTodoDate}
                        />

                    </View>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => { this.handleTodo() }} >
                        <Text style={styles.addButtonText}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
