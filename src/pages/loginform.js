
import "../styles/input.css";
import "../styles/button.css";

import {useNavigate,Redirect} from "react-router-dom";
import {useState} from "react";
import { useAuth,userCredentials } from "../context/authcontext";

function Loginform(){

   

    function credentialVerification(username,password){

        if(username===userCredentials.usernname && password===userCredentials.password){
            return true;
        }
        return false;
    }

    const [userCred,setUserCreds]=useState({username:"",password:""});
    const navigate=useNavigate();


    const {state,dispatch}=useAuth();
    return(<div classname="userLoginForm-container apply-shadow">
        <div>
           
           {!state.login && <div>
                    <label for="username">Username: </label>
                    <input id="username" type="text" onChange={(e)=>setUserCreds({...userCred,username:e.target.value})}></input>
                    <br/>
                    <label for="password">Password</label>
                    <input id="password" type="password" onChange={(e)=>setUserCreds({...userCred,password:e.target.value})}></input>
                    <br/>
           </div>}
            
          
            <button className="btn-text btn-style-color" onClick={()=>{
                if(state.login){
                    dispatch({type:"INVALID_CREDENTIALS"})
                    dispatch({type:"LOG_OUT"})
                    
                }
                else{
                    if(credentialVerification(userCred.username,userCred.password)){
                        dispatch({type:"VALID_CREDENTIALS"});
                        dispatch({type:"LOG_IN"});
                        
                    }
                    if(!credentialVerification(userCred.username,userCred.password)){
                        dispatch({type:"INVALID_CREDENTIALS"})
                    }
                }
                }}>{state.login ? "Log out" : "Log in"}</button>
                     
            
        </div>
       
    </div>)
}

export default Loginform;