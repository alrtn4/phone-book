import React from "react";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const Contacts = () => {
    const contacts = useSelector((state) => state.contactsReducer);

    const login = useSelector((state) => state.loginReducer);

    return (
        <div id="contacts" className="ml-3">
            {contacts[login.activeAccount].map((contact, index) => {
                return contact.display === "block" ? (
                    <Contact
                        key={index}
                        index={index}
                        name={contact.name}
                        number={contact.number}
                        email={contact.email}
                    />
                ) : null;
            })}
        </div>
    );
};

export default Contacts;
