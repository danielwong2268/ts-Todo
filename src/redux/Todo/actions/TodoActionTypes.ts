// TodoActionTypes.ts
import { UpdateFilter } from './actionCreators/updateFilter'
import { AddTodo } from './actionCreators/addTodo'
import { RemoveTodo } from './actionCreators/removeTodo'
import { UpdateStatus } from './actionCreators/updateStatus'

type TodoAction =
    AddTodo
  | RemoveTodo
  | UpdateStatus
  | UpdateFilter

export { UpdateFilter, AddTodo, RemoveTodo, UpdateStatus }

export default TodoAction