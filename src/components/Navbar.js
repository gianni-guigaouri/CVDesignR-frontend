import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { Button } from 'react-bootstrap'
import history from '../history'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      login: false
    }
  }

  componentDidMount () {
    if (history.location.pathname === '/accueil') {
      this.setState({
        login: true
      })
    }
  }

  render () {
    const { changeState } = this.props
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
        <NavLink className='navbar-brand' to='/'>
          <img src={logo} alt='' width='65' />
        </NavLink>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/connexion'>
                <Button
                  variant='outline-primary'
                  onClick={changeState}
                >{this.state.login ? 'DECONNEXION' : 'CONNEXION'}
                </Button>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/inscription'>
                <Button
                  variant='primary primary-nav outline-hover'
                >INSCRIPTION
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
