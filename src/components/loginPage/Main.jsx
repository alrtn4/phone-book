import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import Username from "./Username";
import Password from "./Password";
import { useContext } from "react";
import globalContext from "./../../context/context";

const Main = () => {
    const context = useContext(globalContext);

    return (
        <main className="container-fluid pt-5 d-flex justify-content-center login-main">
            <form id="login-form" className="col-11" action="">
                <Username />

                <Password />

                <div className="row justify-content-center">
                    <SignInButton />

                    <SignUpButton />
                </div>
            </form>
        </main>
    );
};

export default Main;
