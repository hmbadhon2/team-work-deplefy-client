import Contact from "../Components/ContactForm/Contact/Contact";
import {Protect} from "../Components/PrivateRoute/PrivateRoute";


const ContactForm = () => {
    return (
        <div className="py-12">
            <Contact></Contact>
        </div>
    );
};

export default Protect(ContactForm);