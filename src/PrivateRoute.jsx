import { useAuth } from "./context/authcontext";

import {Navigate,Route,Redirect} from "react-router-dom";

function PrivateRoute({path,...props}){

    const {state} =useAuth();
    return state.login ? (<Route {...props} path={path}/>) : (<Navigate state={{from:path}} replace to="/loginpage" /> )
}

export default PrivateRoute;