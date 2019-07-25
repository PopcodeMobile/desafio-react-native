import React from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form-native';
import { withNavigation } from 'react-navigation';
import { 
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';

// Importação do arquivo de estilos
import styles from '../styles/Styles';

// Importação das configurações dos campos
import options from '../styles/OptionsForm';

// Importação da função de cadastro
import { criarController } from '../controllers/TarefaController';

// Declaração do Formulário
const Form = t.form.Form; // eslint-disable-line prefer-destructuring

const Tarefa = t.struct({
  nome: t.String,
  prazo: t.String,
  descricao: t.String,
});

const TarefaComponent = ({ navigation }) => (
  <ScrollView>
    <View style={styles.container05}>
      <View style={styles.espaco01} />
      <Text style={styles.textoTitulo}>Preencha os dados abaixo</Text>
      <View style={styles.espaco01} />
      <View style={styles.espaco01} />
      <View style={styles.formulario}>
        <Form type={Tarefa} ref={c => this._form1 = c} options={options} />
      </View>
      <View style={styles.espaco01} />
      <View style={styles.espaco01} />
      <TouchableOpacity style={styles.botao} onPress={() => criarController({ navigation })}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>
      <View style={styles.espaco01} />
      <View style={styles.espaco01} />
      <View style={styles.espaco01} />
      <View style={styles.espaco01} />
      <View style={styles.espaco01} />
      <View style={styles.espaco01} />
    </View>
  </ScrollView>
);

TarefaComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

TarefaComponent.defaultProps = {
  navigation: undefined,
};

export default withNavigation(TarefaComponent);
