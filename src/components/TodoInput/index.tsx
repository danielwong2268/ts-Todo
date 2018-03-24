import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import { addTodo } from '../../actions/addTodo'
import { ImmutableState } from '../../reducers'
import TodoInput from './TodoInput'

const mapDispatchToProps = (dispatch: Dispatch<ImmutableState>) => {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(TodoInput);