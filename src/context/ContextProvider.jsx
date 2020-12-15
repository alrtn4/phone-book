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

        // console.log(loginCopy, login);
    };

    const handlePasswordChange = (e) => {
        const loginCopy = { ...login };

        loginCopy.loginInput.password = e.target.value;

        dispatch(setLogin(loginCopy));

        // console.log(loginCopy, login);
    };

    const handleSignInButton = () => {
        var index = login.accounts.findIndex((account) => {
            console.log(
                account.username,
                account.password,
                login.loginInput.username,
                login.loginInput.password
            );
            return (
                account.username === login.loginInput.username &&
                account.password === login.loginInput.password
            );
        });

        let loginCopy = { ...login };

        loginCopy.activeAccount = index;

        dispatch(setLogin(loginCopy));

        if (index !== -1) {
            history.push("/contacts");
        }
    };

    const createAccount = () => {
        var index = login.accounts.findIndex(
            (account) => account.username === login.loginInput.username
        );

        if (index === -1) {
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

            history.push("/contacts");
        }
    };

    return (
        <globalContext.Provider
            value={{
                handleUsernameChange,
                handlePasswordChange,
                handleSignInButton,
                createAccount,
            }}
        >
            {props.children}
        </globalContext.Provider>
    );
};

export default ContextProvider;
