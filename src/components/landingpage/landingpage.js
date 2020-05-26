import React,{Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Media from 'react-media'
import './landingpage.css'
import Body from '../body/body'
import Gallery from '../gallery/gallery'
import Contacts from '../contacts/contacts'
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
                         <div><a href="/contacts">contacts</a></div>                        
                    </dropdown>
                </div>
                <body className="body">                  
                        <Switch>
                            <Route path="/" exact component={Body} />                                
                            <Route path="/gallery" exact component={Gallery} /> 
                            <Route path="/contacts" exact component={Contacts} />                          
                        </Switch>
                </body>
                </>
                }
                {matches.large &&
                <>
                <div className="lnavbar">
                    <div className="llogo">
                        <a href="/"> 
                        <div className="largelogo">
                            JACK_DREDS_254
                        </div>
                        </a>
                    </div>
                    <div className="navigations">
                        <a href="/gallery">gallery</a>
                        <a href="/contacts">contacts</a>
                    </div>
                </div> 
                <div className="body">
                <Switch>
                    <Route path="/" exact component={Body} />
                    <Route path="/gallery" exact component={Gallery}/>
                    <Route path="/contacts" exact component={Contacts} />
                </Switch>                  
                </div>
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