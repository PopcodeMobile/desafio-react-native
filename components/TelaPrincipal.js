/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { ListItem, Icon, Header } from 'react-native-elements';
import { modificaItens } from '../actions/ItensActions';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import Modal from "react-native-modal";
import EditItem from "./EditItem";
import {  modificaItem, 
          modificaTitulo, 
          modificaCor, 
          modificaDueDate, 
          modificaIsModalVisible, 
          modificaPrioridade, 
          modificaEditType, 
          modificaRealizada
        } from '../actions/ItemEditActions';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuContext
} from 'react-native-popup-menu';
const icon = require('../imgs/todo_icon2.png');
class TelaPrincipal extends Component {
  state = {
    itens : this.props.itens,
    search: '',
    text:'',
  }
  updateSearch = text => {
    this.setState({ text });
  };
  _toggleModal = () => this.props.modificaIsModalVisible(!this.props.isModalVisible);
  naoRealizada(item){
    return !item.realizada;
  }
  foiRealizada(item){
    console.log('Chamou')
    return item.realizada;
  }
  press(l){
    console.log("valor: " + l.realizada);
    let itens = this.state.itens;
    console.log(itens);
    let i = itens.indexOf(l);
    l.realizada = !l.realizada;
    itens[i].realizada = l.realizada;
    this.props.modificaItens(itens); 
    this.setState({itens});
    console.log(this.props.itens);
    
  };
  checked(valor){
    console.log("checked: " + valor);
    return valor;
 }
  componentWillMount(){
    this.props.itens.map((l, i) => (
      console.log("Item: " + l.titulo)
    ))
  }
  dateToString(date){
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    res = dd + '/' + mm + '/' + yyyy;
    return res;
  }
  textDecorationLine(realizada){
    console.log('realizada ' + realizada);
    if(realizada){
      return 'line-through';
    }else{
      return 'none';
    }
  }
  removerItem(l){
    var index = this.props.itens.indexOf(l);
    if (index > -1) {
      this.props.itens.splice(index, 1);
    }
    this.props.modificaItens(this.props.itens);
    this.setState({itens:this.props.itens});
    console.log(this.props.itens);
  }
  renderMenu(l, i){
    return(
      <View key={i}>
      <Menu>
        <MenuTrigger > 
          <Icon
            name='more-vert' />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => this.onPressEdit(l)} text="Editar" />
          <MenuOption onSelect={() => this.removerItem(l)} text="Remover"/>
        </MenuOptions>
      </Menu>
      </View>
    )
  }
  renderItem(tdl, l, i){
    console.log(l);
  
    return(
          <ListItem
            leftIcon={{name:'fiber-manual-record', color:l.cor}}
            key={i}
            title={l.titulo}
            titleStyle={{textDecorationLine: tdl}}
            subtitle= {"Validade: " + l.due_date }
            checkBox={{checked : this.checked(l.realizada), onPress: this.press.bind(this,l)}}
            rightIcon={this.renderMenu(l)}
          />
            
    )
  }
  onPressEdit(item){
    this.props.modificaTitulo(item.titulo);
    this.props.modificaCor(item.cor);
    this.props.modificaPrioridade(item.prioridade);
    this.props.modificaDueDate(item.due_date);
    this.props.modificaRealizada(item.realizada);
    this.props.modificaEditType(0);
    this._toggleModal();

  }
  onPressCreate(){
    this.props.modificaTitulo('');
    this.props.modificaCor('red');
    this.props.modificaPrioridade(1);
    this.props.modificaDueDate(this.dateToString(new Date()));
    this.props.modificaEditType(1);
    this.props.modificaRealizada(false);

    this._toggleModal();

  }
  stringToDate(_date,_format,_delimiter){
            var formatLowerCase=_format.toLowerCase();
            var formatItems= formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            console.log('data: ' + formatedDate )
            return formatedDate;
  }
  renderList(tipo){
    console.log("renderList");
    let list = this.state.itens;
    console.log(list);
    let tdl = 'none';
    if(tipo == 0){
       list = list.filter(this.naoRealizada);
    }else{
      list = list.filter(this.foiRealizada);
      tdl = 'line-through';
    }
    list = list.sort((a, b) => (a.prioridade > b.prioridade) ? 1 : (a.prioridade === b.prioridade) ? ((this.stringToDate(a.due_date,"dd/MM/yyyy","/") > this.stringToDate(b.due_date,"dd/MM/yyyy","/")) ? 1 : -1) : -1 );
    return(
        list.map((l, i) => (
          this.renderItem(tdl, l, i)
        ))
    )

  }
  render() {
    
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<Image source={icon}/>}
          centerComponent={{ text: 'My to do List', style: { color: '#fff' ,fontSize:18} }}
          containerStyle={{backgroundColor:'#00b5ec', paddingTop:-10}}
          />
        
        <MenuProvider>
        
        <ScrollView>
          <Text style={styles.sectionHeader}>Tarefas não realizadas (Falta(m) {this.state.itens.filter(this.naoRealizada).length} tarefa(s))</Text>
          {
              this.renderList(0)
              
          }
          <Text style={styles.sectionHeader}>Tarefas Realizadas</Text>
          {
              this.renderList(1)
          }
        
        </ScrollView>
        <Modal isVisible={this.props.isModalVisible} onBackButtonPress={this._toggleModal} onBackdropPress={this._toggleModal} >
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100}}>
                <EditItem />
             </View> 
        </Modal>
        <ActionButton buttonColor="#00b5ec" onPress={()=>this.onPressCreate()}/>
        </MenuProvider>
      </View>
    );
  }
}
const  mapStateToProps = state => (
  {
    itens: state.ItensReducer.itens,
    isModalVisible: state.ItemEditReducer.isModalVisible
  }
)
export default connect(mapStateToProps, { modificaItens,
                                          modificaItem, 
                                          modificaTitulo, 
                                          modificaCor, 
                                          modificaDueDate, 
                                          modificaIsModalVisible, 
                                          modificaPrioridade,
                                          modificaEditType,
                                          modificaRealizada })(TelaPrincipal);
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  }
});
