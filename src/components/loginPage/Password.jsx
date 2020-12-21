import { useContext } from "react";
import globalContext from "../../context/context";
import password from "../../images/password.png";

const Password = () => {
    const context = useContext(globalContext);

    const { handlePasswordChange } = context;

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
                onChange={(e) => handlePasswordChange(e)}
            />
        </div>
    );
};

export default Password;
