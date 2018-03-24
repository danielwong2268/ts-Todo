import * as React from 'react'
import { map } from 'lodash'
import { Status } from '../../models/Todo'

import { UpdateFilter } from '../../actions/updateFilter'

interface TodoFilterOption {
  selected: boolean;
  onClick: () => void;
  children: string;
}

const TodoFilterOption = ({
  children,
  selected,
  onClick
}: TodoFilterOption) => {
  const className = `mh1${selected ? ' fw8 red' : ''}`

  return (
    <a className={className} onClick={onClick}>
      {children}
    </a>
  )
}

interface TodoFilterOptionsProps {
  currentFilter: Status | null;
  updateFilter: (nextFilter: Status | null) => UpdateFilter;
}

const TodoFilterOptions = ({
  currentFilter,
  updateFilter
}: TodoFilterOptionsProps) => {
  return (
    <div className="mt4">
      <TodoFilterOption
        selected={!currentFilter}
        onClick={() => updateFilter(null)}
      >
        ALL
      </TodoFilterOption>
      {
        map(Status, (status) => {
          return (
            <TodoFilterOption
              selected={currentFilter === status}
              key={status}
              onClick={() => updateFilter(Status[status])}
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