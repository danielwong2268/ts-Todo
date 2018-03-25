import todoReducer from './Todo/reducer/todoReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  todo: todoReducer
})