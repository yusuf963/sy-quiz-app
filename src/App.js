import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Nav from './Component/Nav'
import Quiz from './Component/Quiz'


import './styles/style.scss'

const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={() => <HomePage />} />
      <Route path="/home" component={() => <HomePage />} />
      <Route path="/quiz" component={Quiz} />
      <Route path='/notfound' component={() => <NotFound />} />
      <Redirect exact from='/' to='/home' />
      <Redirect to='/notfound' component={() => <NotFound />} />
    </Switch>
  </BrowserRouter>

)

const HomePage = () => {
  return <h1>Hello world</h1>
}

export default App