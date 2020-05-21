import React from 'react'
import './footer.css'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookSquare } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

let Footer =()=>{
    return(
        <div className="footer">
            <div className="copyright">
            Copyright © 2020
            </div>
            <div className="links">
                <a href="https://www.instagram.com/jack_dreads_254/"><FiInstagram /></a>
                <a href="https://www.facebook.com/jack.gazateacha"><FaFacebookSquare /></a>
                <a href="."><FiTwitter /></a>
            </div>
        </div>
    )
}
export default Footer