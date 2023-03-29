import { ADD_Critical_BUG, ADD_Low_BUG, ADD_Major_BUG, ADD_Medium_BUG, DELETE_Critical_BUG, DELETE_Low_BUG, DELETE_Major_BUG, DELETE_Medium_BUG } from "./actionType"

export const addnewBug=(payload)=>(dispatch)=>{
      //console.log(payload)
    try {
        if(payload.category==='critical'){
            dispatch({type:ADD_Critical_BUG,payload})
        }
       else if(payload.category==='major'){
            dispatch({type:ADD_Major_BUG,payload})
        }
       else if(payload.category==='medium'){
            dispatch({type:ADD_Medium_BUG,payload})
        }
        else if(payload.category==='low'){
            dispatch({type:ADD_Low_BUG,payload})
        }
    } catch (error) {
        
    }
}


export const deleteBug=(payload)=>(dispatch)=>{
   // console.log(payload,payload.title,'pout')
  try {
      if(payload.title=='Critical Severity'){
        //console.log(payload.bugs)
          dispatch({type:DELETE_Critical_BUG,payload:payload.bugs})
      }

     else if(payload.title=='Major Severity'){
       // console.log(payload.bugs)
        dispatch({type:DELETE_Major_BUG,payload:payload.bugs})
    }

     else if(payload.title=='Medium Severity'){
       // console.log(payload.bugs)
          dispatch({type:DELETE_Medium_BUG,payload:payload.bugs})
      }

      else if(payload.title=='Low Severity'){
       // console.log(payload.bugs)
          dispatch({type:DELETE_Low_BUG,payload:payload.bugs})
      }
  } catch (error) {
      
  }
}