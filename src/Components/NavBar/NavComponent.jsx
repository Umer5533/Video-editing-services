import React, { useEffect, useState } from 'react'
import './NavComponent.css'
import {Link} from 'react-scroll'
import {NavLink} from 'react-router-dom'
import menuIcon from '../../assets/menuu.png'

const NavComponent = () => {

    const [sticky, setsticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 100 ? setsticky(true) : setsticky(false);
        })
    },[])

    const [mobileMenu, setmobileMenu] = useState(false)
    const toggleMenu = ()=>{
            mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
    }

 

  return (
    <nav className={`Container ${sticky? 'dark-nav' : ''}`}>
        <h2 className={mobileMenu ? 'anchor': 'h2Opacity'} >NextGen Media Solutions</h2>

        <ul className={mobileMenu ? '' : 'hideMobileNav'}>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` ${mobileMenu ? 'my': 'anchor '} ${isActive? 'blue' : 'yellow'}`} to="/" >Home</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` ${mobileMenu ? 'my': 'anchor '}`} to="/services" >Services</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className=  {({isActive})=> ` ${mobileMenu ? 'my': 'anchor '}`} to='/ourwork' >OurWork</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className=  {({isActive})=> ` ${mobileMenu ? 'my': 'anchor '}`} to='/ourClients' >OurClients</NavLink></li>
            <li ><NavLink onClick={toggleMenu} className = {({isActive})=> ` ${mobileMenu ? 'my': 'anchor '}`}  to='/contact' >Contact</NavLink></li>
           
        </ul>

        <img src={menuIcon} alt="" className='open' onClick={toggleMenu} />

      
    </nav>
  )
}

export default NavComponent