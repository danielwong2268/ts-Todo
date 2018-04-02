import * as React from 'react'

import TodoInput from 'components/Todo/TodoInput/TodoInputContainer'
import TodoItems from 'components/Todo/TodoItems/TodoItemsContainer'
import TodoFilterOptions from 'components/Todo/TodoFilterOptions/TodoFilterOptionsContainer'

const TodosView = () => (
  <div>
    <TodoInput />
    <TodoItems />
    <TodoFilterOptions />
  </div>
) 

export default TodosView