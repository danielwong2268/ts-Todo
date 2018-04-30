import { TodoActionConstants } from '../TodoActionTypes';
import TodoStatus from 'models/Todo/TodoStatus'
import UpdateStatus from '../TodoActionTypes'

export const updateStatus = (index: number, filterType: TodoStatus): UpdateStatus => {
  return {
    type: TodoActionConstants.UPDATE_STATUS,
    index,
    filterType
  }
}