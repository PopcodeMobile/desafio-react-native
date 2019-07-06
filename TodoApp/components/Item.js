import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { CheckBox } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

class Item extends Component {

    state = {

        displayInput: false,
        text: ''

    }

    textChangedHandler = (newText) => {

       this.setState({ text: newText });

    }

    render () {

        let fieldType =  <Text style={{ borderWidth:1 }} onPress={() => this.setState({ displayInput:true })}>{this.props.itemText}  Due to {this.props.itemDate}</Text>;
    
        if(this.state.displayInput){

            fieldType = (

                <View>

                    <TextInput
                        style={{height: 20, width: 200, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={this.textChangedHandler} defaultValue={this.props.itemElement.text} maxLength={10}/> 
                        
                    <Button title='Confirm' onPress={() => this.props.editItemText(this.props.itemElement, this.state.text)} />

                </View>
                   
            );
        }

        return (

            <View key={this.props.itemElement.id} style={{ flex:1, height:20, flexDirection: 'row', justifyContent: "space-between" }}>
                      
                {fieldType}
                       
            <View style={{ width: 50, borderWidth:1, alignItems: 'center' }}>
    
                <TouchableOpacity onPress={() => this.props.removeItem(this.props.itemElement)}>
                        
                    <Image source={require('../assets/delete-icon.png')}
                        style={{ width: 20, height: 20 }}></Image>
                    
                </TouchableOpacity>
    
            </View>
    
            <View style={{ width: 50, alignItems: 'center' }}>
    
                <TouchableOpacity onPress={this.props.showPicker}>
                    
                    <Image source={require('../assets/calendar-icon.png')}
                        style={{ width: 20, height: 20 }}></Image>
    
                </TouchableOpacity>
    
                <DateTimePicker
                    isVisible={this.props.isVisible}
                    onConfirm={() => {this.props.onConfirm, this.props.editItemDate(this.props.itemElement)}}
                    onCancel={this.props.onCancel}
                    mode= { 'datetime' } />

                <View style={{ width: 50, alignItems: 'center' }}>

                    <CheckBox checked={this.props.itemElement.completed} onPress={() => this.props.editItemStatus(this.props.itemElement)} />

                </View>    
                
    
            </View>
    
        </View>

        );

    }

} 

export default Item; 