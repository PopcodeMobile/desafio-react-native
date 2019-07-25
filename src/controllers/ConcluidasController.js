import firebase from 'firebase';
import { Alert } from 'react-native';

function concluidasController(item) {
  const nome = item.nome;  // eslint-disable-line
  const prazo = item.prazo;  // eslint-disable-line
  const descricao = item.descricao;  // eslint-disable-line

  firebase.database().ref('tarefas_concluidas/').push({ nome, prazo, descricao })
  .then(() => {
    Alert.alert('Tarefa Concluída');
    firebase.database().ref(`tarefas_a_fazer/${item.key}`).remove();
  })
  .catch(() => {
    Alert.alert('Ocorreu um erro', 'Tente novamente');
  })
  return true;
}

export default concluidasController
