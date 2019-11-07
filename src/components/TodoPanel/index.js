import React from 'react';
import DatePicker from 'react-native-datepicker'
import { Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as allActions from '../../store/actions/todoList';
import { connect } from 'react-redux';

class TodoPanel extends React.Component {
    constructor(props) {
        super(props);
        
        this.prs = (this.props.navigation.state.params.item) ? 
            (this.props.navigation.state.params.item) : ([]);
        
        this.state = {
            title: this.prs.title,
            description: this.prs.description,
            date_due: this.prs.date_due,
        };
    }

    render() {
        return(
            <ScrollView style={styles.note}>
                
                <View style={styles.date}>
                    <DatePicker
                        date={this.state.date_due}
                        mode="date"
                        placeholder="Prazo"
                        format="D/MM/YYYY"
                        confirmBtnText="Confirmar"
                        cancelBtnText="Cancelar"
                        onDateChange={(date_due) => this.setState({ date_due })}
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderRadius: 5,
                            }
                        }}
                    />
                    
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Título'
                        multiline={true}
                        value={this.state.title}
                        onChangeText={(title) => this.setState({ title })}
                    />
                </View>
                
                <View style={styles.textArea}>
                    <TextInput
                        style={styles.inputTextArea}
                        placeholder="Descreva sua tarefa..."
                        numberOfLines={14}
                        multiline={true}
                        value={this.state.description}
                        onChangeText={(description) => this.setState({ description })}
                    />
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={() => (this.prs.title) ? 
                            (this.props.editTodo(this.prs._id, this.state.title, this.state.description, this.state.date_due) &&
                            this.props.navigation.navigate("ListTodos", { item: '' })) :
                            (this.props.newTodo(this.state.title, this.state.description, this.state.date_due) &&
                            this.props.navigation.navigate("ListTodos", { item: [] }))}
                    >
                            <Text style={styles.textButton}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
};

TodoPanel.navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params.item) ? ('Editar tarefa') : ('Criar tarefa'),
    headerStyle: {
        backgroundColor: "#1E90FF",
    },
    headerTintColor: "#fff",
});

const mapDispatchToProps = dispatch => ({
    editTodo: (_id, title, description, date_due) => dispatch(allActions.editTodo(_id, title, description, date_due)),
    newTodo: (title, description, date_due) => dispatch(allActions.newTodo(title, description, date_due)),
});

const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPanel);