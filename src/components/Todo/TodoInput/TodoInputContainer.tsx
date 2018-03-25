import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { addTodo } from '../../../redux/Todo/actions/todoActions'
import { StoreState } from '../../../redux/store'
import TodoInput from './TodoInput'

interface DispatchProps {
  addTodo: typeof addTodo;
}

export type StoreProps = DispatchProps

const mapDispatchToProps = (dispatch: Dispatch<StoreState>): DispatchProps => {
  return {
    addTodo: bindActionCreators(addTodo, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(TodoInput);
