import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setNavigation } from "../../actions/setNavigation";
import { setLogin } from "./../../actions/setLogin";

const SignInButton = () => {
    const navigation = useSelector((state) => state.navigationReducer);

    const dispatch = useDispatch();

    const login = useSelector((state) => state.loginReducer);

    const clicked = () => {
        var index;
        const findAccount = () => {
            index = login.accounts.findIndex(
                (account) =>
                    account.username === login.loginInput.username &&
                    account.password === login.loginInput.password
            );

            dispatch(
                setLogin({
                    activeAccount: index,
                    loginInput: login.loginInput,
                    accounts: login.accounts,
                })
            );

            console.log(login.loginInput.username);
            console.log(login.loginInput.password);
            console.log(index);
        };

        findAccount();

        if (index === -1) {
            dispatch(
                setNavigation({
                    path: "",
                    pageToPage: navigation.pageToPage,
                })
            );
        }
        if (index !== -1) {
            dispatch(
                setNavigation({
                    path: "/contacts",
                    pageToPage: navigation.pageToPage,
                })
            );
        }
    };

    return (
        <div
            id={"button"}
            className={`col-3 bg-secondary text-white border-rounded p-2 mt-3 text-center login-button mr-5`}
            onClick={clicked}
        >
            <div>Sign in</div>
            <Redirect to={navigation.path}></Redirect>
        </div>
    );
};

export default SignInButton;
