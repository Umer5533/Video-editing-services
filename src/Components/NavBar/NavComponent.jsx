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
    <nav className="fixed lg:absolute lg:w-6/12 lg:right-10 right-6 top-10 bg-custom-lightblue-rgb rounded">

        <ul className={ ` lg:w-11/12 lg:mx-auto bg-custom-lightblue-rgb lg:text-center ${mobileMenu ? '' : 'hideMobileNav'}`}>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` lg:hover:text-custom-pink-rgb ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-custom-pink-rgb  lg:uppercase' : 'white'}`} to="/" >Home</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` lg:hover:text-custom-pink-rgb ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-custom-pink-rgb  lg:uppercase' : 'white'}`} to="/services" >Services</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className=  {({isActive})=> ` lg:hover:text-custom-pink-rgb ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-custom-pink-rgb  lg:uppercase' : 'white'}`} to='/ourwork' >OurWork</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className=  {({isActive})=> ` lg:hover:text-custom-pink-rgb ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-custom-pink-rgb  lg:uppercase' : 'white'}`} to='/ourClients' >OurClients</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` lg:hover:text-white lg:hover:bg-custom-pink-rgb  lg:text-custom-pink-rgb lg:px-8 lg:py-2 rounded ${mobileMenu ? 'my': 'anchor '} ${isActive? 'lg:text-white  lg:bg-custom-pink-rgb ' : 'lg:bg-white lg:text-custom-pink-rgb'}`}  to='/contact' >Contact</NavLink></li>
           
        </ul>

        <img src={menuIcon} alt="" className='open' onClick={toggleMenu} />

      
    </nav>
      </>
  )
}

export default NavComponent