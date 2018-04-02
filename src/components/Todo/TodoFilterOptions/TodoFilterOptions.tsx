import * as React from 'react'
import { map } from 'lodash'
import TodoStatus from 'models/Todo/TodoStatus'
import { StoreProps } from './TodoFilterOptionsContainer'

interface TodoFilterOptionProps {
  selected: boolean;
  onClick: () => void;
  children: string;
}

const TodoFilterOption = ({
  children,
  selected,
  onClick
}: TodoFilterOptionProps) => {
  const className = `mh1${selected ? ' fw8 red' : ''}`

  return (
    <a className={className} onClick={onClick}>
      {children}
    </a>
  )
}

const TodoFilterOptions = ({
  currentFilter,
  updateFilter
}: StoreProps) => {
  return (
    <div className="mt4">
      <TodoFilterOption
        selected={!currentFilter}
        onClick={() => updateFilter(null)}
      >
        ALL
      </TodoFilterOption>
      {
        map(TodoStatus, (status) => {
          return (
            <TodoFilterOption
              selected={currentFilter === status}
              key={status}
              onClick={() => updateFilter(TodoStatus[status])}
            >
              {status}
            </TodoFilterOption>
          )
        })
      }
    </div>
  )
}

export default TodoFilterOptions