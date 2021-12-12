import React from 'react'
import { useRef, useState, useEffect } from 'react'
import StatusIcon from './AlertComponents/StatusIcon'
import Toast from './AlertComponents/Toast'
import faker from 'faker'
import { useSpring, animated } from 'react-spring'


const ToastShowcase = () => {

  //States
  const [toast, setToast] = useState([])
  const [status, setStatus] = useState("success")
  const [message, setMessage] = useState(faker.hacker.phrase())
  const [button, setButton] = useState('')
  const [close, setClose] = useState(false)
  const [big, setBig] = useState(false)
  const [wordCount, setWordCount] = useState()
  const [press, setPress] = useState(true)

  //Reference
  const container = useRef()
  const count = useRef(0)

  //Gap between toast
  const gap = 8

  //Move api
  const [move, api] = useSpring(() => ({ y: 0 }))
  const configuration = { tension: 170, friction: 26 }

  //Snap toast container to offset removed toast's height
  const updateToast = (id, height, snap) => {
    let go = document.getElementById(id)
    if (go !== null) {
      api.start({ y: container.current.offsetHeight - height - gap, config: snap ? { duration: 0 } : configuration})
      go.remove()
    }
  }

  //Manual toast remove function
  const removeToast = (toast) => {
    if (toast.previousSibling) api.start({ y: container.current.offsetHeight - toast.offsetHeight - gap, config: configuration })
    //Unmount toast from DOM
    setTimeout(() => {
      updateToast(toast.id, toast.offsetHeight, true)
    }, 500)
    toast.classList.add('fade')
  }

  const duration = (message) => {
    const words = message.split(" ").length
    let cal = words * 350;
    if (cal < 3500) return 3500;
    else if (cal > 10000) return 10000;
    else return Math.round(cal/100)*100;
  }

  const checkLimit = (num) => {
    let total = container.current.childNodes
    let first = container.current.firstChild

    if (first && total.length > num) {
      let last = document.getElementById(first.id)
      removeToast(last)
    }
  }

  const pushToast = () => {
    if (press) {
      let id = count.current
      count.current++

      setPress(false)

      checkLimit(1)

      setToast(
        [
          ...toast,
          <Toast destroy={removeToast} key={id} id={`t${id}`} status={status} message={message} button={button} close={close} duration={duration(message)} update={updateToast} content={big} />
        ]
      )

      setTimeout(() => {
        setPress(true)
      }, 500)

      setMessage(faker.hacker.phrase())
    }
  }

  //Status onClick / onChange event
  const changeStatus = (e) => {
    e.target.id === status ? setStatus(false) : setStatus(e.target.id)
  }

  //Push new toast down to be visible within viewport
  useEffect(() => {
    api.start({ y: container.current.offsetHeight, config: { tension: 170, friction: 26 } })
  }, [toast, api])

  useEffect(() => {
    const preview = document.getElementById('preview-toast')
    preview.offsetHeight > 36 && message.length > 30 ? setBig(true) : setBig(false)
  }, [message, setMessage, button, setButton, status, setStatus, close, setClose, big, setBig])

  useEffect(() => {
    message.length < 1 ? setWordCount(0) : setWordCount(message.split(" ").length)
  }, [message])


  return (
    <div className="stack" style={{ gap: "2rem" }}>
      <div className="toastlist-container">
        <animated.div style={move} ref={container} className="toastlist">
          {toast}
        </animated.div>
      </div>
      <div className="preview toast stack" style={{ gap: "1rem" }}>
        <p>Preview</p>
        <div className="preview-container toast">
          <Toast id="preview-toast" content={big} status={status} message={message} button={button} close={close} still={true} />
        </div>
      </div>
      <div className="property-container">
        <p>Word Count: {wordCount}</p>
        <p>Duration: {duration(message) / 1000}s</p>
      </div>
      <div className="input toast">
        <div className="radio-container toast">
          <div className="container">
            <div className="top-container"><p>Status</p></div>
            <div className="bottom-container">
              <input onChange={changeStatus} onClick={changeStatus} type="radio" name="status" id="success" checked={status === 'success' ? true : false} />
              <label htmlFor="success"><StatusIcon status="success" /></label>
              <input onChange={changeStatus} onClick={changeStatus} type="radio" name="status" id="info" checked={status === 'info' ? true : false} />
              <label htmlFor="info"><StatusIcon status="info" /></label>
              <input onChange={changeStatus} onClick={changeStatus} type="radio" name="status" id="warning" checked={status === 'warning' ? true : false} />
              <label htmlFor="warning"><StatusIcon status="warning" /></label>
              <input onChange={changeStatus} onClick={changeStatus} type="radio" name="status" id="error" checked={status === 'error' ? true : false} />
              <label htmlFor="error"><StatusIcon status="error" /></label>
              <input onChange={changeStatus} onClick={changeStatus} type="radio" name="status" id="spinner" checked={status === 'spinner' ? true : false} />
              <label htmlFor="spinner"><StatusIcon status="spinner" spinning={false} /></label>
            </div>
          </div>
        </div>
        <div className="textfield-container toast">

          <div className="container">
            <div className="top-container"><p>Message</p></div>
            <div className="bottom-container coral">
              <input
                onChange={e => setMessage(e.target.value) && setWordCount(message.split(" ").length)}
                value={message}
                type="text"
                placeholder="Type your toast message here!"
                name="message"
                id="message" />
            </div>
          </div>
          <div className="close-options">
            <div className="container">
              <div className="top-container"><p>Button</p></div>
              <div className="bottom-container coral">
                <input
                  onChange={e => setButton(e.target.value)}
                  value={button}
                  type="text"
                  placeholder="Button"
                  name="button"
                  id="button" /></div>
            </div>
            <div className="checkbox-container toast " style={{ flex: 1 }}>
              <div className="container">
                <div className="top-container"><p>Icon</p></div>
                <div className="bottom-container" style={{ position: "relative" }}>
                  <input
                    type="checkbox"
                    name="closebutton"
                    id="close"
                    checked={close}
                    onChange={() => setClose(!close)} />
                  <label htmlFor="close"><StatusIcon status="close" /></label>
                </div>
              </div>
            </div>
          </div>


          <button onClick={pushToast} >Push</button>
        </div>
      </div>
    </div>
  )
}



export { ToastShowcase }
