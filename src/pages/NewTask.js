import React, { Component } from 'react';
import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../util/colors';
import fonts from '../util/fonts';
export default class NewTask extends Component {
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
        this.setState({
            newTask: {
                id: this.props.navigation.state.params.getKey,
                name: '',
                date: '',
                category: 'geral',
                done: false,
                creationDate: Date.now
            }
        });
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
    criarTask =() => {
        const createTask = this.props.navigation.state.params.createTask;
        //console.log("RESPONSE => ",getKey) ;
        // const response = await TaskController.createNewTask(this.state.newTask);
        createTask(this.state.newTask);
        
        this.closePage();
    }
    render() {
        const { activeSend } = this.state;
        const { name, date, category } = this.state.newTask;
        return (
            <Container>
                <Row header>
                    <BtnConfirm active={activeSend} onPress={this.criarTask}>
                        <Icon
                            name="check"
                            size={22}
                            color={!activeSend ? colors.Seccess : "#fff"} />
                        <TextBtn style={{ color: !activeSend ? colors.Seccess : "#fff" }}>Criar task</TextBtn>
                    </BtnConfirm>
                    <Icon onPress={this.closePage} name="times" size={22} />
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
    justify-content:space-between;
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
