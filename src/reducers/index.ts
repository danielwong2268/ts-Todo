import ActionEnumTypes from '../actions/actionEnumTypes';  
import Action from '../actions/types';
import { AddTodo } from '../actions/addTodo';
import { RemoveTodo } from '../actions/removeTodo';
import { UpdateStatus } from '../actions/updateStatus';
import { UpdateFilter } from '../actions/updateFilter';
import { Status, Todo, todoFactory } from '../models/Todo';

export interface State {
  todos: Todo[];
  completedStoryPoints: number;
  estimatingStoryPoints: boolean;
  currentFilterStatus: Status | null;
}

export type ImmutableState = Readonly<State>

const initialState: ImmutableState = {
  todos: [],
  completedStoryPoints: 0,
  estimatingStoryPoints: false,
  currentFilterStatus: null
}

const addTodo = (state: ImmutableState, action: AddTodo): ImmutableState => {
  const newTodos: Todo[] = [...state.todos, todoFactory(action.todoInformation)]
  return {
    ...state,
    todos: newTodos
  }
}

const removeTodo = (state: ImmutableState, action: RemoveTodo): ImmutableState => {
  const newTodos: Todo[] = [
    ...state.todos.slice(0, action.index),
    ...state.todos.slice(0, action.index + 1)
  ]

  return {
    ...state,
    todos: newTodos
  }
}

const updateStatus = (state: ImmutableState, action: UpdateStatus): ImmutableState => {
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

const updateFilter = (state: ImmutableState, action: UpdateFilter): ImmutableState => {
  return {
    ...state,
    currentFilterStatus: action.nextFilter
  }
}

const reducer = (state = initialState, action: Action): ImmutableState => {
  switch (action.type) {
    case ActionEnumTypes.ADD_TODO:
      return addTodo(state, action)
    case ActionEnumTypes.REMOVE_TODO:
      return removeTodo(state, action)
    case ActionEnumTypes.UPDATE_STATUS:
      return updateStatus(state, action)
    case ActionEnumTypes.UPDATE_FILTER:
      return updateFilter(state, action)
    default:
      return state
  }
}

export default reducer