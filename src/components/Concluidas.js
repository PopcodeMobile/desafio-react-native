import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { 
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Alert
} from 'react-native';

// Importação do arquivo de estilos
import styles from '../styles/Styles';

// Importação da função de remover item
import { removeConcluido } from '../controllers/RemoveController';

// Função de importação de dados do Firebase
import FireServices from '../controllers/FireServices';

class ConcluidasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  componentDidMount() {
    FireServices.getDataList('tarefas_concluidas/', tarefasIn => this.setState({ tarefas: tarefasIn }));
  }

  render() {
    const { tarefas } = this.state;
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
                      <Icon name="check" size={25} color={"#008000"} style={styles.iconeCard}/>
                      <TouchableOpacity>
                        <Icon name="remove" size={25} color={"#870202"} style={styles.iconeCard} onPress={() => removeConcluido(item)}/>
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

export default ConcluidasComponent;
