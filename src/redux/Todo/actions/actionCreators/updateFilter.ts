import actionEnumTypes from '../enumTypes'
import TodoStatus from 'models/Todo/TodoStatus'

export interface UpdateFilter {
  type: actionEnumTypes.UPDATE_FILTER;
  nextFilter: TodoStatus | null;
}

export const updateFilter = (nextFilter: TodoStatus | null): UpdateFilter => {
  return {
    type: actionEnumTypes.UPDATE_FILTER,
    nextFilter
  }
}