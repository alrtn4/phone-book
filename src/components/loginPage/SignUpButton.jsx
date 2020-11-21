import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { setLogin } from "../../actions/setLogin";
import { setContacts } from "../../actions/setContacts";
import { setNavigation } from "../../actions/setNavigation";

const SignUpButton = () => {
    const login = useSelector((state) => state.loginReducer);

    const contacts = useSelector((state) => state.contactsReducer);

    const navigation = useSelector((state) => state.navigationReducer);

    const dispatch = useDispatch();

    var index = login.activeAccount;

    const createAccount = () => {
        index = login.accounts.findIndex(
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
            dispatch(
                setNavigation({
                    path: "/contacts",
                    pageToPage: navigation.pageToPage,
                })
            );
        }
        if (index !== -1) {
            dispatch(
                setNavigation({
                    path: "",
                    pageToPage: navigation.pageToPage,
                })
            );
        }
    };

    return (
        <div
            id={"button"}
            className={`col-3 bg-secondary text-white border-rounded p-2 mt-3 text-center login-button ml-5`}
            onClick={createAccount}
            >
            <div>Sign up</div>
            <Redirect to={navigation.path}></Redirect>
        </div>
    );
};

export default SignUpButton;
