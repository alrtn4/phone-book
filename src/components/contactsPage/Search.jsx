// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "./../../actions/setContacts";

const Search = () => {
    // const [getSearchBoxValue, setSearchBoxValue] = useState(null);

    const contacts = useSelector((state) => state.contactsReducer);

    const dispatch = useDispatch();

    const filterNames = (e) => {
        for (let i = 0; i < contacts.length; i++) {
            let a = contacts[i].name;
            if (a.indexOf(e.target.value) > -1) {
                contacts[i].display = "block";
                console.log(
                    a + " " + e.target.value + " " + contacts[i].display
                );
            } else {
                contacts[i].display = "none";
            }
            let contactsCopy = [...contacts];
            dispatch(setContacts(contactsCopy));
        }
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
        </form>
    );
};

export default Search;
