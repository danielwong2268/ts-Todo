import * as React from 'react';
import { Todo, Status } from '../../models/Todo'

interface TodoProps {
  todo: Todo;
  updateStatus: (status: Status) => void;
}

class TodoItem extends React.Component<TodoProps> {
  updateTodoState = (e: React.FormEvent<HTMLSelectElement>) => {
    const { updateStatus } = this.props
    const { value } = e.currentTarget

    updateStatus(value as Status)
  }

  render() {
    const { todo } = this.props;

    return (
      <div className="ma2">
        <span>{todo.text}</span>
        <span className="ml5">story points: {todo.storyPoints}</span>
        <select className="ml5" value={todo.status} onChange={this.updateTodoState}>
          <option value={Status.CREATED}>Created</option>
          <option value={Status.IN_PROGRESS}>In Progress</option>
          <option value={Status.DONE}>Done</option>
        </select>
      </div>
    )
  }
}

export default TodoItem