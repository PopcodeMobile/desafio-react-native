const INITIAL_STATE = {
    itens: []
};
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_itens') {
        return { ...state, itens: action.payload }
    }
    
    return state;
}