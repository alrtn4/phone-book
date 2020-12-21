import { useContext } from "react";
import globalContext from "../../context/context";
import username from "../../images/username.png";

const Username = () => {
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
