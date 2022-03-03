import React from 'react'
import { animated, useTransition } from 'react-spring'
import CrossIcon from '@seaweb/coral/icons/Cross'

const Sidesheet = ({ open, toggle }) => {

  const transitions = useTransition(open, {
    from: { width: 0 },
    enter: {width: 320, config: { mass: .5, friction: 24, tension: 200 }},
    leave: { width: 0, config: { mass: .25, friction: 18, tension: 260 }},
  })

  return transitions((style, show) => show 
  && (
    <animated.div style={style} className="coral sidesheet">
      <div className="sidesheet-container">
        <div className="sidesheet-title">
          <h3>Title</h3>
          <div className="close-container" onClick={toggle}><CrossIcon /></div>
        </div>
        <div className="sidesheet-body">
          <div className="arrow left" /><hr style={{ transform: 'translateX(-4.5px)' }} /><p>320px</p><hr style={{ transform: 'translateX(4.5px)' }} /><div className="arrow right"></div>
        </div>
      </div>
    </animated.div>
  ))  
}

export default Sidesheet