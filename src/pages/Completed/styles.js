import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #c1dbcf;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {padding: 15},
  showVerticalScrollIndicator: false,
})`
  border-radius: 5px;
  background: #fff;
  height: 300px;
  width: 300px;
  margin-right: 15px;
`;

export const ToDoItem = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  padding: 10px;
`;

export const ToDoText = styled.Text`
  color: #4a4a4a;
  margin-left: 10px;
  font-size: 16px;
`;

export const DeleteButton = styled(RectButton)`
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-self: stretch;
  margin-top: 20px;
`;
