import { createContext } from "react";

const globalContext = createContext({
    handleUsernameChange : () => {},
    handlePasswordChange : () => {},
    handleSignIn : () => {},
    createAccount : () => {},
})

export default globalContext;