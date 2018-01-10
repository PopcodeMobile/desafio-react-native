/* @flow */

import React, { Component } from 'react';
import {
  View,
  Modal,
  StyleSheet
} from 'react-native';

import { Calendar } from 'react-native-calendars';

type Props = {
  isCalendarModalVisible: boolean,
  calendarMarkedDate: string,
  taskDeadlineChanged: any
};


class CalendarModal extends Component<Props> {
  render() {
    const { isCalendarModalVisible, calendarMarkedDate } = this.props;

    return (
      <Modal
        visible={isCalendarModalVisible}
        transparent
        animationType="slide"
        onRequestClose={()=>{}}
      >
        <View style={styles.container}>
          <Calendar
            onDayPress={(deadline) => this.props.taskDeadlineChanged(deadline.dateString)}
            markedDates={{ [calendarMarkedDate]: {selected: true, marked: true} }}
          />
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
    position: 'relative'
  }
});

export default CalendarModal;
