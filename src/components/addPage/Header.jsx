import cross from "../../images/cross.png";
import checkmark from "../../images/checkmark.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "./../../actions/setContacts";
import { setAdd } from "../../actions/setAdd";

const Header = () => {
    const dispatch = useDispatch();

    const contacts = useSelector((state) => state.contactsReducer);

    const login = useSelector((state) => state.loginReducer)

    const add = useSelector((state) => state.addReducer);

    const changeContacts = () => {
        var contactsCopy = [...contacts];

        let newContact = add;

        contactsCopy[login.activeAccount].push(newContact);

        dispatch(setContacts(contactsCopy));

        refreshAddReducer();
    };

    const refreshAddReducer = () => {
        dispatch(setAdd({ name: null, number: null, email: null , display: null}));
    };

    return (
        <header className="p-4 bg-white row edit-header">
            <div className="col-2 d-flex justify-content-center">
                <Link to="/contacts">
                    <img id="cross" src={cross} alt="" />
                </Link>
            </div>
            <div className="d-flex justify-content-center col-8">
                <h2>Add contact</h2>
            </div>
            <div className="col-2 d-flex justify-content-center">
                <Link to="/contacts">
                    <img
                        id="checkmark"
                        src={checkmark}
                        alt=""
                        onClick={changeContacts}
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
