import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setContacts } from "../../actions/setContacts";
import { setNavigation } from "../../actions/setNavigation";
import { setLogin } from "./../../actions/setLogin";

const SignInButton = () => {
    const dispatch = useDispatch();
    
    const navigation = useSelector((state) => state.navigationReducer);

    const login = useSelector((state) => state.loginReducer);

    const contacts = useSelector((state) => state.contactsReducer);

    const refresh = () => {
        const contactsCopy = [...contacts];
        contactsCopy.forEach((item) => {
            item.forEach((item2) => {
                item2.display = "block";
            });
        });
        dispatch(setContacts(contactsCopy));
    };

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

        refresh();
    };

    return (
        <div
            id={"button"}
            className={`col-4 bg-secondary text-white border-rounded p-2 mt-3 text-center login-button`}
            onClick={clicked}
        >
            <div>Sign in</div>
            <Redirect to={navigation.path}></Redirect>
        </div>
    );
};

export default SignInButton;
