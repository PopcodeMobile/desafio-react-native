import React, { Component } from 'react';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../util/colors';
import fonts from '../util/fonts';

export default class EditTask extends Component {
    state = {
        activeSend: true,
        newTask: {
            id: '',
            name: '',
            date: '',
            category: 'geral',
            done: false,
            creationDate: ''
        }
    }
    componentWillMount() {
        this.setState({ newTask: this.props.navigation.state.params.item });
    }
    setName = value => {
        this.setState({
            newTask: {
                ...this.state.newTask,
                name: value
            }
        });
    }
    setDate = value => {
        this.setState({
            newTask: {
                ...this.state.newTask,
                date: value
            }
        });
    }
    setTag = value => {
        this.setState({
            newTask: {
                ...this.state.newTask,
                category: value
            }
        });
    }
    closePage = () => {
        this.props.navigation.navigate('Home');
    }
    handleEditTask = () => {
        const { editTask } = this.props.navigation.state.params;
        editTask(this.state.newTask);
        this.closePage();
    }
    handleDeleteTask = () => {
        const { deleteTask } = this.props.navigation.state.params;
        deleteTask(this.state.newTask);
        this.closePage();
    }
    render() {
        const { activeSend } = this.state;
        const { name, date, category } = this.state.newTask;
        return (
            <Container>
                <Row header>
                    <BtnConfirm active={activeSend} onPress={this.handleEditTask}>
                        <Icon
                            name="check"
                            size={22}
                            color={!activeSend ? colors.Seccess : "#fff"} />
                        <TextBtn style={{ color: !activeSend ? colors.Seccess : "#fff" }}>Confirmar</TextBtn>
                    </BtnConfirm>
                    <BtnDelete onPress={this.handleDeleteTask}>
                        <Icon
                            name="delete"
                            size={22}
                            color={"#fff"} />
                        <TextBtn style={{ color: "#fff" }}>Deletar</TextBtn>
                    </BtnDelete>
                    <Icon onPress={this.closePage}
                        name="close"
                        size={24}
                        style={BtnClose} />
                </Row>
                <Row>
                    <TextInput returnKeyType="send" value={name} onChangeText={this.setName} placeholder=" Name of task" />
                    <TextInput returnKeyType="send" value={date} onChangeText={this.setDate} placeholder=" Date" />
                    <TextInput returnKeyType="send" value={category} onChangeText={this.setTag} placeholder=" Tag" />
                </Row>


            </Container>

        );
    }
}


const Container = styled.View`
  background-color:#fff;
  width:100%;
  flex:1;
  padding:5px;
  flex-direction:column;
`;
const Row = styled.View`
  padding:10px 5px;
  margin:0px;
  ${props => props.header && css`
    margin-bottom:10px;
    flex-direction:row;
    padding-right:10px;
    justify-content:flex-start;
  `}
  
`;
const BtnConfirm = styled.TouchableOpacity`
    flex-direction:row;
    border-width:1;
    border-color:${colors.Seccess};
    padding:5px 10px;
    border-radius:50;
    ${props => props.active && css`
        background-color:${colors.Seccess};
    `}
    
`;
const BtnDelete = styled.TouchableOpacity`
    flex-direction:row;
    border-width:1;
    border-color:${colors.Red};
    padding:5px 10px;
    border-radius:50;
    background-color:${colors.Red};
    margin-left:10px;

`;
const TextBtn = styled.Text`
    color:${colors.Seccess};
    margin-left:3px;
    font-family:${fonts.Roboto.bold};
    font-size:16px;
    ${props => props.active && css`
        color:#fff;
    `}
`;
const TextInput = styled.TextInput`
    font-family:${fonts.Roboto.lightItalic};
    marginVertical:5;
    font-size:16;
    border-bottom-width:1;
    border-bottom-color:${colors.Borda1};
`;
const BtnClose = {
    position: "absolute",
    right: 10,
    top: 15
}
