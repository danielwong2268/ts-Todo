import * as React from 'react';
import TodoStatus from 'models/Todo/TodoStatus'
import TodoItem from '../TodoItem/TodoItem'
import { StoreProps } from './TodoItemsContainer'

const TodoItems = ({ todos, updateStatus }: StoreProps) => {
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
              updateStatus={(status: TodoStatus) => updateStatus(i, status)}
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
