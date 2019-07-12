import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    todoItem: {
        borderBottomStartRadius: 25,
        borderTopEndRadius: 25,

        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 3,
        borderColor: '#90EE90',
        backgroundColor: '#90EEB0',
        paddingBottom: 10,
        justifyContent: 'center',
        borderRadius: 4,
        margin: 15,
    },

    todoItemHeader: {
        paddingHorizontal: 15,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,

    },
  
    todoItemName: {
        fontSize: 30,
        color: '#000',
        paddingBottom: 5,
        paddingHorizontal: 10,
        alignSelf: 'center',
    },

    todoItemDate: {
        fontSize: 20,
        color: '#999',
        paddingBottom: 5,
    },

    todoItemFooter: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    action: {
        flexDirection: 'row',
    },

    img: {
        marginRight: 5,
    },

});