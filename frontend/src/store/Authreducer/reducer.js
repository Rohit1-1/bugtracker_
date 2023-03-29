import { getData, saveData } from "../../utils/storage"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS} from "./actionType"


const initialState={
    isLoading:false,
    isError:false,
    isAuth:getData("isAuth")||false,
    token:getData('token')||"",
}

export const reducer=(state=initialState,{type,payload})=>{
   
  switch(type){

    case(SIGNUP_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true,
            isAuth:false,
        }
    }
    case(SIGNUP_REQUEST):{
        return{
            ...state,
            isLoading:true,
            isError:false,
            isAuth:false,
        }
    }
    case(SIGNUP_SUCCESS):{
        return{
            ...state,
            isLoading:false,
            isError:false,
            isAuth:false,
        }
    }
    case(LOGIN_SUCCESS):{
        saveData('isAuth',true)
       saveData('token',payload)
        return{
            ...state,
            isLoading:false,
            isError:false,
            isAuth:true,
        }
    }
    case(LOGIN_REQUEST):{
        return{
            ...state,
            isLoading:true,
            isError:false,
            isAuth:false,
        }
    }
    case(LOGIN_FAILURE):{
        return{
            ...state,
            isLoading:false,
            isError:true,
            isAuth:false,
        }
    }
   
    default:
        return state
}

}
