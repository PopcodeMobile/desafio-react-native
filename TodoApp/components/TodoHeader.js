// @flow
import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
    Header,
    Title,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Text,
    Segment
} from "native-base";

type Props = {
    activeItensTotal: number,
    filter: string,
    setFilter: (filter: string) => void
};

const TodoHeader = (props: Props): React.Node => {
    const title: string = "Hugo's to do list";
    const { filter, setFilter, activeItensTotal } = props;
    return (
        <View>
            <Header>
                <Left>
                    <Icon
                        style={styles.listIcon}
                        type="MaterialCommunityIcons"
                        name={"format-list-checks"}
                    />
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>
                    <Text style={styles.itensLeft}>
                        {`${activeItensTotal} ${
                            activeItensTotal > 1 ? "Itens" : "Item"
                        } left`}
                    </Text>
                </Right>
            </Header>
            <Segment>
                <Button
                    first
                    active={filter === "SHOW_COMPLETED"}
                    onPress={() => setFilter("SHOW_COMPLETED")}
                >
                    <Text>Completed</Text>
                </Button>
                <Button
                    active={filter === "SHOW_ALL"}
                    onPress={() => setFilter("SHOW_ALL")}
                >
                    <Text>All</Text>
                </Button>
                <Button
                    last
                    active={filter === "SHOW_ACTIVE"}
                    onPress={() => setFilter("SHOW_ACTIVE")}
                >
                    <Text>Active</Text>
                </Button>
            </Segment>
        </View>
    );
};

const white = "white";
const styles = StyleSheet.create({
    itensLeft: { color: white, fontSize: 15 },
    // eslint-disable-next-line react-native/no-color-literals
    listIcon: {
        color: white,
        fontSize: 35,
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
});

export default TodoHeader;
