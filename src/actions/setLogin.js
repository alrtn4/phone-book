export const setLogin = (login) => {
    return async (dispatch , getState) => {
        await dispatch({type: 'SETLOGIN' , payload: login})
    }
}