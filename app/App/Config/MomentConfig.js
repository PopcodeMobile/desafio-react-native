import moment, { months } from 'moment'
import 'moment/locale/pt-br'

const setLanguage = () => {
    moment.locale('pt-br', {
        weekdays: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_')
    })
}

export default { setLanguage }