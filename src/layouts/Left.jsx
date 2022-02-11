import React from 'react'
import { animated, useSpring } from 'react-spring'

const Left = ({ active, bg, children, style, component }) => {

  const appear = useSpring({ opacity: active ? 1 : 0 })
  const up = useSpring({ y: active ? 0 : 150})

  return (
    <div className='left' style={style}>
      <animated.div className="bg cover full-height" style={{...appear, backgroundImage: `url(${bg})` }}>
        {component}
      </animated.div>
      <animated.div style={{...up, ...appear}} className="content">
        {children}
      </animated.div>
    </div>
  )
}

export default Left