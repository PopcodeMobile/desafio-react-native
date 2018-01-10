/* @flow */

import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Modal,
  StyleSheet
} from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

type Props = {
  onPressFilter : any,
  onPressCancel : any,
  visibleFilterTaskModal : boolean
};

type State = {
  tagText: string
};

class FilterTaskModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tagText: ''
    }
  }

  tagTextChanged(text: string) {
    this.setState({
      tagText: text
    })
  }

  onPressFilterButton() {
    if (this.state.tagText) {
      this.props.onPressFilter(this.state.tagText);
    } else {
      this.onPressCancelButton();
    }
  };

  onPressCancelButton() {
    this.props.onPressCancel();
    this.setState({
      tagText: ''
    })
  };

  render() {
    const { visibleFilterTaskModal } = this.props;

    return (
      <Modal
      visible={visibleFilterTaskModal}
      transparent
      animationType="fade"
      onRequestClose={()=>{}}
      >
        <View style={styles.container}>

          <CardSection style={{flexDirection: 'column'}}>

            <Text style={styles.titleText}> FILTER TASKS BY TAGS </Text>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.textInput}
                placeholder='YOUR BEST TAG'
                value={this.state.tagText}
                onChangeText={(text) => this.tagTextChanged(text)}
                underlineColorAndroid='rgba(0, 0, 0, 0.2)'
              />
            </View>

            <View style={styles.buttonsContainer}>
              <Button onPress={() => this.onPressFilterButton()}>
                Filter
              </Button>

              <Button onPress={() => this.onPressCancelButton()}>
                Cancel
              </Button>

            </View>
          </CardSection>

        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'relative'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  buttonsContainer: {
    justifyContent: 'center',
    marginTop: 10,
    padding: 5,
    flexDirection: 'row',
    position: 'relative'
  },
  textInput: {
    flex: 1,
    color: 'rgba(0, 0, 0, 0.5)'
  }
});

export default FilterTaskModal;
