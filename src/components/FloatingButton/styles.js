import { StyleSheet } from "react-native";

const style = StyleSheet.create({
	bigBubble: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-end',
		margin: 22,
		backgroundColor: 'rgb(235, 236, 240)',
		height: 55,
		width: 55,
		borderRadius: 100 / 2,
		position: 'absolute',
		bottom: '0%',
		right: '0%',
	},
});

export default style;