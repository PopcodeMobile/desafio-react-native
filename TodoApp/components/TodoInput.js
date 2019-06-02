// @flow
import * as React from "react";
import { Platform, StyleSheet } from "react-native";
import { Form, Item, Input, Button, Icon, Label, Text } from "native-base";
import DateTimePicker from "react-native-modal-datetime-picker";
import showToast from "./../utils/toastr";
import type { TodoInputValue } from "./../types/todoTypes";

type Props = {
    handleSubmit: TodoInputValue => void
};

type State = {
    text: string,
    dueDate?: Date,
    isDateTimePickerVisible: boolean
};

class TodoInput extends React.Component<Props, State> {
    state: State = {
        text: "",
        isDateTimePickerVisible: false
    };

    setText(text: string): void {
        this.setState({ text });
    }

    showDateTimePicker = (): void => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = (): void => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = (dueDate: Date): void => {
        this.setState({ dueDate });
        this.hideDateTimePicker();
    };

    handleInputSubmit = (): void => {
        const { text, dueDate } = this.state;
        if (text.length > 2) {
            this.props.handleSubmit({
                text,
                dueDate
            });
            this.setState({ text: "" });
        } else {
            showToast("Please type a todo!", "warning");
        }
    };

    render(): React.Node {
        const labelText: string = "To do";
        const dateNow: Date = new Date();
        const { text, dueDate } = this.state;
        return (
            <Form style={styles.form}>
                <Item floatingLabel style={styles.textItem}>
                    <Label>{labelText}</Label>
                    <Input
                        onChangeText={text => this.setText(text)}
                        value={text}
                    />
                </Item>
                <>
                    <Button transparent onPress={this.showDateTimePicker}>
                        <Icon
                            style={styles.calendarIcon}
                            name={
                                Platform.OS === "ios"
                                    ? "ios-calendar"
                                    : "md-calendar"
                            }
                        />
                    </Button>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                        is24Hour
                        mode="datetime"
                        date={dueDate || dateNow}
                        minimumDate={dateNow}
                    />
                </>
                <Button
                    transparent
                    style={styles.margin20r}
                    onPress={this.handleInputSubmit}
                >
                    <Text style={styles.font20}> ADD </Text>
                </Button>
            </Form>
        );
    }
}

const styles = StyleSheet.create({
    calendarIcon: { fontSize: 30, marginRight: 0 },
    font20: { fontSize: 20 },
    form: { flexDirection: "row" },
    margin20r: { marginRight: -20 },
    textItem: {
        flexGrow: 3,
        marginLeft: -3,
        marginRight: -3,
        marginTop: -10
    }
});

export default TodoInput;
