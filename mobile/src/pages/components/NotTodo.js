import React from 'react';
import { View, Text } from 'react-native';

import styles from './Styles/NotTodoStyles';

const NotTodo = (props) => (
    <View style={styles.appContainer}>
        <Text style={styles.title}> {props.title} </Text>
    </View>
)

export default NotTodo;