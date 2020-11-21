export const addReducer = (
    state = {
        name: null,
        number: null,
        email: null,
        display: "block",
    },
    action
) => {
    switch (action.type) {
        case "SETADD":
            return action.payload;
        default:
            return state;
    }
};
