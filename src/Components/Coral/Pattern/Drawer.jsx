import React from 'react'
import { useRef, useEffect } from 'react';
import { animated, useSpring, useTransition } from 'react-spring'
import CrossIcon from '@seaweb/coral/icons/Cross';

const Drawer = ({ open, toggle, direction, size, component, primaryBtn, secondaryBtn, tertiaryBtn }) => {

  const drawerRef = useRef(null)

  const [sizing, setSizing] = useSpring(() => ({ width: 480 }))

  const transitions = useTransition(open, {
    from: { x: '100%' },
    enter: {
      x: '0', config: size === 'small' || size === 'medium'
        ? { mass: .25, friction: 18, tension: 200 } : { mass: .5, friction: 24, tension: 240 }
    },
    leave: {
      x: '100%', config: size === 'small' || size === 'medium'
        ? { mass: .25, friction: 20, tension: 300 } : { mass: .5, friction: 26, tension: 280 }
    },
  })

  const scrim = useTransition(open, {
    from: { opacity: 0, pointerEvents: 'none' },
    enter: { opacity: .5, pointerEvents: 'all' },
    leave: { opacity: 0, pointerEvents: 'none' },
    config: { mass: .1, tension: 320 }
  })

  useEffect(() => {
    console.log(size)
    setSizing.start({ width: size === 'small' ? 480 : size === 'medium' ? 560 : size === 'large' ? 648 : 840 })
  })


  return (
    <div className='coral drawer'>
      <div ref={drawerRef} className={open ? 'drawer-layer open' : 'drawer-layer'}>
        {scrim((fade, show) => show ? (
          <animated.div style={fade} className="scrium" onClick={toggle} />
        ) : '')}
        {transitions((style, show) => show ? (
          <animated.div style={{ ...sizing, ...style }} className="drawer-content">
            <div className="drawer-title">
              <h3>Title</h3>
              <div className="close-container" onClick={toggle}><CrossIcon /></div>
            </div>
            <div className="drawer-body">
              <div className="arrow left" /><hr /><p>{size === 'small' ? 'Small 480px' : size === 'medium' ? 'Medium 560px' : size === 'large' ? 'Large 648px' : 'Extra Large 840px'}</p><hr /><div className="arrow right"></div>
            </div>
            <div className="drawer-buttons">
              {tertiaryBtn}
              {secondaryBtn}
              {primaryBtn}
            </div>
          </animated.div>
        ) : '')}
      </div>
    </div >
  )
}

export default Drawer