import { useState } from 'react'
import './style/navbar.css'

export default function Navbar(){
    let[isActive,setIsActive]=useState(false);

    const handleMenu =()=>{
        setIsActive(!isActive)

    }
    return(
        <>
        <nav>
            <div className="logo">
                <img src="src\components\image\ats-logo2.png" alt="logo" height={"80vh"}/>
            </div>
            <div className="nav-links" >
                 <li><a href="#">Solutions</a></li>
                 <li><a href="#">Company</a></li>
                 <li><a href="#">Case Studies</a></li>
                 <li><a href="#">Blog </a></li>
                 <li><a href="#">Resourse</a></li>
            </div>
            <div className="nav-btn">
                <div className="inquiry">
                    <button>General Inquiries <i className="fa-solid fa-arrow-right"></i></button><br />
                    <a href="#">contact@asian-technology.com</a>
                </div>
                <div className="contact-btn">
                    <button>Contact Us</button>
                </div>
            </div>
            <div className="hamsbergur">
                <button onClick={handleMenu}>
                      {isActive?<i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}
                </button>
            </div>
        </nav>
        <hr />
        <div id={isActive?'active-link':'link'}>
                 <li><a href="#">Solutions</a></li>
                 <li><a href="#">Company</a></li>
                 <li><a href="#">Case Studies</a></li>
                 <li><a href="#">Blog </a></li>
                 <li><a href="#">Resourse</a></li>
        </div>
        </>
    )
}