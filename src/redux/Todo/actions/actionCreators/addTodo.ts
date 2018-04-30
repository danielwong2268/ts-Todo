import { TodoActionConstants } from '../TodoActionTypes';
import AddTodo from '../TodoActionTypes'

export const addTodo = (text: string, storyPoints: number): AddTodo => {
  return {
    type: TodoActionConstants.ADD_TODO,
    todoInformation: {
      text,
      storyPoints
    }
  }
} 