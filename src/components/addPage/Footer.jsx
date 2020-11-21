import arrow from "../../images/left direction arrow.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="fixed-bottom d-flex justify-content-center p-2 bg-white edit-footer">
            <Link to="/contacts">
                <img id="arrow" src={arrow} alt="" />
            </Link>
        </footer>
    );
};

export default Footer;
