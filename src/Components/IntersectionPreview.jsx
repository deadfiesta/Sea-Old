
import React from 'react'

const IntersectionPreview = ({ vis }) => {
    return (
        <div className="intersectionpreview" style={vis 
            ? {
                position: "fixed",
                zIndex: 100,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: .5,
                backgroundColor: "purple",
                margin: "150px 0",

            }
            : {
                display: 'none',
            }
            
        } />
    )
}

export default IntersectionPreview
