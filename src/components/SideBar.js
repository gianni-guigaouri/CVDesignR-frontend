import React, { Component } from 'react'

export default class SideBar extends Component {
  render () {
    return (
      <div className='sidebar mt-4'>
        <ul className='nav flex-column'>
          <li className='nav-item'>
            <a className='nav-link active' href='/'>Active</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>Link</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>Link</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='/' tabIndex='-1' aria-disabled='true'>Disabled</a>
          </li>
        </ul>
      </div>
    )
  }
}
