import styled, { css } from 'styled-components/native';
import React,{Component} from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import colors from '../util/colors';
import fonts from '../util/fonts';
import { bindActionCreators } from 'redux';
import * as HomeActions from '../store/actions/home';
import { TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';


class Task extends Component {
    handleEdit = (item,editTask,deleteTask) => {
        this.props.navigation.navigate('EditTask',{item,editTask,deleteTask});
    }
    render() {
        const { item, playload, handleCheck, selectedItem,editTask,deleteTask} = this.props;
        return (
            <TaskContainer 
                as={Animatable.View} 
                animation={playload.page=='done'?"fadeInRight":"fadeInLeft"}
                selected={playload.itemSelected == item}
            >
                <TaskHeader>
                    <TaskHeaderButtons>
                        <TaskButton active={item.done} onPress={() => handleCheck({ item, ...playload })}>
                            <Icon name="check" size={14} color={item.done ? "#fff" : colors.Borda2} />
                        </TaskButton>
                    </TaskHeaderButtons>

                    <TouchableOpacity delayLongPress={300} onLongPress={() => selectedItem(item)}>
                        <TaskTitle active={item.done}>{item.name}</TaskTitle>
                    </TouchableOpacity>
                    {playload.itemSelected == item && (
                        <TaskButton right onPress={() => this.handleEdit(item,editTask,deleteTask)}>
                            <IconMaterial name="edit" size={20} color={colors.Borda2} />
                        </TaskButton>
                    )}



                </TaskHeader>
                <TaskTags>
                    <Icon name="hashtag" size={16} color="#333333ba" />
                    <Tag>{item.category}</Tag>
                    {!!item.date && (
                        <>
                            <Icon name="calendar" size={16} color="#333333ba" />
                            <Tag info>{item.date}</Tag>
                        </>
                    )}

                </TaskTags>
            </TaskContainer>
        )
    }
}
const mapStateToProps = state => ({
    playload: {
        page: state.tasks.page,
        itemSelected: state.tasks.itemSelected,
        numTaskDone: state.tasks.numTaskDone,
        tasks: state.tasks.tasks,
        tasksAsDone: state.tasks.tasksAsDone
    }
});
const mapDispatchToProps = dispatch =>
    bindActionCreators(HomeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Task);

//STYLES

const TaskContainer = styled.View`
  border-bottom-width:1px;
  border-bottom-color:${colors.Borda1};
  padding:10px 15px;
  ${props => props.selected && css`
    
    border-bottom-width:0;
    border-left-width:5;
    border-left-color:${colors.SelectedTask};
    
  `}
  
`;
const TaskHeader = styled.View`
    flex-direction:row;
    align-items:center;
    position:relative;
`;
const TaskTitle = styled.Text`
    font-family:${fonts.Roboto.lightItalic};
    color:black;
    font-size:18px;
    margin-left:15;
    ${props => props.active && css`
        color:${colors.Seccess};
        text-decoration:line-through;
    `}

`;

const TaskHeaderButtons = styled.View`

`;
const TaskButton = styled.TouchableOpacity`
    padding:8px;
    border-radius:50;
    border-width:1px;
    border-color:${colors.Background};
    ${props => props.active && css`
        border-color:${colors.Seccess};
        background-color:${colors.Seccess};
    `}
    ${props => props.right && css`
        position:absolute;
        right:0;
        top:6;
        border-radius:0;
        border-width:0;
    `}
`;
const TaskTags = styled.View`
    flex-direction:row;
    margin-left:45px;
`;
const Tag = styled.Text`
    color:#333333ba;
    border-radius:25;
    font-family:${fonts.Roboto.light};
    margin-top:-2;
    margin-left:2;
    margin-right:5;
    ${props => props.info && css`
        
    `}
`;
