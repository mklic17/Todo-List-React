export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action),
        toDo: toDoReducer(state.toDo, action)
    }
}

// Action types: Login, Logout, Registration
function userReducer(state, action) {
    switch (action.type){
        case 'LOGIN':
            return action.username
        case 'LOGOUT':
            return ''
        case 'REGISTRATION':
            return action.username
        default:
            return state;
    }

}

// Action types: CREATE_TODO, TOGGLE_TODO, DELETE_TODO
function toDoReducer(state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newToDo = {
                id: makeid(5),
                title: action.title,
                description: action.description,
                createdBy: action.createdBy,
                createdDate: action.createdDate,
                completedDate: action.completedDate
            }
            return [newToDo, ...state];
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id !== action.id ? todo : {...todo, completedDate: Date.now()})
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

// Source: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   return result;
}
