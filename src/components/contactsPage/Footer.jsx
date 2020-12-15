import leftarrow from "../../images/left direction arrow.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="fixed-bottom d-flex justify-content-center p-2 bg-white contacts-footer">
            <Link to="/">
                <img id="arrow" src={leftarrow} alt=""/>
            </Link>
        </footer>
    );
};

export default Footer;
