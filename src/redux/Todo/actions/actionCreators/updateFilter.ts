import { TodoActionConstants } from '../TodoActionTypes';
import TodoStatus from 'models/Todo/TodoStatus'
import UpdateFilter from '../TodoActionTypes'

export const updateFilter = (nextFilter: TodoStatus | null): UpdateFilter => {
  return {
    type: TodoActionConstants.UPDATE_FILTER,
    nextFilter
  }
}