import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import todayImage from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles';

export default class Agenda extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage}
                    style={styles.background}>
                        <View style={styles.titleBar}>
                            <Text style={styles.title}>Hoje</Text>
                            <Text style={styles.subtitle}>
                                {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                            </Text>
                        </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <Text>Task One</Text>
                    <Text>Task Two</Text>
                    <Text>Task Three</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
    },
    background: {
        flex: 3,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 50,
        marginBottom: 10,
        marginLeft: 20,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 30,
        marginLeft: 20,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary
    },
    taskContainer: {
        flex: 7,
    }
  });
