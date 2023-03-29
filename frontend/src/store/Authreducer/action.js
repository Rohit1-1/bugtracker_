import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";
import { url } from "../../utils/url";


export const Signup=(payload)=>(dispatch)=>{

    dispatch(Signup_request())

        return  axios.post(`${url}/login`, payload).then((res)=>{
             console.log(res.signup)
              dispatch({ type:SIGNUP_SUCCESS});
              if(res.data.signup&&!res.data.userExist){
                return true;
              }
             else if(res.data.userExist){
                return false
             }
       

        }).catch((err)=>{
            dispatch(Signup_failure())
        })
       
   
}


export const Signup_request=()=>{
    return {
        type:SIGNUP_REQUEST
    }
}

export const Signup_failure=()=>{
    return {
        type:SIGNUP_FAILURE
    }
}








export const Signin=(payload)=>(dispatch)=>{

     dispatch(Signin_request())
 
         return  axios.post(`${url}/signup`, payload).then((res)=>{
             console.log(res)
                dispatch({ type: LOGIN_SUCCESS,payload:res.data.token});
                if(res.data.login){
                    return true;
                }
                else{
                    return false;
                }

         }).catch((err)=>{
             dispatch(Signin_failure())
         })
        
    
 }
 

 export const Signin_request=()=>{
     return {
         type:LOGIN_REQUEST
     }
 }
 
 export const Signin_failure=()=>{
     return {
         type:LOGIN_FAILURE
     }
 }
