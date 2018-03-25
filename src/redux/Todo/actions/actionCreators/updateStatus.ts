import ActionEnumTypes from '../enumTypes'
import TodoStatus from '../../../../models/Todo/TodoStatus'

export interface UpdateStatus {
  type: ActionEnumTypes.UPDATE_STATUS;
  filterType: TodoStatus;
  index: number;
}

export const updateStatus = (index: number, filterType: TodoStatus): UpdateStatus => {
  return {
    type: ActionEnumTypes.UPDATE_STATUS,
    index,
    filterType
  }
}