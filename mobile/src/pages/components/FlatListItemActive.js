import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './Styles/FlatListItemActiveStyles';

const FlatListItemActive = (props) => {
    const { item, toggleTodo, editTodo, removeTodo } = props;
    return (
        <View style={styles.todoItem}>
            <View style={styles.todoItemHeader}>
                <Text style={styles.todoItemName}>{item.text}</Text>
                <Text style={styles.todoItemDate}>{item.date}</Text>
                {item.label === 'No priority' && <Text style={styles.todoItemLabelNoPriority}>{item.label}</Text>}
                {item.label === 'Priority' && <Text style={styles.todoItemLabelPriority}>{item.label}</Text>}
                {item.label === 'Normal' && <Text style={styles.todoItemLabelNormal}>{item.label}</Text>}
            </View>

            <View style={styles.todoItemFooter}>
                <TouchableOpacity
                    style={styles.action}
                    onPress={() => { toggleTodo(item.id) }}>
                    <Image style={styles.img} source={props.done} />
                    <Text>Toggle</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.action}
                    onPress={() => { editTodo(item.id, "text") }} >
                    <Image style={styles.img} source={props.edit} />
                    <Text>edit</Text>
                </TouchableOpacity>
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

export default FlatListItemActive
