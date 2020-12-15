import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../actions/setLogin";

import { useContext } from "react";
// import context from '../../context/context';
import globalContext from "../../context/context";
// import username from "../../images/username.png";
import password from "../../images/password.png";

const Password = () => {
    // const login = useSelector((state) => state.loginReducer);

    // const dispatch = useDispatch();

    // const handleInputChange = (e) => {
    //     const loginCopy = { ...login };

    //     if (props.id === "username") {
    //         loginCopy.loginInput.username = e.target.value;

    //         dispatch(
    //             setLogin(
    //                 // {
    //                 // loginInput: {
    //                 //     username: e.target.value,
    //                 //     password: login.loginInput.password,
    //                 // },
    //                 // accounts: login.accounts,
    //                 // activeAccount: login.activeAccount,
    //                 // }
    //                 loginCopy
    //             )
    //         );
    //     }
    //     if (props.id === "password") {
    //         loginCopy.loginInput.password = e.target.value;

    //         dispatch(
    //             setLogin(
    //                 //     {
    //                 //     loginInput: {
    //                 //         username: login.loginInput.username,
    //                 //         password: e.target.value,
    //                 //     },
    //                 //     accounts: login.accounts,
    //                 //     activeAccount: login.activeAccount,
    //                 // }
    //                 loginCopy
    //             )
    //         );
    //     }
    // };

    const context = useContext(globalContext);

    const { handleInputChange } = context;

    return (
        <div className="d-flex row">
            <div className="d-flex col-1 justify-content-end">
                <img
                    id="loginInputIcon"
                    className="my-3"
                    src={password}
                    alt=""
                />
            </div>
            <input
                id='password'
                className="border border-dark my-3 p-2 col-10"
                type='password'
                placeholder='password'
                onChange={(e) => context.handlePasswordChange(e)}
            />
        </div>
    );
};

export default Password;
