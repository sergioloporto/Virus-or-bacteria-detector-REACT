const defaultState = {
    isLoginSuccess: false

};


const userReducer = (state = defaultState, action) => {
    if(action.type === 'SET_LOGIN_SUCCESS'){
        //.....ustawiam
        return {  ...state, isLoginSuccess: action.payload }
    }

    return state
};






export default userReducer;