import { applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger"


import rootReducer from "./root-reducer";


const middleware=[]

if(process.env.NODE_ENV === "development"){
    middleware.push(logger)
}

const store=legacy_createStore(rootReducer, applyMiddleware(...middleware))

export {store}