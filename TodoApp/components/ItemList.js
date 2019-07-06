import React from 'react';
import { Button, View, Text } from 'react-native';
import Item from './Item';

const ItemList = (props) => {

    
    const items = props.itList.map(item => {

        if(item.completed && props.completedItems){

            return (
        
                <View key={item.id} style={{ flex: 1, height: 20 }}>
                    <Item 
                        itemText={item.text} 
                        itemDate={item.date}
                        itemElement={item} 
                        removeItem={props.removeItemFromList}
                        
                        showPicker={props.showPicker}
                        isVisible={props.isVisible} 
                        onConfirm={props.onConfirm}
                        onCancel={props.onCancel} 
                        editItemDate={props.editItemDate} 
                        editItemText={props.editItemText}
                        editItemStatus={props.editItemStatus}
    
                        />
                </View>
    
            );

        }

        else if(!item.completed && !props.completedItems) {

            return (
        
                <View key={item.id} style={{ flex: 1, height: 20 }}>
                    <Item 
                        itemText={item.text} 
                        itemDate={item.date}
                        itemElement={item} 
                        removeItem={props.removeItemFromList}
                        
                        showPicker={props.showPicker}
                        isVisible={props.isVisible} 
                        onConfirm={props.onConfirm}
                        onCancel={props.onCancel} 
                        editItemDate={props.editItemDate} 
                        editItemText={props.editItemText}
                        editItemStatus={props.editItemStatus}
    
                        />
                </View>
    
            );

        }

        else return null;

      
    });

    
    return (

        <View style={{ flex: 1, borderWidth:1, alignItems:'center', justifyContent:'center' }}> 
            {items}
            <Button title='Back' onPress={props.toggleItems} />
        </View>

    );
}

export default ItemList;