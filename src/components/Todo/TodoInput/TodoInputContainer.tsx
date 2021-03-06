import { connect } from 'react-redux'
import { addTodo } from '../../../redux/Todo/actions/todoActionCreators'
import TodoInput from './TodoInput'

interface DispatchProps {
  addTodo: typeof addTodo;
}

export type StoreProps = DispatchProps

export default connect(null, { addTodo })(TodoInput);
