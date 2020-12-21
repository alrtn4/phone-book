import icon1 from "../../images/contact blue.png";
import icon2 from "../../images/contact carbon.png";
import icon3 from "../../images/contact orange.png";
import icon4 from "../../images/contact yaghuti.png";
import icon5 from "../../images/contact green.png";
import icon6 from "../../images/contact sabze sir.png";
import icon7 from "../../images/contact violet.png";
import { useDispatch } from "react-redux";
import { setContact } from "../../actions/setContact";
import { Link } from "react-router-dom";

const Contact = (props) => {
    const dispatch = useDispatch();

    var color;

    const setIcon = () => {
        color = props.index % 7 + 1;

        switch (color) {
            case 1:
                return icon1;
            case 2:
                return icon2;
            case 3:
                return icon3;
            case 4:
                return icon4;
            case 5:
                return icon5;
            case 6:
                return icon6;
            case 7:
                return icon7;
            default:
                return;
        }
    };

    var name = props.name;
    var number = props.number;
    var email = props.email;
    var index = props.index;

    return (
        <div
            className="contact"
            onClick={() => {
                dispatch(
                    setContact({
                        name: name,
                        number: number,
                        email: email,
                        color: color,
                        index: index,
                    })
                );
            }}
        >
            <Link className="d-block contact-row" to="/contact">
                <img className="icon" src={setIcon()} alt="" />
                <span>{props.name}</span>
                <hr />
            </Link>
        </div>
    );
};

export default Contact;
