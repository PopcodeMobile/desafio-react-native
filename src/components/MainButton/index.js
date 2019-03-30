import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, View } from 'react-native';
import FAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import style from './styles';

class AddButton extends Component {
	render() {
		return (
			<View>
				<View style={style.bigBubble}>
					<TouchableOpacity
						hitSlop={{
							left: 20,
							right: 20,
							top: 20,
							bottom: 20,
						}}
						onPress={() => {this.props.navigation.navigate("PaperTodo", {item: ''})}}
					>
						<View>
							<FAwesomeIcon
								name="plus"
								size={25}
								color="#FFF"
							/>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default withNavigation(AddButton);