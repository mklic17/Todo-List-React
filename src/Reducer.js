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

function toDoReducer(state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
            const newToDo = {
                title: action.title, 
                description: action.description,
                createdBy: action.createdBy,
                createdDate: action.createdDate,
                completedDate: action.completedDate
            }
            return [newToDo, ...state];
        case 'TOGGLE_TODO':
        case 'DELETE_TODO':

        default:
            return state;
    }
}


