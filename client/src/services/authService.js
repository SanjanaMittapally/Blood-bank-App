import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

const handleLogin = (e, email, password, role) => {
    e.preventDefault();
    try {
        if (!role || !password || !email) {
            return alert("Please provide all fields");
        }
        store.dispatch(userLogin({ email, password, role }));
    } catch (error) {
        console.log(error);
    }
};

const handleRegister = (e,
    name,
    role,
    email,
    password,
    organisationName,
    hospitalName,
    phone,
    website,
    address) => {
    e.preventDefault();
    try {
        store.dispatch(userRegister({
            name,
            role,
            email,
            password,
            organisationName,
            hospitalName,
            phone,
            website,
            address
        }));
    } catch (error) {
        console.log(error);
    };
};

export { handleLogin, handleRegister };