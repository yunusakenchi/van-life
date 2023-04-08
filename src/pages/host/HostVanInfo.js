import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanInfo() {
    const [currentVan, setCurrentVan] = useOutletContext()
  return (
    <section className='host-van-detail-info'>
        <h4>Name: <span>{currentVan.name}</span></h4>
        <h4>Category: <span>{currentVan.type}</span></h4>
        <h4>Description: <span>{currentVan.description}</span></h4>
        <h4>Visibilty: <span>Public</span></h4>
    </section>
  )
}

export default HostVanInfo
