import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    // const activeStyle = {
    //     fontWeight: "bold",
    //     textDecoration: "underline",
    //     color: "red"
    // } // for inline styling
  return (
    <header className='header'>
      <Link to="/" className='site-logo' >#VANLIFE</Link>
      <nav>
            {/* <NavLink to='/host' style={({isActive})=> isActive? activeStyle : null }>Host</NavLink>  for inline styling*/}

            <NavLink to='/host' className={({isActive})=> isActive? 'active-style' : null }>Host</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive? 'active-style' : null }>About</NavLink>
            <NavLink to="/vans" className={({isActive})=> isActive? 'active-style' : null }>Vans</NavLink>
      </nav>
      </header>
  )
}

export default Header
