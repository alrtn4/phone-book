export const navigationReducer = (
    state = {
        pageToPage: "edittocontact",
        path: "",
    },
    action
) => {
    switch (action.type) {
        case "SETNAVIGATION":
            return action.payload;
        default:
            return state;
    }
};
