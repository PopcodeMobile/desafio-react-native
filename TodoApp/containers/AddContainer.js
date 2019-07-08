import React from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';


import { 
    Text, Button, 
    View, Image, TextInput, 
    TouchableOpacity 
     } from 'react-native';

const AddContainer = (props) => (

    <View style={ { flex: 1, justifyContent: 'space-between' }}>

        <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 70}}>
            <Image source={require('../assets/todoicon.png')}
                        style={{ width: 100, height: 100, borderRadius: 50 }}></Image>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

            <Text>Item: </Text>

            <TextInput
                    style={{height: 20, width: 200, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={props.handleChangeText} maxLength={20}
                />

            <View>

                <TouchableOpacity onPress={props.showPicker}>
                    
                    <Image source={require('../assets/calendar-icon.png')}
                        style={{ width: 30, height: 30 }}></Image>
                
                </TouchableOpacity>

                <DateTimePicker
                    isVisible={props.isVisible}
                    onConfirm={props.onConfirm} 
                    onCancel={props.onCancel}
                    mode= { 'datetime' } />
                    

            </View>

        </View>


        <Button title='Add Items' onPress={props.addItemToList} />
        
    </View>

); 

export default AddContainer;