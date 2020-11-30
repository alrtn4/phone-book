import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "./../../actions/setLogin";

const Input = (props) => {
    const login = useSelector((state) => state.loginReducer);

    const dispatch = useDispatch();

    var index = login.activeAccount;

    const handleChange = (e) => {
        if (props.id === "username") {
            dispatch(
                setLogin({
                    loginInput: {
                        username: e.target.value,
                        password: login.loginInput.password,
                    },
                    accounts: login.accounts,
                    activeAccount: index,
                })
            );
        }
        if (props.id === "password") {
            dispatch(
                setLogin({
                    loginInput: {
                        username: login.loginInput.username,
                        password: e.target.value,
                    },
                    accounts: login.accounts,
                    activeAccount: index,
                })
            );
        }
    };

    return (
        <div className="d-flex row">
            <div className='d-flex col-1 justify-content-end'>
                <img
                    id="loginInputIcon"
                    className="my-3"
                    src={props.icon}
                    alt=""
                />
            </div>
            <input
                id={props.id}
                className="border border-dark my-3 p-2 col-10"
                type={props.type}
                placeholder={props.placeholder}
                onChange={handleChange}
            />
        </div>
    );
};

export default Input;
