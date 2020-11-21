export const setAdd = (add) => {
    return async (dispatch , getState) => {
        await dispatch({type: 'SETADD' , payload: add})
    }
}