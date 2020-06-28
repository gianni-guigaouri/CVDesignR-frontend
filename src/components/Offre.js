import React, { Component } from 'react'
import MyModal from './MyModal'

export default class Offre extends Component {
  render () {
    const date = new Intl.DateTimeFormat().format(this.props.createdAt)
    return (
      <li className='mb-3 list-items'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title mb-3'>{this.props.offre.job_title}</h5>
            <h6 className='card-subtitle mb-3'>{this.props.offre.company_name}</h6>
            <h6 className='card-subtitle mb-3'>
              {this.props.offre.location.dep_code} {this.props.offre.location.locality}
            </h6>
            <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <h6 className='card-subtitle mb-2 text-muted'>{date}</h6>
            <MyModal offre={this.props.offre} date={date} />
          </div>
        </div>
      </li>
    )
  }
}
