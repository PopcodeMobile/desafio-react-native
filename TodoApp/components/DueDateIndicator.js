// @flow
import * as React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "native-base";

type Props = {
    dueDate: number
};

type TypeDateInfo = {
    value: number,
    unit: string,
    color: string
};

const handleDateInfo = (dueDate: number): TypeDateInfo => {
    const today: number = new Date().getTime();
    let diff: number = dueDate - today;
    const isOverdue = diff < 0;
    diff = Math.abs(diff);
    if (diff > 2592000000) {
        return {
            value: Math.trunc(diff / 2629800000),
            unit: "mon",
            color: isOverdue ? "#e5001e" : "#4dad4a"
        };
    } else if (diff > 86400000) {
        //> 1 day warning, dueDate too close
        return {
            value: Math.trunc(diff / 86400000),
            unit: "days",
            color: isOverdue ? "#e5001e" : "#4dad4a"
        };
    } else if (diff > 3600000) {
        //> 1 day warning, dueDate too close
        return {
            value: Math.trunc(diff / 3600000),
            unit: "hrs",
            color: isOverdue ? "#e5001e" : "#eb9e3e"
        };
    } else {
        return {
            value: Math.trunc(diff / 60000),
            unit: "min",
            color: isOverdue ? "#e5001e" : "#eb9e3e"
        };
    }
};

export default function DueDateIndicator(props: Props): React.Node {
    const { dueDate } = props;
    const dataInfo = handleDateInfo(dueDate);
    return (
        <View style={[styles.view, { backgroundColor: dataInfo.color }]}>
            <Text style={styles.textValue}>{dataInfo.value}</Text>
            <Text style={styles.textUnit}>{dataInfo.unit}</Text>
        </View>
    );
}

const white = "white";
const styles = StyleSheet.create({
    textUnit: { color: white, fontSize: 8, marginTop: 0 },
    textValue: {
        color: white,
        fontSize: 12,
        marginBottom: -5,
        textAlign: "center"
    },
    view: {
        alignContent: "center",
        alignSelf: "flex-start",
        borderRadius: 3,
        justifyContent: "center",
        paddingBottom: 2,
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 0
    }
});
