import React, { useEffect, useState } from 'react'
import './NavComponent.css'
import {Link} from 'react-scroll'
import {NavLink} from 'react-router-dom'
import menuIcon from '../../assets/menuu.png'

const NavComponent = () => {

    const [sticky, setsticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setsticky(true) : setsticky(false);
        })
    },[])

    const [mobileMenu, setmobileMenu] = useState(false)
    const toggleMenu = ()=>{
            mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
    }

 

  return (
      <>
      {/* <h2 className={`text-custom-pink-rgb ${mobileMenu ? 'anchor': 'h2Opacity'}`} >NEXTGen</h2> */}
    {/* <nav className={`Container ${sticky? 'bg-custom-lightblue-rgb dark-nav' : ''}`}> */}
    <nav className="fixed lg:absolute lg:w-6/12 lg:right-10 right-4 top-10 bg-custom-lightblue-rgb lg:bg-white rounded">

        <ul className={ ` lg:w-full lg:py-1 rounded  bg-custom-lightblue-rgb lg:text-center ${mobileMenu ? '' : 'hideMobileNav'}`}>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded  ' : ''}`} to="/" >Home</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded  ' : ''}`} to="/services" >Services</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className=  {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded  ' : ''}`} to='/ourwork' >OurWork</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className=  {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded  ' : ''}`} to='/ourClients' >OurClients</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` hover:text-custom-pink-rgb transition-all ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white lg:hover:text-white lg:bg-custom-pink-rgb lg:px-6 lg:py-3 rounded' : ' '}`}  to='/contact' >Contact</NavLink></li>
           
        </ul>

        <img src={menuIcon} alt="" className='open' onClick={toggleMenu} />

      
    </nav>
      </>
  )
}

export default NavComponent