export default function appReducer(state, action) {
    return {
        user: userReducer(state.user, action)
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


