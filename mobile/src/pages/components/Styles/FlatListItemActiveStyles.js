import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    todoItem: {
        borderBottomEndRadius: 30,
        borderTopStartRadius: 30,

        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: '#7189F1',
        backgroundColor: '#f0fff0',
        paddingBottom: 10,
        justifyContent: 'center'
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

    todoItemLabelPriority: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'red',
        paddingBottom: 5,
    },

    todoItemLabelNormal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'yellow',
        paddingBottom: 5,
    },

    todoItemLabelNoPriority: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'green',
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