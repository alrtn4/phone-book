import arrow from "../../images/left direction arrow.png";

const Footer = () => {
    return (
        <footer className="fixed-bottom d-flex justify-content-center p-2 bg-white login-footer">
            <img id="arrow" src={arrow} alt="" />
        </footer>
    );
};

export default Footer;
