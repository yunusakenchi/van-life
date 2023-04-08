import React from 'react'
import { Link } from 'react-router-dom'

function HostVans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch('/api/host/vans')
          .then(res => res.json())
          .then(data => setVans(data.vans))
    },[])

    const hostVanElements = vans.map(van => (
        <Link to={`/host/vans/${van.id}`} key={van.id} className='host-van-link-wrapper'>
            <div className='host-van-single' key={van.id}>
                <img src={van.imageUrl} alt={`${van.name} photo`} />
                <div className='host-van-info'>
                    <h3>{van.name}</h3>
                    <p>₦{van.price}/day</p>
                </div>
            </div>
        </Link>
    ))
  return (
    <section>
        <h1 className="host-vans-title">Your listed vans</h1>
        <div className="host-vans-list">
            {
            vans.length > 0 ? (
            <section>
                {hostVanElements}
            </section>
            ) : <h2>Loading...</h2>
            }
        </div>      
    </section>
  )
}

export default HostVans
