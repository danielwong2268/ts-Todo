import { AddTodo } from './addTodo';
import { RemoveTodo } from './removeTodo';
import { UpdateStatus } from './updateStatus'
import { UpdateFilter } from './updateFilter'

type Action =
    AddTodo
  | RemoveTodo
  | UpdateStatus
  | UpdateFilter

export default Action;