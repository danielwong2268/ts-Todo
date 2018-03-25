import TodoStatus from './TodoStatus';

export interface Todo {
  status: TodoStatus;
  text: string;
  storyPoints: number;
}

export default Todo;