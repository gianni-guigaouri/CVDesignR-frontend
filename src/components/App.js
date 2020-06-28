import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import history from '../history'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
// components
import Accueil from '../pages/Accueil'
import Connexion from '../pages/Connexion'
import Inscription from '../pages/Inscription'
import NavBar from './Navbar'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      changeBtn: false
    }
    this.ChangeState = this.changeState.bind(this)
  }

  changeState (event) {
    event.preventDefault()
    if (history.location.pathname !== '/connexion') {
      localStorage.removeItem('token')
      this.setState({
        changeBtn: !this.state.changeBtn
      })
      window.location.href = '/connexion'
    } 
  }

  render () {
    return (
      <section>
        <BrowserRouter>
          <NavBar
            changeBtn={this.state.changeBtn}
            changeState={this.ChangeState}
          />
          <Switch>
            <Route exact path='/' component={Connexion} />
            <Route path='/accueil' component={Accueil} />
            <Route path='/connexion' render={(props) => <Connexion {...props} changeState={this.changeState} />} />
            <Route path='/inscription' component={Inscription} />
          </Switch>
        </BrowserRouter>
      </section>
    )
  }
}
