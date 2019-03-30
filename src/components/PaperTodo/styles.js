import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    back:{
        flex: 1,
        backgroundColor: '#fafafa',
    },
    container: {
        flex: 1,
        margin: 20,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    header: {
        height: 50,
        alignItems: 'center',
    },
    buttonContainer: {
        margin: 0.5,
        padding: 5,
        backgroundColor: "purple",
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        alignSelf: 'flex-end',
        justifyContent: 'flex-start',
    },
    textButton: {
        color: '#fff',
        alignSelf: 'center',
    },
    textArea: {
        padding: 10,
    },
    inputTextArea: {
        fontSize: 16,
    },
    input: {
        color: '#6C8FB5',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
    },
    note: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 20,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        flex: 1,
    }
});

export default styles;