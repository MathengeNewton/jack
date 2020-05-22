import React,{Fragment} from 'react'
import Media from 'react-media'
import ImageGrid from '../gridlist/gridlist'
import LargeGrid from '../gridlist/largegrid'

let Gallery =()=>{
    return(
        <div className="gallery">
            <Media 
            queries={{
                small: "(max-width: 720px)",
                // medium:"(min-width: 551px) (max-width:999px)",
                large:"(min-width: 721px)"
            }}>
            {matches=> (
                <Fragment>
                {matches.small &&
                <div className="gallerySmall">
                    <ImageGrid />
                </div>
                }
                {matches.large &&
                <div className="galleryLarge">
                    <LargeGrid />
                </div>
                }
                </Fragment>
            )}
            </Media>

        </div>
    )
}
export default Gallery