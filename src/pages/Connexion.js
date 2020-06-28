import React, { Component } from 'react'
import axios from 'axios'

export default class Connexion extends Component {
  constructor (props) {
    super(props)
    const token = localStorage.getItem('token')
    let loggedIn = true
    if (token == null) {
      loggedIn = false
    }
    this.state = {
      password: '',
      errors: {},
      loggedIn
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const userData = {
      email: localStorage.email,
      password: this.state.password
    }
      axios
      .post('/connexion', userData)
      .then((res) => {     
        localStorage.setItem('token', res.data.token) 
        this.setState({
          loggedIn: true
        }) 
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data
        })
      })
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    if (this.state.loggedIn) {
      return window.location.href = '/accueil'
    }
    return (
      <div className='body-content'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <form onSubmit={this.handleSubmit}>
              <h3>Connexion</h3>

              <div className='form-group'>
                <label>Mot de passe</label>
                <input 
                  type='password' 
                  name='password'
                  id='password'
                  className='form-control mb-3' 
                  placeholder='Veuillez saisir votre mot de passe' 
                  value={this.state.password}
                  onChange={this.handleChange}   
                />
                  {this.state.errors && (
                    <small id="passwordHelpInline" className="pt-3">
                      {this.state.errors.password}
                    </small>
                    )}
              </div>

              <button type='submit' className='btn btn-primary btn-block'>Submit</button>
              <p className='forgot-password text-right'>
                        Forgot <a href='/'>password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
