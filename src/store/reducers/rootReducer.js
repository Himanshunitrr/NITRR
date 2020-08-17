import authReducer from "./authReducer"
import collegeReducer from "./collegeReducer"
import {combineReducers} from "redux"
import currentReducer from "./currentReducers"

const rootReducer = combineReducers({
  auth: authReducer,
  college: collegeReducer,
  current: currentReducer
})

export default rootReducer