import React from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker"
// import { Container } from './styles';

export default ({ state, setState, date, setDate }) => {
  return (
    <DateTimePickerModal
      isVisible={state}
      mode='datetime'
      date={date}
      display='default'
      onConfirm={dates => {
        setDate(dates)
        setState(false)
      }}
      onCancel={() => setState(false)}
    />
  )
}
