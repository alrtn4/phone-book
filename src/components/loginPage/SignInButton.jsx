import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLogin } from "./../../actions/setLogin";
import globalContext from './../../context/context';

const SignInButton = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const login = useSelector((state) => state.loginReducer);

    const handleSignInButton = () => {
        var index = login.accounts.findIndex(
            (account) =>
                account.username === login.loginInput.username &&
                account.password === login.loginInput.password
        );

        let loginCopy = {...login}

        loginCopy.activeAccount = index;

        dispatch(
            setLogin(
            //     {
            //     activeAccount: index,
            //     loginInput: login.loginInput,
            //     accounts: login.accounts,
            // }
            loginCopy
            )
        );

        if (index !== -1) {
            history.push("/contacts");
        }
    };

    const context = useContext(globalContext)

    return (
        <div
            id={"button"}
            className={`col-4 bg-secondary text-white border-rounded p-2 mt-3 text-center login-button`}
            onClick={context.handleSignInButton}
        >
            <div>Sign in</div>
        </div>
    );
};

export default SignInButton;
