import { getData, saveData } from "../../utils/storage"
import { ADD_Critical_BUG, ADD_Low_BUG, ADD_Major_BUG, ADD_Medium_BUG, DELETE_Critical_BUG, DELETE_Low_BUG, DELETE_Major_BUG, DELETE_Medium_BUG, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS} from "./actionType"


const initialState={
    critical:{
        title:'Critical Severity',
        color:"red",
        bugs:[{id:'ttyfsdgdgh',title:"Reported Bug", category: 'critical'}]
    },
    major:{
        title:'Major Severity',
        color:"orange",
        bugs:[{id:'ttyfgh',title:"Reported Bug", category: 'major'}]
    },
    medium:{
        title:'Medium Severity',
        color:"blue",
        bugs:[{id:'ttyfhygh',title:"Reported Bug", category: 'medium'}]
    },
    low:{
        title:'Low Severity',
        color:"green",
        bugs:[{id:'ttyfwergh',title:"Reported Bug", category: 'low'}]
    }
}

export const reducer=(state=initialState,{type,payload})=>{
   
  switch(type){
    case(ADD_Critical_BUG):{
        return{
            ...state,
            critical:{
                 ...state.critical,
                 bugs:[...state.critical.bugs,payload]
             }
        }

    }
    case(ADD_Major_BUG):{
        return{
            ...state,
            major:{
                 ...state.major,
                 bugs:[...state.major.bugs,payload]
             }
        }

    }

    case(ADD_Medium_BUG):{
        return{
            ...state,
            medium:{
                 ...state.medium,
                 bugs:[...state.medium.bugs,payload]
             }
        }

    }
    case(ADD_Low_BUG):{
        return{
            ...state,
            low:{
                 ...state.low,
                 bugs:[...state.low.bugs,payload]
             }
        }

    }
   
    case(DELETE_Critical_BUG):{
        return{
            ...state,
            critical:{
                 ...state.critical,
                 bugs:payload
             }
        }

    }


    case(DELETE_Major_BUG):{
        return{
            ...state,
            major:{
                 ...state.major,
                 bugs:payload
             }
        }

    }

    case(DELETE_Medium_BUG):{
        return{
            ...state,
            medium:{
                 ...state.medium,
                 bugs:payload
             }
        }

    }
    case(DELETE_Low_BUG):{
        return{
            ...state,
            low:{
                 ...state.low,
                 bugs:payload
             }
        }

    }
   
    default:
        return state
}

}
