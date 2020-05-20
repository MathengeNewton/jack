import React,{useState} from 'react'
import './body.css'

let Body = () =>{
    let [cimage, setImage] = useState('logo.jpg')
    let changeImage = () =>{
        setImage(cimage = "logo.jpg")
    }
    return(
        <div className="body">
            <div className="homeTitle">
                <h3>Based Next to Nyayo highrise estate along Mbagathi road</h3>
                <h4>For bookings call/Whatsapp</h4>
                <div className="contact-box">
                0717176062
                </div>
            </div>
            <div className="corassel">
                <img src= {cimage} alt = "" onLoad={changeImage}/>
            </div>         
        </div>
    )
}
export default Body