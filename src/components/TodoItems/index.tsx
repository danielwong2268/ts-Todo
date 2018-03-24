import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ImmutableState } from '../../reducers'
import { Todo, Status } from '../../models/Todo'
import { updateStatus } from '../../actions/updateStatus'
import TodoItems, { TodoItemProps } from './TodoItems'

const generateVisibleTodos = (allTodos: Todo[], currentFilterStatus: Status | null): Todo[] => {
  // undefined is used to show all todos
  if (!currentFilterStatus) {
    return allTodos
  }

  return allTodos.filter(todo => {
    return todo.status === currentFilterStatus
  })
}
 
const mapStateToProps = (state: ImmutableState): Partial<TodoItemProps> => {
  return {
    todos: generateVisibleTodos(state.todos, state.currentFilterStatus)
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ImmutableState>): Partial<TodoItemProps> => {
  return bindActionCreators({ updateStatus }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);