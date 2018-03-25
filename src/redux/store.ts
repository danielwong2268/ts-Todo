import { createStore } from 'redux'
import { TodoState } from './Todo/reducer/todoReducer'
import reducer from './reducer'

interface Store {
  todo: TodoState;
}

export type StoreState = Readonly<Store>

export default createStore(reducer);