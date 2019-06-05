// @flow
import * as React from "react";
import { StyleSheet } from "react-native";
import {
    Content,
    Right,
    Button,
    Left,
    Header,
    Text,
    Body,
    Title
} from "native-base";
import Modal from "react-native-modal";
// @flow
import TodoInput from "./../components/TodoInput";
import type { TodoInputValue, Todo } from "./../types/todoTypes";

type Props = {
    showEditModal: boolean,
    hideEditModal: () => void,
    todo: Todo,
    handleEditTodo: (todo: TodoInputValue) => void
};

export default function EditTodoModal(props: Props): React.Node {
    const { showEditModal, hideEditModal, todo, handleEditTodo } = props;
    const title = "Edit todo item";
    return (
        <Modal
            style={styles.modalView}
            useNativeDriver={true}
            isVisible={showEditModal}
            onBackdropPress={() => hideEditModal()}
            onBackButtonPress={() => hideEditModal()}
        >
            <Header>
                <Left />
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>
                    <Button
                        hasText
                        transparent
                        onPress={() => hideEditModal()}
                    >
                        <Text>Cancel</Text>
                    </Button>
                </Right>
            </Header>
            <Content style={styles.content}>
                <TodoInput
                    handleSubmit={handleEditTodo}
                    todo={todo}
                    action="EDIT"
                />
            </Content>
        </Modal>
    );
}

const white = "white";
const styles = StyleSheet.create({
    content: { paddingLeft: 5, paddingTop: 5 },
    modalView: {
        backgroundColor: white,
        flex: 1,
        marginTop: 300,
        maxHeight: 150
    }
});
