import nameIcon from "../../images/name.png";
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import { useDispatch, useSelector } from "react-redux";
import { setAdd } from "../../actions/setAdd";

const Main = () => {
    const dispatch = useDispatch();

    const add = useSelector((state) => state.addReducer);

    const handleChange = (e) => {
        if (e.target.id === "name")
            dispatch(
                setAdd({
                    name: e.target.value,
                    number: add.number,
                    email: add.email,
                    display: "block",
                })
            );
        if (e.target.id === "number")
            dispatch(
                setAdd({
                    name: add.name,
                    number: e.target.value,
                    email: add.email,
                    display: "block",
                })
            );
        if (e.target.id === "email")
            dispatch(
                setAdd({
                    number: add.number,
                    name: add.name,
                    email: e.target.value,
                    display: "block",
                })
            );
    };

    return (
        <main className="container-fluid pt-5 edit-main">
            <form id="edit-form" action="">
                <div className="form-group row">
                    <label
                        className="col-2 d-flex justify-content-end icon-label"
                        for="name"
                    >
                        <img className="icon" src={nameIcon} alt="" />
                    </label>
                    <label className="col-2 text" for="name">
                        Name
                    </label>
                    <div className="col-8">
                        <input
                            id="name"
                            className="text"
                            type="text"
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
                            id="number"
                            className="text"
                            type="text"
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
                            id="email"
                            className="text"
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <hr />
            </form>
        </main>
    );
};

export default Main;
