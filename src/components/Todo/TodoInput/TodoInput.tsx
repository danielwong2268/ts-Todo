import * as React from 'react'
import { StoreProps } from './TodoInputContainer'

enum RejectionReason {
  NO_DESCRIPTION = 'Please enter a description',
  NO_STORY_POINTS = 'Please enter a non-zero story point value',
  VALID = 'VALID'
}

interface AppState {
  todoTextInput: string;
  storyPoints: number;
}

export default class TodoInput extends React.Component<StoreProps, AppState> {
  constructor(props: StoreProps) {
    super(props)

    this.state = {
      todoTextInput: '',
      storyPoints: 0
    }
  }

  validateTodo = (): RejectionReason => {
    if (this.state.todoTextInput === '') {
      return RejectionReason.NO_DESCRIPTION
    } else if (this.state.storyPoints === 0) {
      return  RejectionReason.NO_STORY_POINTS
    }

    return RejectionReason.VALID
  }

  addTodoAction = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const { addTodo } = this.props
    const { todoTextInput, storyPoints } = this.state

    const rejectionReason: RejectionReason = this.validateTodo();

    if (rejectionReason !== RejectionReason.VALID) {
      return alert(rejectionReason)
    }

    addTodo(todoTextInput, storyPoints)

    this.resetInput()
  }

  resetInput = () => {
    this.setState({ todoTextInput: '', storyPoints: 0 })
  }

  updateTodoText = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    this.setState({
      todoTextInput: value
    })
  }

  incrementStoryPoints = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      storyPoints: this.state.storyPoints + 1
    })
  }

  decrementStoryPoints = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (this.state.storyPoints === 0) {
      return alert('cannot go below 0')
    }

    this.setState({
      storyPoints: this.state.storyPoints - 1
    })
  }

  render() {
    const { todoTextInput, storyPoints } = this.state;

    return (
      <div>
        <input
          className="mr3"
          onChange={this.updateTodoText}
          value={todoTextInput}
          placeholder="Description"
        />
        <span>Story points: {storyPoints}</span>
        <button onClick={this.incrementStoryPoints} className="ma2">+</button>
        <button onClick={this.decrementStoryPoints} className="ma2">-</button>
        <button onClick={this.addTodoAction}>
          Add Todo
        </button>
      </div>
    )
  }
}
