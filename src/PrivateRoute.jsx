import { useAuth } from "./context/authcontext";
import Homepage from "./pages/homepage";
import {Navigate,Route} from "react-router-dom";

function PrivateRoute({path,...props}){

    const {userLogin} =useAuth();
    return userLogin ? (<Route {...props} path={path}/>) : (<Navigate state={{from:path}}  to="/"/> )
}

export default PrivateRoute;