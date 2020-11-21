export const setEdit = (edit) => {
    return async (dispatch , getState) => {
        await dispatch({type: 'SETEDIT' , payload: edit})
    }
}