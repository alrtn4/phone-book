import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "./../../actions/setContacts";

const Search = () => {
    const contacts = useSelector((state) => state.contactsReducer);

    const contactsCopy = [...contacts];

    const login = useSelector((state) => state.loginReducer);

    const activeContacts = contactsCopy[login.activeAccount];

    const dispatch = useDispatch();

    const filterNames = (e) => {
        for (let i = 0; i < activeContacts.length; i++) {
            let a = activeContacts[i].name.toUpperCase();

            if (a.indexOf(e.target.value.toUpperCase()) > -1) {
                activeContacts[i].display = "block";
            } else {
                activeContacts[i].display = "none";
            }
        }

        dispatch(setContacts(contactsCopy));
    };

    let pervScrollPos = window.pageYOffset;

    const handleScroll = () => {
        window.onscroll = function () {
            try {
                let currentScrollPos = window.pageYOffset;
                if (pervScrollPos > currentScrollPos) {
                    document.getElementById("search-box-form").style.top = "8rem";
                } else {
                    document.getElementById("search-box-form").style.top = "3rem";
                }
                pervScrollPos = currentScrollPos;
            }
            catch {
                
            }
        };
    };

    return (
        <form
            id="search-box-form"
            className="d-flex justify-content-center fixed-top form-inline"
            action=""
        >
            <input
                id="search-box"
                className="mb-4 col-11 bg-light form-control "
                type="text"
                placeholder="Search through contacts"
                onChange={filterNames}
            />

            {window.addEventListener("scroll", () => handleScroll())}
        </form>
    );
};

export default Search;
