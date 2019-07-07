import React from 'react';
import { Card } from 'react-native-elements';

import { 
    StyleSheet, Text, Button, 
    View, Image, TextInput, 
    TouchableOpacity
     } from 'react-native';

import {CheckBox} from 'native-base'; 

const DisplayContainer = (props) => {

    let leftItems = 0;

    props.itemList.map(item => {
        if(!item.completed && item.id > 0) leftItems++; 
    });


    return(

        

        <View  style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}>

            <Card title='Display Options' containerStyle={{ height: 300, width: 300 }}>


                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 225 }}>
                    
                        <View style={{ width: 60, height: 50, alignItems: 'center', justifyContent:'center' }}>
                            <CheckBox checked={props.activeItems} onPress={props.activeItemsPressed} />
                        </View>
                        
                        <Text>Active Items</Text>

                    </View>  

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width:225 }}>

                        <View style={{ width: 60, height: 50, alignItems: 'center', justifyContent:'center' }}>
                            <CheckBox checked={props.completedItems} onPress={props.completedItemsPressed} />
                        </View>
                    
                        <Text>Completed Items </Text>

                    </View>  

                    <View style={{ alignItems: 'center', justifyContent: 'center', height: 40}}>
                
                        <Text>{leftItems} Items to be completed</Text>  

                    </View> 

                    <View style={{ paddingBottom:0, backgroundColor:'red' }}>

                        <Button title='Display' onPress={props.toggleItems} containerStyle={{ paddingBottom: 0 }}/>

                    </View> 

            </Card>
             
           
        </View>
      

    );


} 

export default DisplayContainer;