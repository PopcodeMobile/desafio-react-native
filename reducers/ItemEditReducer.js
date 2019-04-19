const INITIAL_STATE = {

    titulo :  '',
    realizada : false,
    cor : '',
    prioridade:0,
    due_date : new Date(),
    isModalVisible: false,
    editType: 0,
}

function stringToDate(_date,_format,_delimiter)
{
            var formatLowerCase=_format.toLowerCase();
            var formatItems= formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            console.log('data: ' + formatedDate )
            return formatedDate;
}
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_titulo') {
        return { ...state, titulo: action.payload }
    }
    if(action.type == 'modifica_realizada') {
        return { ...state, realizada: action.payload }
    }
    if(action.type == 'modifica_cor') {
        return { ...state, cor: action.payload }
    }
    if(action.type == 'modifica_due_date') {
        //date = stringToDate(action.payload,"dd/MM/yyyy","/");
        //console.log(typeof(date))
        return { ...state, due_date: action.payload}
    }
    if(action.type == 'modifica_item') {
        return action.payload 
    }
    if(action.type == 'modifica_prioridade') {
        return { ...state, prioridade: action.payload }
    }
    if(action.type == 'modifica_isModalVisible') {
        return {...state, isModalVisible:action.payload }
    }
    if(action.type == 'modifica_editType') {
        return {...state, editType:action.payload }
    }
    if(action.type == 'modifica_realizada') {
        return {...state, realizada:action.payload }
    }
    return state;
}
