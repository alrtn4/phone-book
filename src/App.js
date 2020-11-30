import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import AddPage from "./components/addPage/AddPage";
import ContactPage from "./components/contactPage/ContactPage";
import ContactsPage from "./components/contactsPage/ContactsPage";
import EditPage from "./components/editPage/EditPage";
import LoginPage from "./components/loginPage/LoginPage";

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={LoginPage} exact />
                <Route path="/contacts" component={ContactsPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/edit" component={EditPage} />
                <Route path="/add" component={AddPage} />
            </Switch>
        </HashRouter>
    );
};

export default App;
