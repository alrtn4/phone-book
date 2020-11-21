import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "../../css/ContactsPage.css";
import { setNavigation } from "./../../actions/setNavigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ContactsPage = () => {
    const navigation = useSelector((state) => state.navigationReducer);

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(setNavigation({ pageToPage: navigation.pageToPage, path: "/" }));
    })

    return (
        <div>
            <Header />

            <Main />

            <Footer />
        </div>
    );
};

export default ContactsPage;
