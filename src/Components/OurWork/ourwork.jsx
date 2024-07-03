import React from 'react'
import './ourwork.css'
import Yone from '../../assets/y1.jpg'
import Ytwo from '../../assets/y2.jpeg'
import Ythree from '../../assets/y3.jpg'
import yticon from '../../assets/youtube.png'


const Ourwork = () => {
  return (
    <div className='OURWORKS'>
        <div className='ourwork'>
            <img className='back-img' src={Yone} alt="" />
            <div className='caption'>
                <img src={yticon} alt="" />
                <p>Work with Youtube</p>
            </div>
        </div>
        <div className='ourwork'>
            <img className='back-img' src={Ytwo} alt="" />
            <div className='caption'>
                <img src={yticon} alt="" />
                <p>Work with Youtube</p>
            </div>
        </div>
        <div className='ourwork'>
            <img className='back-img' src={Ythree} alt="" />
            <div className='caption'>
                <img src={yticon} alt="" />
                <p>Work with Youtube</p>
            </div>
        </div>
    </div>
  )
}

export default Ourwork