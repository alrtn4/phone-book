import { useContext } from "react";
import globalContext from "../../context/context";
import username from "../../images/username.png";

const Username = () => {
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

    const { handleUsernameChange } = context;

    return (
        <div className="d-flex row">
            <div className="d-flex col-1 justify-content-end">
                <img
                    id="loginInputIcon"
                    className="my-3"
                    src={username}
                    alt=""
                />
            </div>
            <input
                id='username'
                className="border border-dark my-3 p-2 col-10"
                type='text'
                placeholder='username'
                onChange={(e) => handleUsernameChange(e)}
            />
        </div>
    );
};

export default Username;
