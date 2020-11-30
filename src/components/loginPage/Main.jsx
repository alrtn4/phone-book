import SignInButton from './SignInButton'
import SignUpButton from './SignUpButton'
import Input from "./Input";
import username from '../../images/username.png'
import password from '../../images/password.png'

const Main = () => {
    return (
        <main className="container-fluid pt-5 d-flex justify-content-center login-main">
            <form id="login-form" className="col-11" action="">
                <Input id={"username"} placeholder={"username"} type={"text"} icon={username}/>

                <Input
                    id={"password"}
                    placeholder={"password"}
                    type={"password"}
                    icon={password}
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
