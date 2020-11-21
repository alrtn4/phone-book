export const loginReducer = (
    state = {
        loginInput: {
            username: null,
            password: null,
        },
        accounts: [
            {
                username: "ali",
                password: "123",
            },
            {
                username: "reza",
                password: "1234",
            },
        ],
        activeAccount: -1,
    },
    action
) => {
    switch (action.type) {
        case "SETLOGIN":
            return action.payload;
        default:
            return state;
    }
};
