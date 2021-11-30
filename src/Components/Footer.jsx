import React from 'react'
import { FaGooglePlusG, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <ul className="main">

          <li>
            <ul className="copyright-container">
              <li className="em">© HomeGuru+ 2021</li>
              <li className="divider"></li>
              <li>All Rights Reserved</li>
            </ul>
          </li>

          <li>
            <ul className="social-container">
              <li>
                <FaGooglePlusG />
              </li>
              <li>
                < FaTwitter />
              </li>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>

          </li>
        </ul>
      </div>
      
    </footer>
  )
}

export default Footer
