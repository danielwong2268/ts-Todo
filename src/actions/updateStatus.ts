import ActionEnumTypes from './actionEnumTypes'
import { Status } from '../models/Todo'

export interface UpdateStatus {
  type: ActionEnumTypes.UPDATE_STATUS;
  filterType: Status;
  index: number;
}

export const updateStatus = (index: number, filterType: Status): UpdateStatus => {
  return {
    type: ActionEnumTypes.UPDATE_STATUS,
    index,
    filterType
  }
}