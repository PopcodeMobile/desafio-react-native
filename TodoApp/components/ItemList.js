import React from 'react';
import { Button, View, Text } from 'react-native';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

const ItemList = (props) => (

    <View style={{ alignItems:'center', justifyContent:'center' }}> 
        <Button title='Back' onPress={props.toggleItems} />
    </View>
    
);

export default ItemList;