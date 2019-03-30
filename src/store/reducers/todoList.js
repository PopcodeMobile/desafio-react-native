
const date = new Date();

const INITIAL_STATE = { "todos": [] };

export default function todoList(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'persist/REHYDRATE':
            const payload = (action).payload;
            const shouldHydrate = false; //or true
            const newState = shouldHydrate ? payload.myStore : state;      
            return newState;
        case "NEW_TODO": 
            state = [...state.todos, 
                    {
                            _id: `${(Math.random())}`, 
                            title: action.payload.title, 
                            description: action.payload.description,
                            pendding: false,
                            date_created: `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`,
                            date_due: action.payload.date_due, 
                        }       
                    ];
            return { "todos": state };
        case "MARK_TODO":
            state = state.todos.map(newState => {
                if (newState._id === action.payload._id) {
                    return { ...newState, 
                            pendding: !newState.pendding };
                }
                return { ...newState };
            });
            return { "todos": state };
        case "EDIT_TODO":
            state = state.todos.map(newState => {
                if (newState._id === action.payload._id) {
                    return { 
                        ...newState,
                        title: action.payload.title,
                        description: action.payload.description,
                        date_due: action.payload.date_due 
                    };
                }
                return { ...newState };
            });
            return { "todos": state };
        case "DELETE_TODO":
                state = state.todos.filter(todo => todo._id !== action.payload._id);
            return { "todos": state };
        default:
            return state;
    }
}