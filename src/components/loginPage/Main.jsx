import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
import Input from "./Username";
// import username from "../../images/username.png";
// import password from "../../images/password.png";
import ContextProvider from "../../context/ContextProvider";
import Username from "./Username";
import Password from "./Password";

const Main = () => {
    return (
        <main className="container-fluid pt-5 d-flex justify-content-center login-main">
            <form id="login-form" className="col-11" action="">
                {/* <ContextProvider> */}
                    <Username
                    // id={"username"}
                    // placeholder={"username"}
                    // type={"text"}
                    // icon={username}
                    />
                    {/* </ContextProvider> */}

                    {/* <ContextProvider> */}
                    <Password
                    // id={"password"}
                    // placeholder={"password"}
                    // type={"password"}
                    // icon={password}
                    />
                    {/* </ContextProvider> */}

                    <div className="row justify-content-center">
                        {/* <ContextProvider> */}
                        <SignInButton />
                        {/* </ContextProvider> */}

                        {/* <ContextProvider> */}
                        <SignUpButton />
                        {/* </ContextProvider> */}
                    </div>
                {/* </ContextProvider> */}
            </form>
        </main>
    );
};

export default Main;
