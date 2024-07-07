const user = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USERINFO':
            return {
                ...state,
                ...action
            }
        default:
            return state
    }
}

export default user
