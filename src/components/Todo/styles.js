import { StyleSheet } from 'react-native';

const miniButtons = {
    width: 50,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
};

const miniIcons = {
    margin: 10,
    width: 50,
    borderRadius: 100,
    shadowColor: '#000',
    shadowRadius: 2,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    flat: {
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        flex: 1,
        justifyContent: 'space-around',
    },
    title: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 15,
    },
    titleMark: {
        fontWeight: 'bold',
        color: 'green',
        fontSize: 15,
        textDecorationLine: 'line-through',
    },
    description: {
        marginTop: 10,
        fontSize: 14,
    },
    cardFooter:{
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#f5f5f5',
        margin: 5,
    },
    dates: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        fontSize: 12,
    },
    options: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    edit: miniButtons,
    editIcon: miniIcons,
    delete: miniButtons,
    deleteIcon: miniIcons,
});

export default styles;