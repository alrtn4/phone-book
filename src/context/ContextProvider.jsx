import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import globalContext from "./context";
import { setLogin } from "./../actions/setLogin";
import { setContacts } from "./../actions/setContacts";

const ContextProvider = (props) => {
    const dispatch = useDispatch();

    const history = useHistory();

    const login = useSelector((state) => state.loginReducer);

    const contacts = useSelector((state) => state.contactsReducer);

    const handleUsernameChange = (e) => {
        const loginCopy = { ...login };

        loginCopy.loginInput.username = e.target.value;

        dispatch(setLogin(loginCopy));
    };

    const handlePasswordChange = (e) => {
        const loginCopy = { ...login };

        loginCopy.loginInput.password = e.target.value;

        dispatch(setLogin(loginCopy));
    };

    const handleSignIn = () => {
        var index = login.accounts.findIndex(
            (account) =>
                account.username === login.loginInput.username &&
                account.password === login.loginInput.password
        );

        let loginCopy = { ...login };

        loginCopy.activeAccount = index;

        dispatch(setLogin(loginCopy));

        if (index !== -1) {
            history.push("/contacts");
        } else {
            alert("Username and/or password are not valid");
        }
    };

    const createAccount = () => {
        var index = login.accounts.findIndex(
            (account) => account.username === login.loginInput.username
        );

        const { username, password } = login.loginInput;

        if (index === -1 && username !== "" && password !== "") {
            contacts.push([]);
            dispatch(setContacts(contacts));

            login.accounts.push({
                username: login.loginInput.username,
                password: login.loginInput.password,
            });

            let activeIndex = login.accounts.length - 1;

            dispatch(
                setLogin({
                    loginInput: { password: null, username: null },
                    accounts: login.accounts,
                    activeAccount: activeIndex,
                })
            );

            alert("Your account is successfully created");

            history.push("/contacts");
        } else {
            alert("Username is taken befor or username and/or password are empty");
        }
    };

    return (
        <globalContext.Provider
            value={{
                handleUsernameChange,
                handlePasswordChange,
                handleSignIn,
                createAccount,
            }}
        >
            {props.children}
        </globalContext.Provider>
    );
};

export default ContextProvider;
