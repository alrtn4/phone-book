import { createContext } from "react";

const globalContext = createContext({
    handleUsernameChange : () => {},
    handlePasswordChange : () => {},
    handleSignInButton : () => {},
    createAccount : () => {}
})

export default globalContext;