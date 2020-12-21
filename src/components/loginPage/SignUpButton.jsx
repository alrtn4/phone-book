import { useContext } from "react";
import globalContext from './../../context/context';

const SignUpButton = () => {
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
