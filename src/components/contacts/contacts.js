import React,{Fragment} from 'react'
import './contacts.css'
import Media from 'react-media'
import { GoLocation } from 'react-icons/go'
import { FiPhoneCall } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'

let Contacts =()=>{
    return(
        <>
        <Media 
            queries={{
                small: "(max-width: 1000px)",
                // medium:"(min-width: 551px) (max-width:999px)",
                large:"(min-width: 1001px)"
            }}>
                {matches=> (
                <Fragment>
                {matches.small &&
            <div className="scontacts">
                <div className="card">
                    <GoLocation />&nbsp;&nbsp; NYAYO HIGHRISE ESTATE ALONG MBAGATHI ROAD<br/><br /><br /><br />
                    <FiPhoneCall /> &nbsp;&nbsp; 0717176062 <br/><br/><br /><br />
                    <FiInstagram/> &nbsp;&nbsp; @jack_dreads_254 <br /><br/><br /><br />
                    <AiOutlineMail/> &nbsp;&nbsp; jackabou95@gmail.com <br /><br/><br /><br />
                </div>
                <div className="msg">
                    <header>leave a message</header>
                    <form className="sreturn">
                        <input type="text" placeholder="email.." /><br />
                        <textarea cols="45" rows="5">
                            Message...
                        </textarea><br /><br />
                        <input type="submit" value="send"/>
                    </form>
                </div>
            </div>
            }
        
                {matches.large &&
                <div className="contact">
                <img className="bgimage" src="/bg-corousel/bg.jpg" alt="."/>
                <div className="contactCard">
                    <GoLocation />&nbsp;&nbsp; NYAYO HIGHRISE ESTATE ALONG MBAGATHI ROAD<br/><br /><br /><br />
                    <FiPhoneCall /> &nbsp;&nbsp; 0717176062 <br/><br/><br /><br />
                    <FiInstagram/> &nbsp;&nbsp; @jack_dreads_254 <br /><br/><br /><br />
                    <AiOutlineMail/> &nbsp;&nbsp; jackabou95@gmail.com <br /><br/><br /><br />
                </div>
                <div className="messanger">
                    <header>leave a message</header>
                    <form className="return">
                        <input type="text" placeholder="email.." /><br />
                        <textarea cols="55" rows="7">
                            Message...
                        </textarea><br />
                        <input type="submit" value="send"/>
                    </form>
                </div>
            </div>
                }
                </Fragment>
                )}
        </Media>
        </>
    )
}
export default Contacts