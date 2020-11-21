export const contactReducer = (
    state = {
        name: null,
        number: null,
        email: null,
        color: null,
        index: null
    },
    action
) => {
    switch (action.type) {
        case "SETCONTACT":
            return action.payload;
        default:
            return state;
    }
};
