import React from 'react'
import { useParams } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function HostVanDetail() {
  const params = useParams()
  console.log(params)
  const [currentVan, setCurrentVan] = React.useState({})

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.idNumber}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans))
  },[])

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  const activeRoute = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <section>
      {/* <Link to="/host/vans" className="back-button">&larr; <span>Back to all vans</span></Link>  this or the one below*/}

      <Link to=".." relative='path' className="back-button">&larr; <span>Back to all vans</span></Link>
      <div className='host-van-detail-layout-container'>
        <div className='host-van-detail'>
          <img src={currentVan.imageUrl} />
          <div className='host-van-detail-info-text'>
            <i className={`van-type van-type-${currentVan.type}`}>{currentVan.type}</i>
            <h3>{currentVan.name}</h3>
            <h4>{currentVan.price}</h4>
          </div>
        </div>
        <nav className='host-van-detail-nav'>
          <NavLink end style={({isActive}) => isActive ? activeRoute : null} to=''>Details</NavLink>
          <NavLink to={`pricing`} style={({isActive}) => isActive ? activeRoute : null} >Pricing</NavLink>
          <NavLink to={`photos`} style={({isActive}) => isActive ? activeRoute : null} >Photos</NavLink>
        </nav>
        <Outlet context={[currentVan, setCurrentVan]} />
      </div>
    </section>
  )
}

export default HostVanDetail
