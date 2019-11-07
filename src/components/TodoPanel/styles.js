import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        backgroundColor: "#1E90FF",
        width: '100%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'rgb(235, 236, 240)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        bottom: '2%',
    },
    date: {
        alignItems: 'center',
        height: 50,
    },
    textButton: {
        color: '#fff',
        alignSelf: 'center',
    },
    textArea: {
        paddingHorizontal: 10,
    },
    inputTextArea: {
        fontSize: 16,
    },
    input: {
        color: '#000',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#c0c0c0',
    },
    note: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        top: '3%',
    },
});

export default styles;