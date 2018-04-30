import { TodoActionConstants } from '../TodoActionTypes';
import RemoveTodo from '../TodoActionTypes';

export const removeTodo = (index: number): RemoveTodo => {
  return {
    type: TodoActionConstants.REMOVE_TODO,
    index
  }
} 
