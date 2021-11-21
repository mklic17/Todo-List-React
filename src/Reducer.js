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
        case 'LOGOUT':
            return {
                'username': undefined,
                'access_token': undefined
            }
        case 'REGISTRATION':
            return {
                'username': action.username,
                'access_token': action.access_token
            }
        default:
            return state;
    }
}

// Action types: CREATE_TODO, TOGGLE_TODO, DELETE_TODO, FETCH_POSTS
function toDoReducer(state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newToDo = {
                id: action.id,
                title: action.title,
                description: action.description,
                createdBy: action.createdBy,
                createdDate: action.createdDate,
                completedDate: action.completedDate
            }
            return [newToDo, ...state];
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id !== action.id ? todo : {...todo, completedDate: action.completedDate})
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'FETCH_POSTS':
            return action.toDos;
        default:
            return state;
    }
}