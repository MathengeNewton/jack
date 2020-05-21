import React,{Fragment, useState} from 'react'
import Media from 'react-media'
import './landingpage.css'
import Body from '../body/body'
import Footer from '../footer/footer'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

let Landingpage = ()=> {
let [navclass, setNavclass]= useState("navitems");
let[nstyle,setNstyle] = useState("");
let [nhide,setNhide] = useState("none")

let navview = {
    display:nstyle
}
let navhide = {
    paddingBottom:'20%',
    display:nhide
}
let viewnav =()=>{
    setNavclass(navclass = "")
    setNstyle(nstyle = "none")
    setNhide(nhide="")
}
let hidenav = ()=>{
    setNavclass(navclass = "navitems")
    setNstyle(nstyle = "")
    setNhide(nhide="none")
}
    return(
        <div className="homepage">
        <Media 
        queries={{
            small: "(max-width: 720px)",
            // medium:"(min-width: 551px) (max-width:999px)",
            large:"(min-width: 721px)"
        }}>
            {matches=> (
                <Fragment>
                {matches.small &&
                <>
                <div className="page">
                    <header className="headersmall">
                        <h4>jack_dreds _54</h4>
                    </header>
                    <dropdown className="navlist">
                        <div className="navicon" >
                            <MenuIcon onClick={viewnav} color="black" style={navview}/>
                            <CloseIcon onClick={hidenav} color="black" style={navhide} />
                        </div>
                        <navlist id="navitems" className={navclass}>
                           <div><a href=".">Home   </a></div>
                           <div><a href=".">gallery</a></div>
                           <div><a href=".">contacts</a></div>
                        </navlist>
                    </dropdown>
                </div>
                <body>
                    <Body />
                </body>
                </>
                }
                {matches.large &&
                <>
                <div className="page">
                    <logo className="llogo">
                        <div className="logo">
                            <img className="largelogo" src="logo.jpg" alt=""/>
                        </div>
                    </logo>
                    <navlist className="navigations">
                        <a href=".">Home</a>
                        <a href=".">gallery</a>
                        <a href=".">contacts</a>
                    </navlist>
                </div> 
                <body className="body">
                    <Body />
                </body>
                </>   
                }
            </Fragment>
            )}
          </Media>
          <div className="footer">
                <Footer />
          </div>
      </div>
    )
}

export default Landingpage