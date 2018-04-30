import { connect } from 'react-redux'
import { StoreState } from '../../../redux/store'
import Todo from '../../../models/Todo/Todo'
import TodoStatus from '../../../models/Todo/TodoStatus'
import { updateStatus } from '../../../redux/Todo/actions/todoActionCreators'
import TodoItems from './TodoItems'

const generateVisibleTodos = (allTodos: Todo[], currentFilterStatus: TodoStatus | null): Todo[] => {
  // undefined is used to show all todos
  if (!currentFilterStatus) {
    return allTodos
  }

  return allTodos.filter(todo => {
    return todo.status === currentFilterStatus
  })
}

interface StateProps {
  todos: Todo[];
}

const mapStateToProps = (state: StoreState): StateProps => {
  return {
    todos: generateVisibleTodos(state.todo.todos, state.todo.currentFilterStatus)
  }
}

interface DispatchProps {
  updateStatus: typeof updateStatus;
}

export type StoreProps = StateProps & DispatchProps 
export default connect(mapStateToProps, { updateStatus })(TodoItems);