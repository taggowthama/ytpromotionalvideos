import React from 'react'  
import '../styles/ytembed.css'
function Youtubeembed({embedId}) {
    
    return (
        <div className="youtubeembed">
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
               <a href="https://apps.apple.com/us/app/google-maps-transit-food/id585027354"> <img src="https://www.thewalkingdeadwine.com/-/media/Images/LivingWineLabels/App-badges/app-store-badge.ashx?la=en&modified=20171206144926&hash=FCC6273C3A86289D18FBFD98914AB3D241B88B0E" alt="apple_store" 
                className="tube__appleimg"/></a>
                </div>
                
            </div>
      </div> 
    )
}

export default Youtubeembed;

