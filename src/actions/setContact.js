export const setContact = (contact) => {
    return async (dispatch , getState) => {
        await dispatch({type: 'SETCONTACT' , payload: contact})
    }
}