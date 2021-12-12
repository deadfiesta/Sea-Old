import React from "react"
import { useState, useRef } from "react"
import StatusIcon from "./StatusIcon"
import { useTransition, animated } from 'react-spring'

const Toast = ({ offset, duration, id, content, children, status, close, button, still }) => {
  const Button = ({ type, children, onclick }) => (
    <div onClick={onclick} className={`button-container ${type}`}>
      {children}
    </div>
  )

  const [mount, setMount] = useState(true)
  const toasty = useRef()

  const transition = useTransition(mount, {
    from: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
    onRest: () => {
      if (!still) {
        setTimeout(() => {
          setMount(false)
        }, duration)
      }
    }
  })

  return (
    <>
      {transition((style, item) =>
        item
          ? <animated.div style={style} ref={toasty} id={id} className={still ? "coral toast-container" : "coral toast-container"}>
            <span className="container">
              {status && <StatusIcon status={status} />}
              <div className="message-container">
                {children}
              </div>
              {button && !content && <Button >{button}</Button>}
              {close && <StatusIcon status="close" />}
            </span>
            {content && <Button class={content}>{button}</Button>}
          </animated.div>
          : null
      )}
    </>
  )
}

export default Toast

Toast.defaultProps = {
  children: "Here's a toast message",
  status: false,
  close: false,
  button: false,
  still: false,
  duration: 6000,
}

