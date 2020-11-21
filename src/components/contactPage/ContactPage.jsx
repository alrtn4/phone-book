import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import editIcon from "../../images/edit.png";
import arrow from "../../images/left direction arrow.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setEdit } from "../../actions/setEdit";

const ContactPage = () => {
    const contact = useSelector((state) => state.contactReducer);

    const contacts = useSelector((state) => state.contactsReducer)

    const login = useSelector((state)=> state.loginReducer)

    var thisContact = contacts[login.activeAccount][contact.index];

    const dispatch = useDispatch();

    function colorClassName() {
        switch (contact.color) {
            case 1:
                return " contact-header-blue";
            case 2:
                return " contact-header-carbon";
            case 3:
                return " contact-header-orange";
            case 4:
                return " contact-header-yaghuti";
            case 5:
                return " contact-header-green";
            case 6:
                return " contact-header-sabz";
            case 7:
                return " contact-header-violet";
            default:
                return " contact-header-green";
        }
    }

    function newClassName() {
        var className = "contact-header";
        className += colorClassName();
        return className;
    }

    return (
        <div>
            <header className={newClassName()}>
                <h1>{thisContact.name}</h1>
            </header>

            <main className="container-fluid pt-5 contact-main">
                <div id="contact-form">
                    <div className="row">
                        <div className="col-2 d-flex justify-content-end">
                            <img id="phone" src={phone} alt="" />
                        </div>
                        <div className="column col-10">
                            <div id="number">{thisContact.number}</div>
                            <div id="mobile">Mobile</div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-2 d-flex justify-content-end">
                            <img id="mail" src={mail} alt="" />
                        </div>
                        <div className="column col-10">
                            <div id="email">{thisContact.email}</div>
                            <div id="home">Home</div>
                        </div>
                    </div>
                    <hr />
                </div>

                <Link
                    className="d-block"
                    to="/edit"
                    onClick={() => {
                        dispatch(
                            setEdit({
                                name: thisContact.name,
                                number: thisContact.number,
                                email: thisContact.email,
                            })
                        );
                    }}
                >
                    <div
                        id="contact-add"
                        className="d-flex justify-content-center fixed-bottom"
                    >
                        <div
                            id="contact-add-box"
                            className="d-flex flex-column align-items-center col-3 bg-white"
                        >
                            <img className="mt-1" src={editIcon} alt="" />
                            <div>Edit</div>
                        </div>
                    </div>
                </Link>
            </main>

            <footer className="fixed-bottom d-flex justify-content-center p-2 bg-white contact-footer">
                <Link to="/contacts">
                    <img id="arrow" src={arrow} alt="" />
                </Link>
            </footer>
        </div>
    );
};

export default ContactPage;
