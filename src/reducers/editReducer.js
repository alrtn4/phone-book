export const editReducer = (
    state = {
        name: null,
        number: null,
        email: null,
        changeApproved: null,
    },
    action
) => {
    switch (action.type) {
        case "SETEDIT":
            return action.payload;
        default:
            return state;
    }
};
