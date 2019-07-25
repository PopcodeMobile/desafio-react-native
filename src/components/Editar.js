import React from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form-native';
import { withNavigation } from 'react-navigation';
import { 
  View,
  TouchableOpacity,
  ScrollView,
  Text
} from 'react-native';

// Importação do arquivo de estilos
import styles from '../styles/Styles';

// Importação das configurações dos campos
import options from '../styles/OptionsForm';

// Importação da função de ateração
import { editarController } from '../controllers/TarefaController';

// Declaração do Formulário
const Form = t.form.Form; // eslint-disable-line prefer-destructuring

const Edicao = t.struct({
  nome: t.String,
  prazo: t.String,
  descricao: t.String,
});

const EditarComponent = ({ navigation }) => {
  const param = navigation.state.params;
  const value = {
    nome: param.nome,
    prazo: param.prazo,
    descricao: param.descricao,
  };
  return (
    <ScrollView>
      <View style={styles.container05}>
        <View style={styles.espaco01} />
        <Text style={styles.textoTitulo}>Altere os dados abaixo</Text>
        <View style={styles.espaco01} />
        <View style={styles.espaco01} />
        <View style={styles.formulario}>
            <Form type={Edicao} ref={d => this._form2 = d} options={options} value={value} />
        </View>
        <View style={styles.espaco01} />
        <View style={styles.espaco01} />
        <TouchableOpacity style={styles.botao} onPress={() => editarController({ navigation, param })}>
            <Text style={styles.textoBotao}>Alterar</Text>
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
};

EditarComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

EditarComponent.defaultProps = {
  navigation: undefined,
};

export default withNavigation(EditarComponent);
