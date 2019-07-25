import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

// Importação do arquivo de estilos
import styles from '../styles/Styles';

// Componente que será redenrizado na Home
import Home from '../components/Home';

class HomeScreen extends React.Component {
  // Configuração do Header
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: '#FFFFFF',
    headerTitle: 'Tarefas a Fazer',
    headerRight: (
      <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('Tarefa')}>
        <Icon name="plus" size={25} color="white" />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#9400D3',
    },
  });

  // Renderização dos componentes da tela
  render() {
    return (
      <Home />
    );
  }
}

export default HomeScreen;
