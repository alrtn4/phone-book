import leftarrow from "../../images/left direction arrow.png";
import { Link } from "react-router-dom";
import { setNavigation } from "./../../actions/setNavigation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Footer = () => {
    const dispatch = useDispatch();

    const navigation = useSelector((state) => state.navigationReducer);

    const setNav = () => {
        const navigationCopy = Object.assign({}, navigation);
        navigationCopy.path = "/";
        dispatch(setNavigation(navigationCopy));
    };

    return (
        <footer className="fixed-bottom d-flex justify-content-center p-2 bg-white contacts-footer">
            <Link to="/">
                <img id="arrow" src={leftarrow} alt="" onClick={setNav} />
            </Link>
        </footer>
    );
};

export default Footer;
