import cross from "../../images/cross.png";
import checkmark from "../../images/checkmark.png";
import name from "../../images/name.png";
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import arrow from "../../images/left direction arrow.png";
import deleteIcon from "../../images/delete.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setContacts } from "./../../actions/setContacts";

const EditPage = () => {
    const dispatch = useDispatch();

    const contacts = useSelector((state) => state.contactsReducer);

    const contact = useSelector((state) => state.contactReducer);

    const login = useSelector((state)=>state.loginReducer)

    const thisContact = contacts[login.activeAccount][contact.index];

    const contactsFirstCopy = [...contacts];

    var contactObject = thisContact;

    const handleChange = (e) => {
        if (e.target.id === "name") {
            contactObject = {
                name: e.target.value,
                number: thisContact.number,
                email: thisContact.email,
                display: 'block'
            };
        }
        if (e.target.id === "mobile") {
            contactObject = {
                name: thisContact.name,
                number: e.target.value,
                email: thisContact.email,
                display: 'block'
            };
        }
        if (e.target.id === "home") {
            contactObject = {
                name: thisContact.name,
                number: thisContact.number,
                email: e.target.value,
                display: 'block'
            };
        }
    };

    const changeDismissed = () => {
        dispatch(setContacts(contactsFirstCopy));
    };

    const changeApproved = () => {
        var contactsCopy = [...contacts];
        contactsCopy[login.activeAccount][contact.index] = contactObject;
        dispatch(setContacts(contactsCopy));
    };

    const Delete = () => {
        contactsFirstCopy[login.activeAccount].splice(contact.index , 1);
        dispatch(setContacts(contactsFirstCopy));
    }

    return (
        <div>
            <header className="p-4 bg-white row edit-header">
                <div className="col-2 d-flex justify-content-center">
                    <Link to="/contact">
                        <img
                            id="cross"
                            src={cross}
                            alt=""
                            onClick={changeDismissed}
                        />
                    </Link>
                </div>
                <div className="d-flex justify-content-center col-8">
                    <h2>Edit contact</h2>
                </div>
                <div className="col-2 d-flex justify-content-center">
                    <Link to="/contact">
                        <img
                            id="checkmark"
                            src={checkmark}
                            alt=""
                            onClick={changeApproved}
                        />
                    </Link>
                </div>
            </header>

            <main className="container-fluid pt-5 edit-main">
                <form id="edit-form" action="">
                    <div className="form-group row">
                        <label
                            className="col-2 d-flex justify-content-end icon-label"
                            for="name"
                        >
                            <img className="icon" src={name} alt="" />
                        </label>
                        <label className="col-2 text" for="name">
                            Name
                        </label>
                        <div className="col-8">
                            <input
                                id="name"
                                className="text"
                                type="text"
                                placeholder={thisContact.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="form-group row">
                        <label
                            className="col-2 d-flex justify-content-end icon-label"
                            for="mobile"
                        >
                            <img className="icon" src={phone} alt="" />
                        </label>
                        <label className="col-2 text" for="mobile">
                            Mobile
                        </label>
                        <div className="col-8">
                            <input
                                id="mobile"
                                className="text"
                                type="text"
                                placeholder={thisContact.number}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="form-group row">
                        <label
                            className="col-2 d-flex justify-content-end icon-label"
                            for="home"
                        >
                            <img className="icon" src={mail} alt="" />
                        </label>
                        <label className="col-2 text" for="home">
                            Home
                        </label>
                        <div className="col-8">
                            <input
                                id="home"
                                className="text"
                                type="text"
                                placeholder={thisContact.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <hr />
                </form>

                <Link
                    className="d-block"
                    to="/contacts"
                    onClick={Delete}
                >
                    <div
                        id="edit-delete"
                        className="d-flex justify-content-center fixed-bottom"
                    >
                        <div
                            id="edit-delete-box"
                            className="d-flex flex-column align-items-center col-3 bg-white"
                        >
                            <img className="mt-1" src={deleteIcon} alt="" />
                            <div>Delete</div>
                        </div>
                    </div>
                </Link>
            </main>

            <footer className="fixed-bottom d-flex justify-content-center p-2 bg-white edit-footer">
                <Link to="/contact">
                    <img
                        id="arrow"
                        src={arrow}
                        alt=""
                        onClick={changeDismissed}
                    />
                </Link>
            </footer>
        </div>
    );
};

export default EditPage;
