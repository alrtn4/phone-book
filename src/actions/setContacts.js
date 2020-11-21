export const setContacts = (contacts) => {
    return async (dispatch , getState) => {
        await dispatch({type: 'SETCONTACTS' , payload: contacts})
    }
}