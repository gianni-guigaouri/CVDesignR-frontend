import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// components
import Offre from '../components/Offre'
import Sidebar from '../components/SideBar'
import Fetching from '../components/Fetching'

class Accueil extends React.Component {
  constructor (props) {
    super(props)
    const token = localStorage.getItem('token')
    let loggedIn = true
    if (token == null) {
      loggedIn = false
    }

    this.state = {
      offres: null,
      fetching: true,
      loggedIn
    }
  }

  componentDidMount () {
    axios
      .get('/offers')
      .then((res) => {
        setTimeout(() => {
          this.setState({
            fetching: false,
            offres: res.data
          })
        }, 1000)
      })
      .catch((err) => console.log(err))
  }

  render () {
    if (this.state.loggedIn === false) {
      return <Redirect to='/' />
    }
    return (
      <>
        <div className='body-content'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='blankBox' />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-2'>
              <Sidebar />
            </div>
            <div className='col-lg-8'>
              <ul className='list-group m-3 listOffres'>
                {this.state.offres
                  ? (
                    this.state.offres.map((offre) => <Offre offre={offre} key={offre._id} />)
                  )
                  : this.state.fetching ? <Fetching /> : null}
              </ul>

            </div>
            <div className='col-lg-2'>
              <Sidebar />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Accueil
