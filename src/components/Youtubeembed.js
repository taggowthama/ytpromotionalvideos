import React from 'react'  
import '../styles/ytembed.css'
function Youtubeembed({embedId}) {
    
    return (
        <div className="youtubeembed">
            <h1 className="tube_ytheader">Youtube Embed with playstore link</h1>
            <div className="tube__embed">
                <div className="tube__video-responsive">
                <iframe
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen  
                title="Embedded youtube"
            />
                </div>

                <div className="tube__image">
                <a href="https://apps.apple.com/us/app/google-maps-transit-food/id585027354"> <img src="https://images.squarespace-cdn.com/content/v1/54c1505ee4b039d958fe469f/1579885535974-6HRFQ5NN4LT0GGBUS026/ke17ZwdGBToddI8pDm48kNTWbbZOidQ7db0uRiXcVYVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzS8ZX_oz1Qpegfj9hZYw-VgTm2MqUgN0L1CiD2r5PokNjWVKDnk8wQ90pUuSjwpYY/playstore-icon.png" alt="apple_store" 
                    className="tube__appleimg"/></a>
                </div>
                
            </div>
      </div> 
    )
}

export default Youtubeembed;

