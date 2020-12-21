import { useContext } from "react";
import globalContext from "./../../context/context";

const SignInButton = () => {
    const context = useContext(globalContext);

    return (
        <div
            id={"button"}
            className={`col-4 bg-secondary text-white border-rounded p-2 mt-3 text-center login-button`}
            onClick={context.handleSignIn}
        >
            <div>Sign in</div>
        </div>
    );
};

export default SignInButton;
