import React from 'react'
import './banner.css'
import arrow from '../../assets/arrow.png'
const Banner = () => {
  return (
    <div className='banner Container' >
        <div className='bannerContent'>
            <h1>Professional Video Production Company in Pakistan</h1>
            <p>Located in Karachi, we create compelling video content that captivates audiences, inspires action and drives results.</p>
            <button className='btn'>Explore more <img src={arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Banner