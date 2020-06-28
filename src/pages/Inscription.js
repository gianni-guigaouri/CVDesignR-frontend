import React, { Component } from 'react'

import axios from 'axios'

export default class Inscription extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newUserData = {
      email: this.state.email,
      password: this.state.password
    }
      axios
      .post('/inscription', newUserData)
      .then((res) => {       
        localStorage.setItem('email', res.data.user.email)
        localStorage.setItem('token', res.data.token)
        this.props.history.push('/')
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
    return (

      <div className='body-content'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <form onSubmit={this.handleSubmit}>
              <h3>Inscription</h3>

              <div className='form-group'>
                <label>Email</label>
                <input 
                  type='email' 
                  name='email'
                  id='email'
                  className='form-control mb-3' 
                  placeholder='saisir une adresse email' 
                  value={this.state.email}
                  onChange={this.handleChange}   
                />
                  {this.state.errors && (
                    <small id="passwordHelpInline" className="pt-3">
                      {this.state.errors.email}
                    </small>
                    )}
              </div>

              <div className='form-group'>
                <label>Password</label>
                <input 
                  type='password' 
                  name='password'
                  id='password'
                  className='form-control mb-3' 
                  placeholder='Enter password' 
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

