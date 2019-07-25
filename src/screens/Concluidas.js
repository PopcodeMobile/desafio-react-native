import React from 'react';

// Componente que será redenrizado na página Concluidas
import Concluidas from '../components/Concluidas';

class ConcluidasScreen extends React.Component {
  // Configuração do Header
  static navigationOptions = () => ({
    headerTintColor: '#FFFFFF',
    headerTitle: 'Tarefas Concluídas',
    headerStyle: {
      backgroundColor: '#9400D3',
    },
  });

  // Renderização dos componentes da tela
  render() {
    return (
      <Concluidas />
    );
  }
}
export default ConcluidasScreen;
