import * as React from 'react'
import { Route, Switch } from 'react-router'

import TodosView from 'views/TodosView'
import FormView from 'views/FormsView'

const Routes = () => (
  <Switch>
    <div className="ba ma2 pa4 w-60">
      <Route path="/todos" component={TodosView} />
      <Route path="/forms" component={FormView} />
    </div>
  </Switch>
)

export default Routes