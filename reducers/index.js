import { combineReducers } from 'redux';
import ItensReducer from './ItensReducer';
import ItemEditReducer from './ItemEditReducer';
export default combineReducers({
    ItensReducer: ItensReducer,
    ItemEditReducer: ItemEditReducer 
});