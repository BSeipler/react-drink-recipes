import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DrinksPage from './pages/DrinksPage'
import DrinkForm from './components/DrinkForm'
import DrinkDetailsPage from './pages/DrinkDetailsPage'
import Footer from './components/Footer'

function App () {
  return (
    <div>
      <Router>
        <NavBar />
        <DrinkForm />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/drinks/:drink' component={DrinksPage} />
          <Route exact path='/drink/details/:id' component={DrinkDetailsPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
