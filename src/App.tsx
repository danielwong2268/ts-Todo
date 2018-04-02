import * as React from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import './App.css'

import Routes from './routes'
import Sidebar from 'components/Sidebar/Sidebar'
import Header from 'components/Header/Header'

const App: React.SFC = () => (
  <div className="App">
    <Header />
    <Router history={createBrowserHistory()}>
      <div className="flex justify-center">
        <Sidebar className="w-20 ma2 pa4" />
        <Routes />
      </div>
    </Router>
 </div>
)

export default App