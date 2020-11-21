import SignInButton from './SignInButton'
import SignUpButton from './SignUpButton'
import Input from "./Input";

const Main = () => {
    return (
        <main className="container-fluid pt-5 d-flex justify-content-center login-main">
            <form id="login-form" className="col-8" action="">
                <Input id={"username"} placeholder={"username"} type={"text"} />

                <Input
                    id={"password"}
                    placeholder={"password"}
                    type={"password"}
                />

                <div className="row justify-content-center">
                    <SignInButton />

                    <SignUpButton />
                </div>
            </form>
        </main>
    );
};

export default Main;
