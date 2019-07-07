import React from 'react';
import { Button, View, ScrollView } from 'react-native';
import Item from './Item';

const ItemList = (props) => {

    
    const items = props.itList.map(item => {

        if(item.completed && props.completedItems){

            return (
        
                <View key={item.id}>
                    <Item 
                        itemText={item.text} 
                        itemDate={item.date}
                        itemElement={item} 
                        removeItem={props.removeItemFromList}
                        onConfirm={props.onConfirm}
                        editItemDate={props.editItemDate} 
                        editItemText={props.editItemText}
                        editItemStatus={props.editItemStatus}
    
                        />
                </View>
    
            );

        }

        else if(!item.completed && !props.completedItems) {

            return (
        
                <View key={item.id}>
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

       
        <View style={{ flex:1 }}>

            <ScrollView>
            
                {items}

            </ScrollView>

            <Button title='Back' onPress={props.toggleItems} />

        </View>
            
      

    );
}

export default ItemList;