import React,{Fragment} from 'react'
import './body.css'
import Media from 'react-media'
import Slideshow from '../slideshow/slideshow'

let Body = () =>{    
    return(
        <div className="body">
         <Media 
            queries={{
                small: "(max-width: 720px)",
                // medium:"(min-width: 551px) (max-width:999px)",
                large:"(min-width: 721px)"
            }}>
            {matches=> (
                <Fragment>
                {matches.small &&
                <div className="homeTitle">
                    <div className="imageoverlay">
                        <Slideshow />
                    </div>
                    <div className="overlaycontent">
                        <h3>Based Next to Nyayo highrise estate along Mbagathi road</h3>
                        <h4>For bookings call/Whatsapp</h4>
                        <div className="contact-box">
                                0717176062
                        </div>
                    </div>
                </div>
            }
            {matches.large &&
            <div className="largeTitle">
                <div className="limageoverlay">                    
                    <img src="./bg-corousel/bg.jpg" className="img" alt=".."/>
                </div>
                <div className="largeoverlaycontent">
                    <h3>Based Next to Nyayo highrise estate along Mbagathi road</h3>
                    <h4>For bookings call/Whatsapp</h4>
                    <div className="contact-box">
                        0717176062
                    </div>
                </div>
         </div>
            }
                </Fragment>
             )}
        </Media>          
           
        </div>
    )
}
export default Body