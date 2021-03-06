import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import mainReducer from "./mainReducer"

const reducers = combineReducers({
  mainReducer: mainReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
