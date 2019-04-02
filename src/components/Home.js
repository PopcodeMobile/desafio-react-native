import styled, { css } from 'styled-components/native';
import colors from '../util/colors';
import fonts from '../util/fonts';
import React, { Component } from 'react';
import Task from './Task';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as HomeActions from '../store/actions/home';
import * as Animatable from 'react-native-animatable';


class HomePage extends Component {
  state = {
    searchBarView: false,
    tasks: [],
    tasksAsDone: []
  }
  componentWillMount() {
    const { tasks, tasksAsDone } = this.props;
    this.setState({ tasks, tasksAsDone });
    console.log("STATE COMPLETE =>  ",tasks);
  }
  renderItem = ({ item }) => (
    <Task as={Animatable.View}
        animation="bounceInRight"
        duration={1000}    
        item={item} 
    {...this.props} />
  );

  handleSearchBar = () => {
    this.setState({ searchBarView: !this.state.searchBarView })
  }

  changeTextSeacherBar = (name) => {
    const {page,tasks,tasksAsDone} = this.props;
    //console.log('text: ',name);
    if(page == 'all') {
      const newTasks = tasks.filter(task=>(
        task.name.toLowerCase().includes(name.toLowerCase())
        ));
      this.setState({tasks:newTasks});
    }
    else{
      const newTasks = tasksAsDone.filter(task=>(
        task.name.toLowerCase().includes(name.toLowerCase())
        ));
      this.setState({tasksAsDone:newTasks});
    }

  }

  handleNewTask = (createTask,getKey) => {
    this.props.navigation.navigate('NewTask', { createTask,getKey });
  }

render() {
  const { page,  numTaskDone,handlePage, createTask, getKey} = this.props;
  let {tasks, tasksAsDone,searchBarView} = this.state;
  if(!searchBarView){
    tasks = this.props.tasks;
    tasksAsDone = this.props.tasksAsDone;
  }

  return (
    <Root >
      <Header>
        <HeaderContainer>
          <HeaderTitle className="logotipo">Mytasks  </HeaderTitle>
          <HeaderTitle 
            as={Animatable.Text}
            animation="fadeInLeft"
            inactive={page !== 'all'} 
            onPress={() => handlePage('all')}
            >
            All tasks
          <HeaderTitle inactive={page !== 'done'} onPress={() => handlePage('done')}>  ({numTaskDone}) Done</HeaderTitle>
          </HeaderTitle>
        </HeaderContainer>

        <HeaderContainer direction="right">
          <HeaderButton onPress={this.handleSearchBar}>
            <Text><Icon name={this.state.searchBarView ? "chevron-up" : "search"} size={24} /> </Text>
          </HeaderButton>

        </HeaderContainer>
      </Header>
      {this.state.searchBarView && (
        <SearchBar as={Animatable.View} 
        animation="pulse"
        duration={1000}>
          <SearchBarInput 
              placeholder="Digite o nome" 
              onChangeText={this.changeTextSeacherBar}
          />
        </SearchBar>
      )}

      <Content>
        {page === 'all' && (
          <FlatList
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem} />
        )}
        {page === 'done' && (
          <FlatList
            data={tasksAsDone}
            keyExtractor={item => item.id.toString()}
            renderItem={this.renderItem} />
        )}


      </Content>

      <ButtonNewTask onPress={() =>this.handleNewTask(createTask,getKey + 1)}>
        <Text><Icon name="plus" size={26} color={colors.Button1} /> </Text>
      </ButtonNewTask>
    </Root>
  )
}
}
const mapStateToProps = state => ({
  getKey:state.tasks.getKey,
  page: state.tasks.page,
  numTaskDone: state.tasks.numTaskDone,
  tasks: state.tasks.tasks,
  tasksAsDone: state.tasks.tasksAsDone
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(HomeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

//styles----------------------
const Root = styled.View`
  background-color:#fff;
  flex:1;
`;

const Header = styled.View`
  
  flex-direction:row;
  justify-content:space-between;
  padding:10px 15px;
  border-bottom-color:${colors.Borda1};
  border-bottom-width:1px;
  
  
`;
const ButtonNewTask = styled.TouchableOpacity`
  position:absolute;
  padding:12px 10px 9px 13px;
  background-color:#fff;
  border-radius:50;
  bottom:20;
  right:20;
  elevation: 5;
  border-width:1;
  border-color:${colors.Button1};
  
`;
const HeaderContainer = styled.View`
  flex:2;
  flex-direction:column;
  justify-content:space-between;
  ${props => props.direction == "right" && css`
    flex:1;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
  `}
`;

const HeaderButton = styled.TouchableOpacity`
  padding:5px;
  margin-left:10px;
`;

const HeaderTitle = styled.Text`
  font-size:28;
  font-family:${fonts.Roboto.black};
  color:${colors.Text1};
  ${props => props.className == "logotipo" && css`
     color:${colors.Background2}; 
     font-size:16;
     font-weight:bold;
     
  `}
  ${props => props.inactive && css`
     color:${colors.Borda2}; 
     font-size:18;
     font-weight:bold;
  `}
`;
const SearchBar = styled.View`
  background-color:#ddd;
  flex-direction:row;
  align-items:center;
  padding:5px;

`;
const SearchBarInput = styled.TextInput`
  background-color:#fff;
  font-family:${fonts.Roboto.mediumItalic};
  font-size:14px;
  padding:5px 10px;
  border-radius:50;
  flex:1;
  
`;
const Content = styled.ScrollView`
  flex:1;
  padding: 10px;
  background-color:transparent;
  elevation:0;
`;


