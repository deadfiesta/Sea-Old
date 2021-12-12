import React, { useState } from "react"
import { useEffect, useRef } from "react"
import StatusIcon from "./StatusIcon"
import { useSpring, animated } from 'react-spring'

const Toast = ({ id, message, duration, status, update, content, close, button, still, destroy }) => {
  const Button = ({ children }) => (
    <div className={`button-container`}>
      {children}
    </div>
  )

  let start = Date.now()
  const remaining = useRef(duration)
  const [pausing, setPause] = useState(false)
  const toasty = useRef()
  const [entry, api] = useSpring(() => ({ opacity: 0, y: -10, config: { tension: 200 } }))

  const del = () => {
    if (!still) destroy(document.getElementById(id))
  }

  //Fade in and out
  useEffect(() => {
    api.start({ opacity: 1, y: 0 })
    const timer = setTimeout(() => {
      if (!still) api.start({ opacity: 0 })
    }, remaining.current - 300)
    //Pause and reset timer with remaining delay
    if (pausing) {
      clearTimeout(timer)
      api.start({ transform: "scale(1.015)", config: { tension: 600, friction: 30} })
      let pause = Date.now()
      remaining.current -= pause - start
    } else {
      api.start({ transform: "scale(1)" })
    }
    return () => clearTimeout(timer)
  })

  //Move toast container to offset before unmounting
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!still) {
        const height = toasty.current.offsetHeight
        toasty.current.previousSibling ?  update(id, height, false) :  update(id, height, true)
      }
    }, remaining.current)
    //Pause and reset timer with remaining delay
    if (pausing) {
      clearTimeout(timer)
      let pause = Date.now()
      remaining.current -= pause - start
    }
    return () => clearTimeout(timer)
  })

  return (
    <animated.div onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)} style={still ? null : entry} ref={toasty} id={id} className={still ? "coral toast-container" : "coral toast-container"}>
      <span className="container">
        {status && <StatusIcon status={status} />}
        {message !== '' && <div className="message-container" style={{ maxWidth: status ? 260 : 288 }} >{message}</div>}
        {button !== '' && !content && <div onClick={del} className="close-container"><Button >{button}</Button></div>}
        {close && <div onClick={del} className="close-container"><StatusIcon status="close" /></div>}
      </span>
      {content && <div onClick={del} className="close-container"><Button className={content}>{button}</Button></div>}
    </animated.div>
  )
}

export default Toast

Toast.defaultProps = {
  message: "Here's a toast message",
  content: false,
  status: false,
  close: false,
  button: false,
  still: false,
  duration: 6000,
}

