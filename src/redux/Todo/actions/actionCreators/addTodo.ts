import ActionEnumTypes from '../enumTypes';

export interface AddTodo {
  type: ActionEnumTypes.ADD_TODO,
  todoInformation: {
    text: string;
    storyPoints: number;
  }
}

export const addTodo = (text: string, storyPoints: number): AddTodo => {
  return {
    type: ActionEnumTypes.ADD_TODO,
    todoInformation: {
      text,
      storyPoints
    }
  }
} 