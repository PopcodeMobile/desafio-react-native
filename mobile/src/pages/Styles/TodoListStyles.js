import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    appContainer: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f8ff',

    },
    cardView: {
        backgroundColor: '#715FFF',
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        height: 42,
        marginTop: 15,
        marginHorizontal: 100,

        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFF'
    },
    sectionHeader: {
        margin: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        paddingBottom: 20,
        backgroundColor: 'white',
    },
    title: {
        paddingTop: 20,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#023545',
    },
    subTitle: {
        paddingTop: 10,
        paddingLeft: 20,
        fontSize: 18,
    },

    TextIput: {
        borderWidth: 1,
        borderColor: 'black',             
        height: 40,
        borderRadius: 4,
        margin: 15,
    },

    addButton: {
        backgroundColor: '#7189F1',
        borderRadius: 4,
        height: 42,
        marginTop: 15,
        marginHorizontal: 50,

        justifyContent: 'center',
        alignItems: 'center'
    },

    addButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFF'
    },
});