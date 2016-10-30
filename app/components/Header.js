import React from 'react'

const Header = () => (
  <div className='navbar navbar-default navbar-fixed-top'>
    <div className='container'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <a className='navbar-brand' href='#'>Movies</a>
      </div>
      <div id='navbar' className='collapse navbar-collapse'>
      </div>
    </div>
  </div>
)

export default Header
