import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #c1dbcf;
  padding: 15px;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;
export const Form = styled.View`
  margin-top: 10px;
  flex-direction: row;
  border-bottom-width: 1px;
  padding-bottom: 15px;
  border-color: #c1dbcf;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #fff;
  border-radius: 5px;
  padding: 0 15px;
  border: 1px solid #fff;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingLeft: 10, paddingRight: 10},
  showVerticalScrollIndicator: false,
})`
  border-radius: 5px;
  background: #fff;
  height: 300px;
  width: 330px;
`;

export const ToDoItem = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const ToDoText = styled(RectButton)`
  color: #4a4a4a;
  background: rgba(255, 255, 255, 0.1);
  justify-content: center;
  width: 150px;
  height: 25px;
  align-content: center;
  align-items: center;
  align-self: center;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  border-radius: 5px;
  margin-top: 15px;
  justify-content: center;
  align-self: stretch;
  margin-right: 10px;
`;

export const TabItem = styled(RectButton)`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const TabBox = styled.View`
  width: 155px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const TabText = styled.Text`
  font-size: 13px;
  color: #4a4a4a;
  align-content: center;
`;

export const TabNum = styled.Text`
  font-size: 15px;
  color: #4a4a4a;
  align-content: center;
`;

export const IconButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
  padding: 0 12px;
`;

export const ChangeInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 50px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 0 15px;
  border: 1px solid #fff;
  text-align: center;
`;
