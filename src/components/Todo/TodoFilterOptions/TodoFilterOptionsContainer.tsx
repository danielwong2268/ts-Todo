import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { StoreState } from '../../../redux/store'
import { updateFilter } from '../../../redux/Todo/actions/todoActions'
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

const mapDispatchToProps = (dispatch: Dispatch<StoreState>): DispatchProps => {
  return {
    updateFilter: bindActionCreators(updateFilter, dispatch)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilterOptions)
