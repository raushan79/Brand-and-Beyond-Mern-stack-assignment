import React from 'react';
import {Navigate} from 'react-router-dom';
// import {useUserAuth} from '../context/useAuthContext'

const ProtectedRoute=({children})=>{
    // const {user}=useUserAuth();
    let isLogin=false;
    let role="admin";
    
    console.log("check user in private : ");
    if(!isLogin){
        if(role==="admin"){
            return <Navigate to={"/userdetails"}/>

        }
        return <Navigate to={"/"}/>
        
    }
    return children;
};

export default ProtectedRoute