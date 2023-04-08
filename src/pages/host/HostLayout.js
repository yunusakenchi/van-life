import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function HostLayout() {
    const activeRoute = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616"
    }
  return (
    <>
        <nav className='host-nav'> 
            <NavLink to='/host' end style={({isActive}) => isActive ? activeRoute : null}>Dashboard</NavLink> 
            {/* `end` property is added to the first NavLink to indicate that the link should only be considered active if the current URL matches the link exactly up to the path provided in the to prop. (If not two routes will be active at the same time if `end` is not added)  */}

            <NavLink to='/host/income' style={({isActive}) => isActive ? activeRoute : null}>Income</NavLink> 
            <NavLink to='/host/vans' style={({isActive}) => isActive ? activeRoute : null}>Vans</NavLink>
            <NavLink to='/host/reviews' style={({isActive}) => isActive ? activeRoute : null}>Reviews</NavLink>
        </nav>
        <Outlet />
    </>
  )
}

export default HostLayout
