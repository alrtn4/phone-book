import plus from "../../images/plus.png";
import { Link } from "react-router-dom";

const Add = () => {
    return (
        <div
            id="contacts-add"
            className="d-flex justify-content-center fixed-bottom"
        >
            <div
                id="contacts-add-box"
                className="d-flex flex-column align-items-center col-3 bg-white"
            >
                <Link to="/add">
                    <img src={plus} alt="" />
                </Link>
                <div>New contact</div>
            </div>
        </div>
    );
};

export default Add;
