import React from 'react'
import './Footer.css'
import youtubeIcon from '../../assets/youtubeIcon.png'
import facebookIcon from '../../assets/facebookIcon.png'
import instagramIcon from '../../assets/instagramIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
const Footer = () => {
  return (
    <>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-column">
                <h3>Contact Us</h3>
                <p>Phone: +1234567890</p>
                <p>Email: info@company.com</p>
                <p>Address: 123 Street, City, Country</p>
            </div>
            <div class="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Follow Us</h3>
                <ul class="social-icons">
                    <li><a href="#"><img src={youtubeIcon} alt="" /></a></li>
                    <li><a href="#"><img src={facebookIcon} alt="" /></a></li>
                    <li><a href="#"><img src={instagramIcon} alt="" /></a></li>
                    <li><a href="#"><img src={linkedinIcon} alt="" /></a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>About Us</h3>
                <p>We are a leading company in providing excellent services and solutions. Our goal is to meet customer satisfaction.</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 NextGen. All rights reserved.</p>
            <ul>
                <li>Terms of Services</li> 
                <li>|</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    </footer>
  
    </>


  )
}

export default Footer