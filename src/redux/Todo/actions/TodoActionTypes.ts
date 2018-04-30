import TodoStatus from 'models/Todo/TodoStatus'

export enum TodoActionConstants {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  UPDATE_STATUS = 'UPDATE_STATUS',
  UPDATE_FILTER = 'UPDATE_FILTER'
}

export interface AddTodo {
type: TodoActionConstants.ADD_TODO,
  todoInformation: {
    text: string;
    storyPoints: number;
  }
}

export interface RemoveTodo {
  type: TodoActionConstants.REMOVE_TODO,
  index: number
}

export interface UpdateFilter {
  type: TodoActionConstants.UPDATE_FILTER;
  nextFilter: TodoStatus | null;
}

export interface UpdateStatus {
  type: TodoActionConstants.UPDATE_STATUS;
  filterType: TodoStatus;
  index: number;
}

export type TodoAction =
    AddTodo
  | RemoveTodo
  | UpdateStatus
  | UpdateFilter

export default TodoAction