import TodoActionEnumTypes from '../actions/enumTypes'
import TodoAction, { AddTodo, RemoveTodo, UpdateStatus, UpdateFilter } from '../actions/TodoActionTypes'

import TodoStatus from 'models/Todo/TodoStatus';
import Todo from 'models/Todo/Todo';
import todoFactory from 'models/Todo/todoFactory';

export interface TodoState {
  todos: Todo[];
  completedStoryPoints: number;
  estimatingStoryPoints: boolean;
  currentFilterStatus: TodoStatus | null;
}

export type ImmutableTodoState = Readonly<TodoState>

const initialState: ImmutableTodoState = {
  todos: [],
  completedStoryPoints: 0,
  estimatingStoryPoints: false,
  currentFilterStatus: null
}

const addTodo = (state: ImmutableTodoState, action: AddTodo): ImmutableTodoState => {
  const newTodos: Todo[] = [...state.todos, todoFactory(action.todoInformation)]
  return {
    ...state,
    todos: newTodos
  }
}

const removeTodo = (state: ImmutableTodoState, action: RemoveTodo): ImmutableTodoState => {
  const newTodos: Todo[] = [
    ...state.todos.slice(0, action.index),
    ...state.todos.slice(0, action.index + 1)
  ]

  return {
    ...state,
    todos: newTodos
  }
}

const updateStatus = (state: ImmutableTodoState, action: UpdateStatus): ImmutableTodoState => {
  const { todos } = state
  const { index, filterType } = action

  const newTodo: Todo = {
    ...todos[index],
    status: filterType
  }

  const newTodos = [
    ...todos.slice(0, index),
    newTodo,
    ...todos.slice(index + 1)
  ]

  return {
    ...state,
    todos: newTodos
  }
}

const updateFilter = (state: ImmutableTodoState, action: UpdateFilter): ImmutableTodoState => {
  return {
    ...state,
    currentFilterStatus: action.nextFilter
  }
}

const reducer = (state = initialState, action: TodoAction): ImmutableTodoState => {
  switch (action.type) {
    case TodoActionEnumTypes.ADD_TODO:
      return addTodo(state, action)
    case TodoActionEnumTypes.REMOVE_TODO:
      return removeTodo(state, action)
    case TodoActionEnumTypes.UPDATE_STATUS:
      return updateStatus(state, action)
    case TodoActionEnumTypes.UPDATE_FILTER:
      return updateFilter(state, action)
    default:
      return state
  }
}

export default reducer