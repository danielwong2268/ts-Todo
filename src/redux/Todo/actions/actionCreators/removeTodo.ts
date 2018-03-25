import ActionEnumTypes from '../enumTypes';

export interface RemoveTodo {
  type: ActionEnumTypes.REMOVE_TODO,
  index: number
}

export const removeTodo = (index: number): RemoveTodo => {
  return {
    type: ActionEnumTypes.REMOVE_TODO,
    index
  }
} 
