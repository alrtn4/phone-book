export const setNavigation = (navigation) => {
    return async (dispatch , getState) => {
        await dispatch({type: 'SETNAVIGATION' , payload: navigation})
    }
}