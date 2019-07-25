import { StyleSheet, Dimensions } from 'react-native';

const { widthScreen, heightScreen } = Dimensions.get('window');

const styles = StyleSheet.create({
  // Estilo geral da Home e da página Concluidas
  container01: {
    alignItems: 'center',
    height: 100,
  },
  container02: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container03: {
    justifyContent: 'center',
  },
  container04: {
    backgroundColor: '#9400D3',
  },
  container05: {
    alignItems: 'center',
  },
  // Espaço entre os cards das terefas
  espaco01: {
    height: 25,
  },
  // Estilo do card da tarefa
  card: {
    height: '100%',
    width: '90%',
    elevation: 10,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  textoCard: {
    color: '#a6a6a6',
    fontSize: 22,
    fontWeight: 'normal',
    fontStyle: 'italic',
    paddingLeft: 15,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  textoTitulo: {
    color: '#a6a6a6',
    fontSize: 22,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  texto: {
    color: '#a6a6a6',
    fontSize: 13,
    fontWeight: 'normal',
    fontStyle: 'italic',
    paddingLeft: 15,
  },
  iconeCard: {
    paddingRight: 15,
  },
  header: {
    marginRight: 15,
  },
  headerLeft: {
    marginLeft: 15,
  },
  formulario: {
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  botao: {
    width: '60%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9400D3',
    borderRadius: 10,
  },
});

export default styles;
