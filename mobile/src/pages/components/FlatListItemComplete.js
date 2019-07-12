import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './Styles/FlatListItemsCompleteStyles';

const FlatListItemComplete = (props) => {
    const { item, removeTodo } = props;
    return (
        <View style={styles.todoItem}>
            <View style={styles.todoItemHeader}>
                <Text style={styles.todoItemName}>{item.text}</Text>
                <Text style={styles.todoItemDate}>{item.date}</Text>
            </View>
            <View style={styles.todoItemFooter}>
                <TouchableOpacity
                    style={styles.action}
                    onPress={() => { removeTodo(item.id) }} >
                    <Image style={styles.img} source={props.garbage} />
                    <Text>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FlatListItemComplete
