import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "../../css/ContactsPage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../../actions/setContacts";

const ContactsPage = () => {
    const dispatch = useDispatch();

    const contacts = useSelector((state) => state.contactsReducer);

    const refresh = () => {
        const contactsCopy = [...contacts];
        contactsCopy.forEach((item) => {
            item.forEach((item2) => {
                item2.display = "block";
            });
        });
        dispatch(setContacts(contactsCopy));
    };

    useEffect(() => {
        refresh();
    }, []);

    return (
        <div>
            <Header />

            <Main />

            <Footer />
        </div>
    );
};

export default ContactsPage;
