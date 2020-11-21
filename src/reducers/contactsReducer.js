export const contactsReducer = (
    state = [
        [
            {
                name: "Ali",
                number: "09123939100",
                email: "Ali@gmail.com",
                display: "block",
            },
            {
                name: "Behnam",
                number: "09123939100",
                email: "Ali@gmail.com",
                display: "block",
            },
            {
                name: "Davood",
                number: "09123939100",
                email: "Ali@gmail.com",
                display: "block",
            },
            {
                name: "Ehsan",
                number: "09123939100",
                email: "Ali@gmail.com",
                display: "block",
            },
            {
                name: "Farhad",
                number: "09123939100",
                email: "Ali@gmail.com",
                display: "block",
            },
            {
                name: "Hamid",
                number: "09123939100",
                email: "Ali@gmail.com",
                display: "block",
            },
            {
                name: "Iman",
                number: "09123939100",
                email: "Ali@gmail.com",
                display: "block",
            },
        ],
        [
            {
                name: "Ali",
                number: "09123939100",
                email: "Ali@gmail.com",
                display: "block",
            },
        ],
    ],
    action
) => {
    switch (action.type) {
        case "SETCONTACTS":
            return action.payload;
        default:
            return state;
    }
};
