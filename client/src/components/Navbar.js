import React from 'react'
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div>
        <nav>
            <a href="#" class="home">Parking Management System</a>
            <ul>    
                <li><a href="#">MY ACCOUNT</a></li>
                <li><a href="#">WALLET</a></li>
                <li><a href="#">PROFILE</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar