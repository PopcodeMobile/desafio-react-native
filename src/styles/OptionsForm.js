import t from 'tcomb-form-native';
import formStyles from './FormStyles';

const Form = t.form.Form; // eslint-disable-line

const options = {
  fields: {
    nome: {
      label: 'Nome da tarefa',
      placeholder: 'Escolha um nome para sua tarefa',
      error: 'Campo obrigatório',
    },
    prazo: {
      label: 'Prazo',
      placeholder: 'Defina uma data limite para ela ser concluida',
      error: 'Campo obrigatório',
    },
    descricao: {
      label: 'Descrição',
      placeholder: 'Uma breve descrição sobre sua tarefa',
      error: 'Campo obrigatório',
    },
  },
  stylesheet: formStyles(Form),
};

export default options;
