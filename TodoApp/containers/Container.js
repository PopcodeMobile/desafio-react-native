import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import DisplayContainer from './DisplayContainer';
import AddContainer from './AddContainer';
import ItemList from '../components/ItemList';

import { 
    StyleSheet, Text, Button, 
    View, Image, TextInput, 
    TouchableOpacity, ScrollView
     } from 'react-native';
     
import {  CheckBox, Card, CardItem } from 'native-base';

class Container extends Component {

    state = {

        itemList: [],

        idCount: 0,

        text: 'Write your to do item!',
        chosenDate: '',
        completed: false,

        activeItems: true,
        completedItems: false,

        isVisible: false, 
        displayItems: false,

    }

    handlePicker = (datetime) => {

        this.setState({ 
            isVisible: false,
            chosenDate: moment(datetime).format('MMM, Do YYYY HH:mm') 
        });

    }

    hidePicker = () => {

        this.setState({ isVisible: false });

    }

    showPicker = () => {

        this.setState({ isVisible: true });

    }

    toggleItems = () => {
        this.setState({ displayItems: !this.state.displayItems });
    }

    handleChangeText = (newText) => {
        this.setState({
            text: newText
        });
    }

    activeItemsPressed = () => {
        this.setState({ activeItems: true, completedItems: false });
    }

    completedItemsPressed = () => {
        this.setState({ activeItems: false, completedItems: true });
    }

    editItemDate = (itemToChange) => {

        let itemListCopy = [...this.state.itemList];
        const index = itemListCopy.indexOf(itemToChange);

        const newDate = this.state.chosenDate;

        if(index !== -1){

            itemListCopy[index].date = newDate;
            this.setState({ itemList:itemListCopy });
        } 
        
    }

    editItemText = (itemToChange, text) => {

        let itemListCopy = [...this.state.itemList];
        const index = itemListCopy.indexOf(itemToChange);

        const newText = text;

        if(index !== -1){

            itemListCopy[index].text = newText;
            this.setState({ itemList:itemListCopy });
        } 



    }


    editItemStatus = (itemToChange) => {

        let itemListCopy = [...this.state.itemList];
        const index = itemListCopy.indexOf(itemToChange);

        if(index !== -1){

            itemListCopy[index].completed = true;
            this.setState({ itemList:itemListCopy });
        } 

        alert('Item moved to completed list!');

    }

    addItemToList = () => {

        const oldIdCount = this.state.idCount;

        const updatedIdCount = oldIdCount+1;

        const newText = this.state.text;

        const newDate = this.state.chosenDate;

        const oldItemList = [...this.state.itemList];

        const objItem = {'id': updatedIdCount, 'text': newText, 'date': newDate, 'completed': false};

        this.setState({ 
            itemList: [...oldItemList, objItem], idCount: updatedIdCount
        });

        alert('Item added!');
        
    }

    removeItemFromList = (element) => {

        let itemListCopy = [...this.state.itemList];
        const index = itemListCopy.indexOf(element);

        if(index !== -1){
            itemListCopy.splice(index, 1);
            this.setState({ itemList:itemListCopy });
        } 

    }

    render () {

        const styles = StyleSheet.create({
            container: {
              height: 115
            },

            text: {
                fontSize: 18,
                color: 'white',
                textAlign: 'center'
            }
        });

        let display = (<DisplayContainer 

                            toggleItems={this.toggleItems} 
                            itemList={this.state.itemList} 

                            activeItems={this.state.activeItems}
                            activeItemsPressed={this.activeItemsPressed}
                            
                            completedItems={this.state.completedItems}
                            completedItemsPressed={this.completedItemsPressed}    

                            />);

        let addContainer = (

            <AddContainer 
            showPicker={this.showPicker}
            isVisible={this.state.isVisible} 
            onConfirm={this.handlePicker}
            onCancel={this.hidePicker} 
            handleChangeText={this.handleChangeText} 
            addItemToList={this.addItemToList} 
            />

        );

        if(this.state.displayItems){
            
            display = 
            
                    <ItemList 
                        itList={this.state.itemList} 
                        toggleItems={this.toggleItems} 
                        removeItemFromList={this.removeItemFromList} 
                        onConfirm={this.handlePicker}
                        editItemDate={this.editItemDate} 
                        editItemText={this.editItemText}
                        editItemStatus={this.editItemStatus}
                        completedItems={this.state.completedItems}

                        />;

                      
                       
            addContainer = null;           
        }

        return (

            <View style={ { flex: 1 } }>

                {display}

               {addContainer}

            </View>

        );
    }

}

export default Container;