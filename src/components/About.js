import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from '../assets/images/about-image.png'

function About() {
  return (
    <div>
      <img className='about-image' src={aboutImg} alt="Van Image" />
      <div className='about-page-content'>
        <h1>
            Don't squeeze in a sedon when you could relax in a van.
        </h1>
        <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) 
        </p>
        <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-page-sub">
        <h2>Your destination is waiting. <br />Your van is ready.</h2>
        <Link className='link-button' to="/vans">Explore your vans</Link>
      </div>
    </div>
  )
}

export default About
