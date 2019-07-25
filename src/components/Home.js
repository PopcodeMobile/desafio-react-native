import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome'
import { withNavigation } from 'react-navigation';
import { 
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Alert
} from 'react-native';

// Importação do arquivo de estilos
import styles from '../styles/Styles';

// Função de importação de dados do Firebase
import FireServices from '../controllers/FireServices';

// Importação da função de conclusão
import concluidasController from '../controllers/ConcluidasController';

// Importação da função de remover
import { removeFazer } from '../controllers/RemoveController';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
      navigation: this.props.navigation,
    };
  }

  componentDidMount() {
    FireServices.getDataList('tarefas_a_fazer/', tarefasIn => this.setState({ tarefas: tarefasIn }));
  }

  render() {
    const { tarefas } = this.state;
    const { navigation } = this.state;
    return (
      <ScrollView>
        <View style={styles.espaco01} />
        {
          tarefas && tarefas.map((item, index) => { // eslint-disable-line
            return (
            <View key={index}>
              <View style={styles.container01}>
                <TouchableOpacity style={styles.card} onPress={() => Alert.alert('Descrição', item.descricao)}>
                  <View style={styles.container02}>
                    <View style={styles.container03}>
                      <Text style={styles.textoCard}>{item.nome}</Text>
                      <Text style={styles.texto}>{`Prazo: ${item.prazo}`}</Text>
                    </View>
                    <View style={styles.container03}>
                      <TouchableOpacity>
                        <Icon name="check" size={25} color={"#a6a6a6"} style={styles.iconeCard} onPress={() => concluidasController(item)}/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon name="edit" size={25} color={"#031045"} style={styles.iconeCard} onPress={() => navigation.navigate('Editar', item)}/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon name="remove" size={25} color={"#870202"} style={styles.iconeCard} onPress={() => removeFazer(item)}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.espaco01} />
            </View>
            );
          })
        }
      </ScrollView>
    )
  }
}

HomeComponent.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
};

HomeComponent.defaultProps = {
  navigation: undefined,
};

export default withNavigation(HomeComponent);
