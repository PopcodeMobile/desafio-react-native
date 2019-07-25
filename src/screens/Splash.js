import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';

// Importação do arquivo de estilos
import styles from '../styles/Styles';

class SplashScreen extends React.Component {
  // Inicialização do Firebase
  async componentWillMount() {
    const waitDatabase = await firebase.initializeApp({
      apiKey: "AIzaSyAUsWbmQmpgBTJKbQDmx4HKABu2dX0rr50",
      authDomain: "desafio-react-native.firebaseapp.com",
      databaseURL: "https://desafio-react-native.firebaseio.com",
      projectId: "desafio-react-native",
      storageBucket: "",
      messagingSenderId: "11673563654",
      appId: "1:11673563654:web:9b2fb599ff130ac3"
    });
    if (waitDatabase !== null) {
      this.setState({ fb: true });
      // eslint-disable-next-line
      this.props.navigation.navigate('HomeRoute');
    }
  }

  render() {
    return (
      <View style={styles.container04} />
    );
  }
}

export default SplashScreen;
