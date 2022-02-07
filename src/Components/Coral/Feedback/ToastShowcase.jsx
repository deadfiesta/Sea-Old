import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { ContentContainer, SegmentContainer } from '../Containers'
import faker from 'faker'
import StatusIcon from './StatusIcon'
import Toast from './Toast'
import FigmaLink from '../FigmaLink'
import ShowCodeBtn from '../ShowCodeBtn'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const codeString = `const [move, api] = useSpring(() => ({ config: tension: 320, friction: 28, mass: .5 })) //Config for toast all movement

const duration = (message) => {
  const min = 3500 
  const max = 10000 
  const words = message.split(" ").length
  const cal = words * 350
  if (cal < min) return min
  else if (cal > max) return max
  else return Math.round(cal / 100) * 100
}`;

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
  const [showConfig, setShowConfig] = useState(false)

  //Reference
  const container = useRef()
  const count = useRef(1)

  //Gap between toast
  const gap = 8

  //Move api
  const configuration = { tension: 320, friction: 28, mass: .5}
  const [move, api] = useSpring(() => ({ y: 0, config: configuration }))
  

  //Snap toast container to offset removed toast's height
  const updateToast = (id, height, snap) => {
    let go = document.getElementById(id)
    if (go !== null) {
      api.start({ y: container.current.offsetHeight - height - gap, config: snap ? { duration: 0 } : configuration })
      go.remove()
    }
  }

  // const notes = [
  //   {
  //     title: "Auto-dismiss",
  //     description: "Duration of the toast varies with the word length of the text content. Mininum duration of 3500ms and maximum of 10000ms. Alternatively toast could be dismissed by clicking the close button"
  //   },
  //   {
  //     title: "Persist",
  //     description: "Countdown timer stops when the toast is hovered by mouse or receiving keyboard focus. The countdown will resume once the toast loses focuses."
  //   },
  //   {
  //     title: "Multi Toasts",
  //     description: "When there are multiple toast notifications appears, stack them vertically, with the newest on the top. Ideally, only max. 2 toasts display at a time. That says, when the 3rd toast move in from the top, the 1st toast will get slightly pushed down and disappear immediately regardless of the countdown timer."
  //   },
  //   {
  //     title: "Cursor",
  //     description: "Cursor change according to the type of content in the tooltip. Default arrow, text for text content and pointer for link/button"
  //   },
  // ]

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
    const min = 3500 
    const max = 10000 
    const words = message.split(" ").length
    const cal = words * 350
    if (cal < min) return min
    else if (cal > max) return max
    else return Math.round(cal / 100) * 100
  }

  // eslint-disable-next-line
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

      // setPress(false)


      setToast([...toast, <Toast destroy={removeToast} key={id} id={`t${id}`} status={status} message={message} button={button} close={close} duration={duration(message)} update={updateToast} content={big} />])

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
    api.start({ y: container.current.offsetHeight, config: configuration })
  })

  useEffect(() => {
    const preview = document.getElementById('preview-toast')
    preview.offsetHeight > 36 && message.length > 30 ? setBig(true) : setBig(false)
  }, [message, setMessage, button, setButton, status, setStatus, close, setClose, big, setBig])

  useEffect(() => {
    message.length < 1 ? setWordCount(0) : setWordCount(message.split(" ").length)
  }, [message])

  return (
    <ContentContainer>
      <div className="toastlist-container">
        <animated.div style={move} ref={container} className="toastlist">
          {toast}
        </animated.div>
      </div>
      <div className="description-container">
        <p>A toast displays short and time-based feedback, which overlays any contents in the page. It is meant to be noticed without disrupting a user's experience or requiring an action to be taken.</p>
      </div>
      <SegmentContainer>
        <div className="types-container">
          <div className="default-container stack" style={{ gap: "1rem" }}>
            <p className="title">Default</p>
            <div className="type container">
              <Toast status="success" message="Here's a toast message" button="Button" close={true} still={true} />
            </div>
          </div>
          <div className="content-container stack" style={{ gap: "1rem" }}>
            <p className="title">Small with Content</p>
            <div className="type container">
              <Toast status="warning" message="The default text maximum width is 320px, extreme case will fold display." content={true} button="Button" close={true} still={true} />
            </div>
          </div>
        </div>
        <div className="preview toast stack" style={{ gap: "1rem" }}>
          <p className="title">Interactive Demo</p>
          <div className="preview-container toast">
            <Toast id="preview-toast" content={big} status={status} message={message} button={button} close={close} still={true} />
          </div>
        </div>
        <div className="control-container stack" style={{ gap: "1rem" }}>
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
              <button onClick={pushToast}>Push</button>
            </div>
          </div>
          <div className="property-container stack" style={{ gap: ".25rem" }}>
            <p>Word Count: {wordCount}</p>
            <p>Duration: {duration(message) / 1000}s</p>
          </div>
        </div>
      </SegmentContainer>
      <SegmentContainer>
        <ShowCodeBtn open={showConfig} onclick={()=>setShowConfig(!showConfig)}>Spring Config / Duration</ShowCodeBtn>
        {showConfig && <div className="codeblock">
            <SyntaxHighlighter language={"jsx"} style={materialOceanic}>
              {codeString}
            </SyntaxHighlighter>
          </div>}
      </SegmentContainer>
      {/* <SegmentContainer>
        <p className="title">UX Notes</p>
        <ul className="notes-container stack" style={{ gap: "1rem" }}>
          {notes.map((note, i) => (
            <UXNotes key={i} id={i} title={note.title} description={note.description}></UXNotes>
          ))}
        </ul>
      </SegmentContainer> */}
      <FigmaLink url="https://www.figma.com/file/CHJcwbBlyx7pIYmiPkno3R/?node-id=432%3A28076" />
      <hr />
    </ContentContainer>
  )
}

export default ToastShowcase