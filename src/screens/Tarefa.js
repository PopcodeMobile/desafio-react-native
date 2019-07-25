import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

// Importação do arquivo de estilos
import styles from '../styles/Styles';

// Componente que será redenrizado na página Concluidas
import Tarefa from '../components/Tarefa';

class TarefaScreen extends React.Component {
  // Configuração do Header
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: '#FFFFFF',
    headerTitle: 'Adicionar Tarefa',
    headerLeft: (
      <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.navigate('HomeRoute')}>
        <Icon name="arrow-back" size={25} color="white" />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#9400D3',
    },
  });


  // Renderização dos componentes da tela
  render() {
    return (
      <Tarefa />
    )
  }
}

export default TarefaScreen;
