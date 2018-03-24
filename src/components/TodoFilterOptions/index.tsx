import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ImmutableState } from '../../reducers'
import { updateFilter } from '../../actions/updateFilter'
import TodoFilterOptions from './TodoFilterOptions'

const mapStateToProps = (state: ImmutableState) => {
  return {
    currentFilter: state.currentFilterStatus
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ImmutableState>) => {
  return bindActionCreators({ updateFilter }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilterOptions)