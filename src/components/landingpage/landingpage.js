import React,{Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Media from 'react-media'
import './landingpage.css'
import Body from '../body/body'
import Gallery from '../gallery/gallery'
import Footer from '../footer/footer'

let Landingpage = ()=> {



    return(
        <div className="homepage">
        <Router>
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
                <div className="navbar">
                    <header className="headersmall">
                        <a href="/"><h4>jack_dreds _54</h4></a>
                    </header>
                    <dropdown className="smallnavlist">                        
                          <div><a href="/gallery">gallery</a></div>
                          <div><a href="/bookings">Bookings</a></div>
                         <div><a href="/contacts">contacts</a></div>                        
                    </dropdown>
                </div>
                <body>                  
                        <Switch>
                            <Route path="/" exact component={Body} />                                
                            <Route path="/gallery" exact component={Gallery} />                           
                        </Switch>
                </body>
                </>
                }
                {matches.large &&
                <>
                <div className="navbar">
                    <logo className="llogo">
                    <a href="/">  <div className="logo">
                            JACK_DREDS_254
                        </div>
                    </a>
                    </logo>
                    <navlist className="navigations">
                        <a href="/gallery">gallery</a>
                        <a href="/booking">Bookings</a>
                        <a href="/contacts">contacts</a>
                    </navlist>
                </div> 
                <body className="body">
                <Switch>
                    <Route path="/" exact component={Body} />
                    <Route path="/gallery" exact component={Gallery}/>
                </Switch>                        
                    
                </body>
                </>   
                }
            </Fragment>
            )}
          </Media>
          <div className="footer">
                <Footer />
          </div>
          </Router>
          </div>
    )
}


export default Landingpage