import * as React from 'react';
import TodoStatus from '../../../models/Todo/TodoStatus'
import Todo from '../../../models/Todo/Todo'

interface TodoProps {
  todo: Todo;
  updateStatus: (status: TodoStatus) => void;
}

class TodoItem extends React.Component<TodoProps> {
  updateTodoState = (e: React.FormEvent<HTMLSelectElement>) => {
    const { updateStatus } = this.props
    const { value } = e.currentTarget

    updateStatus(value as TodoStatus)
  }

  render() {
    const { todo } = this.props;

    return (
      <div className="ma2">
        <span>{todo.text}</span>
        <span className="ml5">story points: {todo.storyPoints}</span>
        <select className="ml5" value={todo.status} onChange={this.updateTodoState}>
          <option value={TodoStatus.CREATED}>Created</option>
          <option value={TodoStatus.IN_PROGRESS}>In Progress</option>
          <option value={TodoStatus.DONE}>Done</option>
        </select>
      </div>
    )
  }
}

export default TodoItem