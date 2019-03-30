import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as allActions from '../../store/actions/todoList';
import { connect } from 'react-redux';

class PaperTodo extends React.Component {
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
            <View style={styles.back}>     
                <ScrollView style={styles.container}>
                    <ScrollView style={styles.note}>
                        <View style={styles.header}>
                            <Text>
                                <EvilIcons name="pencil" size={45} />
                            </Text>
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
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder='Data final (ex.:28/03/2019)'
                                multiline={true}
                                value={this.state.date_due}
                                onChangeText={(date_due) => this.setState({ date_due })}
                            />
                        </View>
                        <View style={styles.textArea}>
                            <TextInput
                                style={styles.inputTextArea}
                                placeholder="Qual a tarefa de hoje?"
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
                                <View style={styles.buttonContainer}>
                                    <Text style={styles.textButton}>Salvar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
        )
    }
};

PaperTodo.navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params.item) ? ('Edição') : ('Nova tarefa'),
    headerStyle: {
        backgroundColor: "#584594",
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

export default connect(mapStateToProps, mapDispatchToProps)(PaperTodo);