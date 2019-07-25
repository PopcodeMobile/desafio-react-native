import firebase from 'firebase';
import { Alert } from 'react-native';

function removeFazer(item) {
  firebase.database().ref(`tarefas_a_fazer/${item.key}`).remove()
  .then(() => {
    Alert.alert('Tarefa Removida');
  })
  .catch(() => {
    Alert.alert('Ocorreu um erro', 'Tente novamente');
  })
  return true;
}

function removeConcluido(item) {
  firebase.database().ref(`tarefas_concluidas/${item.key}`).remove()
  .then(() => {
    Alert.alert('Tarefa Removida');
  })
  .catch(() => {
    Alert.alert('Ocorreu um erro', 'Tente novamente');
  })
  return true;
}

export {removeFazer, removeConcluido};
