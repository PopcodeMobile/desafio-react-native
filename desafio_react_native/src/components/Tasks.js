import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from '../commonStyles';
import Swipeable from 'react-native-swipeable'

export default props => {
    let check = null;
    if (props.doneAt !== null) {
        check = (
            <View style={styles.done}>
                <Icon name='check' size={20}
                    color={commonStyles.colors.secondary} />
            </View>
        );

    } else {
        check = <View style={styles.pending} />
    }
    
    const descStyle = props.doneAt !== null ? { textDecorationLine: 'line-through' } : {};

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={()=> props.toggleTask(props.id)}>
            <View style={styles.checkContainer}>{check}</View>
            </TouchableWithoutFeedback>
            <View>
                <Text style={[styles.description, descStyle]}>{props.desc}</Text>
                <Text style={styles.date}>
                {moment(props.estimatedAt).locale( 'pt-br').format( 'ddd, D [de] MMMM [de] YYYY')}
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
    },
    checkContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    pending: {
        borderWidth: 1,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: '#555',
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center',
    },
    description: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontSize: 15,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,
    }
});
