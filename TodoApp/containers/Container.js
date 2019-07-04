import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import DisplayContainer from './DisplayContainer';
import AddContainer from './AddContainer';
import ItemList from '../components/ItemList';

import { 
    StyleSheet, Text, Button, 
    View, Image, TextInput, 
    TouchableOpacity, CheckBox,
    Card, CardItem
     } from 'react-native';

class Container extends Component {

    state = {

        item:{
            text: 'To do item',
            date: '2019-07-03'
        },

        isVisible: false,
        chosenDate: '',
        displayItems: false
        
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

        let display = (<DisplayContainer toggleItems={this.toggleItems} />);

        if(this.state.displayItems){
            display = <ItemList toggleItems={this.toggleItems} />;
        }

        return (

            <View style={ { flex: 1 } }>
               
                {display}

                <AddContainer 
                    showPicker={this.showPicker}
                    isVisible={this.state.isVisible} 
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker} 
                    chosenDate={this.state.chosenDate}/>

                

            </View>

        );
    }

}

export default Container;