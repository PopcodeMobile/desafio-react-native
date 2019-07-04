import React from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { 
    StyleSheet, Text, Button, 
    View, Image, TextInput, 
    TouchableOpacity, CheckBox,
    Card, CardItem
     } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const DisplayContainer = (props) => (

    <View  style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        
            <CheckBox checked={false} />

            <Text>Active Items </Text>

        </View>   
                        
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        
            <CheckBox checked={false} />

            <Text>Completed Items </Text>

        </View> 

        <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
        
            <Text>X Items to be completed</Text>

        </View>  

        <Button title='Display' onPress={props.toggleItems} style={{ borderRadius: 30 }}/>
    
    </View>


);

export default DisplayContainer;