// @flow
import React from "react";
import { Platform } from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Body,
    Text
} from "native-base";
export default class HeaderNoLeft extends React.Component {
    render() {
        const title = "Hugo's ToDo List";
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon
                                name={
                                    Platform.OS === "ios"
                                        ? "ios-list"
                                        : "md-list"
                                }
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{title}</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Text>
                        Header with noLeft prop, eliminates Left component
                        for Android
                    </Text>
                </Content>
            </Container>
        );
    }
}
