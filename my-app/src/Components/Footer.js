import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa';
import '../styles/Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter />
            </div>
            <p>&copy; 2023 Nimra Mushtaq</p>
        </div>
    )
}

export default Footer