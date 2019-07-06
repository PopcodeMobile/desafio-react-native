import React from 'react';

import { 
    StyleSheet, Text, Button, 
    View, Image, TextInput, 
    TouchableOpacity
     } from 'react-native';

import {CheckBox, Card, CardItem} from 'native-base'; 

const DisplayContainer = (props) => {

    let leftItems = 0;

    props.itemList.map(item => {
        if(!item.completed && item.id > 0) leftItems++; 
    });


    return(

        <View  style={{flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>

            <View style={{ flex:1, width:300, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            
               <View style={{ width: 60, height: 50, alignItems: 'center', justifyContent:'center' }}>
                    <CheckBox checked={props.activeItems} onPress={props.activeItemsPressed} />
               </View>
                
                <Text>Active Items</Text>

            </View>   
                        
            <View style={{ flex:1, width:300, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                <View style={{ width: 60, height: 50, alignItems: 'center', justifyContent:'center' }}>
                    <CheckBox checked={props.completedItems} onPress={props.completedItemsPressed} />
                </View>
            
                <Text>Completed Items </Text>

            </View> 

            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
            
                <Text>{leftItems} Items to be completed</Text>  

            </View>  

            <Button title='Display' onPress={props.toggleItems} style={{ borderRadius: 30 }}/>
    
        </View>
      

    );


} 

export default DisplayContainer;