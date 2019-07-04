import React from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { 
    StyleSheet, Text, Button, 
    View, Image, TextInput, 
    TouchableOpacity, CheckBox,
    Card, CardItem
     } from 'react-native';

const AddContainer = (props) => (

    <View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 200 }}>

            <Text>Item: </Text>

            <TextInput
                    style={{height: 20, width: 200, borderColor: 'gray', borderWidth: 1}}
                    
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

        <Text style={{color: 'green', fontSize: 20}}>{props.chosenDate}</Text>

        <View style={{ alignItems: 'center',  justifyContent: 'center', paddingBottom: 20 }}>

            <View style={{ borderRadius: 30, shadowRadius: 35, shadowOpacity: 0.5, width: 100 }}>

                <Button title='Add Items' style={{ borderRadius: 30 }}/>

            </View>

        </View>

    </View>

); 

export default AddContainer;