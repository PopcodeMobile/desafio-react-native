import React, { Component } from 'react';
import { Button, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { Card } from 'react-native-elements';
import { CheckBox } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

class Item extends Component {

    state = {

        displayInput: false,
        isVisible: false,
        text: ''

    }

    textChangedHandler = (newText) => {

       this.setState({ text: newText });

    }

    hidePicker = () => {

        this.setState({ isVisible: false });

    }

    showPicker = () => {

        this.setState({ isVisible: true });

    }

   
    render () {

        let fieldType =  <Text style={{ borderWidth:1 }} onPress={() => this.setState({ displayInput:true })}>{this.props.itemText} Due to {this.props.itemDate}</Text>;
    
        if(this.state.displayInput){

            fieldType = (

                <View>

                    <TextInput
                        style={{height: 20, width: 200, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={this.textChangedHandler} defaultValue={this.props.itemElement.text} maxLength={20}/> 
                        
                    <Button title='Confirm' onPress={ () => { this.props.editItemText(this.props.itemElement, this.state.text),  this.setState({ displayInput:false }) } } />

                </View>
                   
            );
        }

        return (

                <View key={this.props.itemElement.id}> 

                   <Card title='Todo Item' image={require('../assets/todoicon.png')} >
                    
                        {fieldType}

                            <View style={{ alignItems:'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                
                                <TouchableOpacity onPress={() => this.props.removeItem(this.props.itemElement)}>
                                        
                                    <Image source={require('../assets/delete-icon.png')}
                                        style={{ width: 20, height: 20 }}></Image>
                                    
                                </TouchableOpacity>
                    
                                <TouchableOpacity onPress={this.showPicker}>
                                    
                                    <Image source={require('../assets/calendar-icon.png')}
                                        style={{ width: 20, height: 20 }}></Image>
                    
                                </TouchableOpacity>
                    
                                <DateTimePicker
                                    isVisible={this.state.isVisible}
                                    onConfirm={this.props.onConfirm}
                                    onHideAfterConfirm={() => this.props.editItemDate(this.props.itemElement)}
                                    onCancel={this.hidePicker}
                                    mode= { 'datetime' } />

                                
                                <View style={{ paddingRight:10 }}>
                                    <CheckBox checked={this.props.itemElement.completed} onPress={() => this.props.editItemStatus(this.props.itemElement)} />
                                </View>
                                

                            </View>

                                
                   </Card>

                </View>

        );

    }

} 

export default Item;

