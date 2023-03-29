import Redux, { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import {reducer as authReducer} from "./Authreducer/reducer"
import {reducer as appReducer} from "./Appreducer/reducer"

const rootreducer=combineReducers({
    authReducer,
    appReducer
})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
