import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLogin } from "../../actions/setLogin";
import { setContacts } from "../../actions/setContacts";
import { useContext } from "react";
import Context from '../../context/context';
import globalContext from './../../context/context';

const SignUpButton = () => {
    // const dispatch = useDispatch();
    
    // const history = useHistory();
    
    // const login = useSelector((state) => state.loginReducer);

    // const contacts = useSelector((state) => state.contactsReducer);

    // const createAccount = () => {
    //     var index = login.accounts.findIndex(
    //         (account) => account.username === login.loginInput.username
    //     );

    //     if (index === -1) {
    //         contacts.push([]);
    //         dispatch(setContacts(contacts));

    //         login.accounts.push({
    //             username: login.loginInput.username,
    //             password: login.loginInput.password,
    //         });

    //         let activeIndex = login.accounts.length - 1;

    //         dispatch(
    //             setLogin({
    //                 loginInput: { password: null, username: null },
    //                 accounts: login.accounts,
    //                 activeAccount: activeIndex,
    //             })
    //         );

    //         history.push('/contacts')
    //     }
    // };

    const context = useContext(globalContext)

    return (
        <div
            id={"button"}
            className={`col-4 bg-secondary text-white border-rounded p-2 mt-3 text-center login-button ml-5`}
            onClick={context.createAccount}
            >
            <div>Sign up</div>
        </div>
    );
};

export default SignUpButton;
