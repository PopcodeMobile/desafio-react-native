import React from 'react'
import { View, Picker } from 'react-native'

import DatePicker from 'react-native-datepicker';

const PickerTodo = (props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Picker
                selectedValue={props.label}
                style={{ height: 50, width: 150, }}
                onValueChange={(itemValue, itemIndex) =>
                    props.setTodoLabel(itemValue)
                }>
                <Picker.Item label="Priority" value="Priority" />
                <Picker.Item label="Normal" value="Normal" />
                <Picker.Item label="No priority" value="No priority" />
            </Picker>

            <DatePicker
                style={{ width: 150, }}
                date={props.date} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="10-07-2019"
                maxDate="01-01-2029"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                }}
                onDateChange={(date) => { props.setTodoDate(date) }}
            />
        </View>
    )
}

export default PickerTodo
