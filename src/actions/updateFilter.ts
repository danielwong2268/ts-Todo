import actionEnumTypes from './actionEnumTypes'
import { Status } from '../models/Todo'

export interface UpdateFilter {
  type: actionEnumTypes.UPDATE_FILTER;
  nextFilter: Status | null;
}

export const updateFilter = (nextFilter: Status | null): UpdateFilter => {
  return {
    type: actionEnumTypes.UPDATE_FILTER,
    nextFilter
  }
}