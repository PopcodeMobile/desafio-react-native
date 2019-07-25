import firebase from 'firebase';
import { Alert } from 'react-native';

function criarController({ navigation }) {
  // Pegando os valores do formulário
  const value = this._form1.getValue();  // eslint-disable-line

  // Proteção para o firebase não dar erros para valores nulos
  if (value === null) {
    return false;
  }

  // Atribuição das variáveis para os valores do formulário
  const nome = value.nome;  // eslint-disable-line
  const prazo = value.prazo;  // eslint-disable-line
  const descricao = value.descricao;  // eslint-disable-line

  firebase.database().ref('tarefas_a_fazer/').push({ nome, prazo, descricao })
  .then(() => {
    Alert.alert('Tarefa adicionada');
    navigation.navigate('HomeRoute');
  })
  .catch(() => {
    Alert.alert('Ocorreu um erro', 'Tente novamente');
  });
  
  return true;
}

function editarController({ navigation, param }) {
  // Pegando os valores do formulário
  const value = this._form2.getValue();  // eslint-disable-line
  
  console.log(param);
  // Proteção para o firebase não dar erros para valores nulos
  if (value === null) {
    return false;
  }

  // Atribuição das variáveis para os valores do formulário
  const nome = value.nome;  // eslint-disable-line
  const prazo = value.prazo;  // eslint-disable-line
  const descricao = value.descricao;  // eslint-disable-line

  firebase.database().ref(`tarefas_a_fazer/${param.key}`).set({ nome, prazo, descricao })
  .then(() => {
    Alert.alert('Tarefa alterada');
    navigation.navigate('HomeRoute');
  })
  .catch(() => {
    Alert.alert('Ocorreu um erro', 'Tente novamente');
  });
  
  return true;
}

export { criarController, editarController };
