import { connect } from 'react-redux'
import { StoreState } from '../../../redux/store'
import { updateFilter } from '../../../redux/Todo/actions/todoActionCreators'
import TodoFilterOptions from './TodoFilterOptions'
import TodoStatus from '../../../models/Todo/TodoStatus'

interface StateProps {
  currentFilter: TodoStatus | null;
}

interface DispatchProps {
  updateFilter: typeof updateFilter;
}

export type StoreProps = StateProps & DispatchProps 

const mapStateToProps = (state: StoreState): StateProps => {
  return {
    currentFilter: state.todo.currentFilterStatus
  }
}

export default connect(mapStateToProps, { updateFilter })(TodoFilterOptions)
