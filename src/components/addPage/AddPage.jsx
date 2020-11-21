import Header from "../addPage/Header";
import Main from "../addPage/Main";
import Footer from "../addPage/Footer";

const AddPage = () => {
    var name = null;
    var number = null;
    var email = null;

    return (
        <div>
            <Header name={name} number={number} email={email}/>

            <Main name={name} number={number} email={email}/>

            <Footer/>
        </div>
    );
};

export default AddPage;
