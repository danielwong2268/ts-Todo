import * as React from 'react';
import { Todo, Status } from '../../models/Todo'
import TodoItem from '../TodoItem'
import { UpdateStatus } from '../../actions/updateStatus'

export interface TodoItemProps {
  todos: Todo[];
  updateStatus: (index: number, filterStatus: Status) => UpdateStatus;
}

const TodoItems = ({ todos, updateStatus }: TodoItemProps) => {
  let content

  if (todos.length === 0) {
    content = <span>You do not have any todo items yet</span>
  } else {
    content = (
      <div>
        {
          todos.map((todo, i) => 
            <TodoItem
              key={i}
              todo={todo}
              updateStatus={(status: Status) => updateStatus(i, status)}
            />
          )
        }
      </div>
    )
  }

  return (
    <div className="mt3">
      {content}
    </div>
  )
}

export default TodoItems
