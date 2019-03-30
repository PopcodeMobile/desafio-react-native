
const date = new Date();

const INITIAL_STATE =  
[{
            "_id": '1',
            "title": 'Lavar a louça',
            "description": 'Lorem Ipsun',
            "date_created": '25/03/2019',
            "date_due": '',
            "pendding": false,    
        },
        {
            "_id": '2',
            "title": 'Pagar o Nubank',
            "description": 'Lorem Ipsun',
            "date_created": '25/03/2019',
            "date_due": '',
            "pendding": false,    
        },
        {
            "_id": '3',
            "title": 'Primeira aula de inglês',
            "description": 'Lorem Ipsun',
            "date_created": '25/03/2019',
            "date_due": '',
            "pendding": false,    
        },
        {
            "_id": '4',
            "title": 'Beber bastante água',
            "description": 'Lorem Ipsun',
            "date_created": '25/03/2019',
            "date_due": '',
            "pendding": true,    
        },
        {
            "_id": '5',
            "title": 'Conseguir um bom emprego',
            "description": 'Lorem Ipsun',
            "date_created": '25/03/2019',
            "date_due": '',
            "pendding": true,    
        },
        {
            "_id": '6',
            "title": 'Sair de casa',
            "description": 'Lorem Ipsun',
            "date_created": '25/03/2019',
            "date_due": '',
            "pendding": true,    
        },
        {
            "_id": '7',
            "title": 'Levar a gata',
            "description": 'Lorem Ipsun',
            "date_created": '25/03/2019',
            "date_due": '',
            "pendding": 1,    
        },
        {
            "_id": '8',
            "title": 'Economizar',
            "description": 'Lorem Ipsun',
            "date_created": '25/03/2019',
            "date_due": '',
            "pendding": false,    
        }
    ];

export default function todoList(state = INITIAL_STATE, action) {
    switch(action.type){
        case "NEW_TODO": 
            return [...state, { 
                _id: (Math.max.apply(Math, state.map(res => res._id)) +1), 
                title: action.payload.title, 
                description: action.payload.description,
                pendding: false,
                date_created: `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`,
                date_due: '',
            }];
        case "MARK_TODO":
            state = state.map(
                todo => 
                    (todo._id === action.payload._id) ?
                    {...todo, pendding: !todo.pendding} :
                    (todo) 
            );
            console.log(state)
            return state;
        case "EDIT_TODO":
            state = state.map(
                todo => 
                    (todo._id === action.payload._id) ?
                    {...todo, title: action.payload.title, description: action.payload.description } :
                    (todo)
            );
            return state;
        case "DELETE_TODO":
            return state.todos.filter(todo => todo._id !== action.payload._id);
        default:
            return state;
    }
}