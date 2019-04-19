import React,  {Component} from 'react';
import {Text, View,TextInput, Image, StyleSheet, TouchableHighlight, Alert} from 'react-native';
import DatePicker from 'react-native-datepicker'
import RadioGroup from 'react-native-radio-buttons-group';
import { modificaItem, modificaTitulo, modificaCor, modificaDueDate, modificaIsModalVisible, modificaPrioridade} from '../actions/ItemEditActions';
import {modificaItens} from '../actions/ItensActions';
import { connect } from 'react-redux';
class EditItem extends Component{
    constructor(props){
        super(props);
        
        let item = {
            titulo: this.props.titulo,
            realizada:this.props.realizada,
            cor:this.props.cor,
            prioridade:this.props.prioridade,
            due_date:this.props.due_date
            
        }
        console.log('Item');
        console.log(item);
        this.state = {
            index : this.findWithAttr(this.props.itens,'titulo', item.titulo),   
            data: [
                {
                    label: 'Alta',
                    value: {cor: 'red', prioridade:1},
                    selected: this.props.prioridade === 1
                },
                {
                    label: 'Média',
                    value:{cor: 'yellow', prioridade:2},
                    selected: this.props.prioridade === 2
                },
                {
                    label: 'Baixa',
                    value:{cor: 'green', prioridade:3},
                    selected: this.props.prioridade === 3
                }
            ]
            };
      } 
    findWithAttr(array, attr, value) {
        for(var i = 0; i < array.length; i += 1) {
            if(array[i][attr] == value) {
                return i;
            }
        }
        return -1;
    }
    includeWithAttrs(array, attrs, value){
        for(var i = 0; i < attrs.length; i += 1) {
            let res = this.findWithAttr(array, attrs[i], value[attrs[i]]);
            if(res == -1){
                console.log("Valor diferente " + value[attrs[i]])
                return false;
            }
        }
        return true;
    }
    
    onPress = data => {
        this.setState({ data });
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[this.prioridade-1].value;
        console.log("botão selecionado " + selectedButton);
        this.props.modificaCor(selectedButton.cor);
        this.props.modificaPrioridade(selectedButton.prioridade);
    }
    onClickFinalizar(){
        
        
        item = {
            titulo: this.props.titulo,
            realizada:this.props.realizada,
            cor:this.props.cor,
            prioridade:this.props.prioridade,
            due_date:this.props.due_date
            
        }
        console.log('item ');
        console.log(item);
        console.log('itens ');
        console.log(this.props.itens);
        console.log('includes?' + this.props.itens.includes(item))
        if(item.titulo == ""){
            Alert.alert("Erro", "O campo título deve ser preenchido");
        
        }else if(this.includeWithAttrs(this.props.itens, ['titulo','prioridade','due_date'],item)){
            Alert.alert("Erro", "O item já foi adicionado");
        }else{
            if(this.props.editType == '0'){
                console.log('entrou');
                console.log('index: ' + this.state.index);
                this.props.itens[this.state.index] = item;
            }else{
                this.props.itens.push(item);
            }
            this.props.modificaItens(this.props.itens);
            console.log(this.props.itens);
            this.props.modificaIsModalVisible(false);
        }
    }
    getTitulo(){
        if(this.props.editType == 0){
            return(
                <Text style={styles.tituloText}>Editar Item</Text>
            );
        }
        return(
            <Text style={styles.tituloText}>Criar Item</Text>
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={[styles.titulo, {borderTopStartRadius:30, borderTopEndRadius:30}]}>
                    {this.getTitulo()}
                </View>
                <Text style={styles.sectionHeader}>Título</Text>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/office/64/000000/create-new.png"}}/>
                    <TextInput style={styles.inputs}
                        value={this.props.titulo}
                        onChangeText={(titulo) => this.props.modificaTitulo(titulo)}/>
                </View>
                <Text style={styles.sectionHeader}>Data de vencimento</Text>
                <View style={styles.inputContainer}>
                    <DatePicker
                        style={{width: 200}}
                        date={this.props.due_date}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        minDate= {new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 10
                        },
                        dateInput: {
                            marginLeft: 36,
                            borderColor: '#FFFFFF'
                        }
                        }}
                        onDateChange={(date) => {this.props.modificaDueDate(date)}}
                    />
                </View>
                <Text style={styles.sectionHeader}>Prioridade</Text>
                <View style={styles.inputTipo}>
                    <RadioGroup radioButtons={this.state.data} onPress={this.onPress}/>
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickFinalizar()}>
                    <Text style={styles.loginText}>Finalizar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const  mapStateToProps = state => (
    {
        titulo :  state.ItemEditReducer.titulo,
        realizada : state.ItemEditReducer.realizada,
        cor : state.ItemEditReducer.cor,
        due_date :  state.ItemEditReducer.due_date,
        itens: state.ItensReducer.itens,
        prioridade: state.ItemEditReducer.prioridade,
        editType: state.ItemEditReducer.editType,
        
    }
  )
export default connect(mapStateToProps, {   modificaItem, 
                                            modificaTitulo, 
                                            modificaCor, 
                                            modificaDueDate,
                                            modificaIsModalVisible, 
                                            modificaItens,
                                            modificaPrioridade })(EditItem);
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width:300,
      borderRadius:30,

      
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    },
    logo:{
      marginBottom:60
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 16,
        fontWeight: 'bold'
        
      },
    inputTipo: {
      borderBottomColor: 'white',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      marginTop:40,
      flexDirection: 'row',
      alignItems:'center',
    },
    inputContainer: {
        borderBottomColor: '#00b5ec',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    },
    tituloText: {
        fontSize:20,
        color: 'white',
        
    },
    titulo: {
        fontSize:20,
        height:40,
        width:300,
        backgroundColor: '#00b5ec' ,
        alignItems:'center',
        justifyContent: 'center', 
        
        
    },
   
  });