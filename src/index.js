import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Account from './views/account'
import Login from './views/login'
import Shop from './views/shop'
import Home from './views/home'
import SignUp from './views/sign-up'
import ItemDetails from './views/item-details'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Account} path="/account" />
        <Route exact component={Login} path="/login" />
        <Route exact component={Shop} path="/shop" />
        <Route exact component={Home} path="/" />
        <Route exact component={SignUp} path="/sign-up" />
        <Route exact component={ItemDetails} path="/item-details" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
