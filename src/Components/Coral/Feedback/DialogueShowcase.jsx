import React from 'react'
import { useState, useRef } from 'react'
import { ContentContainer, SegmentContainer, DemoContainer } from '../Containers'
import Dialogue from './Dialogue'
import InfoFIcon from '@seaweb/coral/icons/InfoF'
import CheckCircleFIcon from '@seaweb/coral/icons/CheckCircleF'
import CrossCircleFIcon from '@seaweb/coral/icons/CrossCircleF'
import WarningFIcon from '@seaweb/coral/icons/WarningF'
import Dialog from '@seaweb/coral/components/Dialog';
import Button from '@seaweb/coral/components/Button';

const DialogueShowcase = () => {
  const reference = useRef();
  const origin = useRef();

  const [status, setStatus] = useState("infod")
  const [size, setSize] = useState("small")
  const [text, setText] = useState("This is a dialog text")
  const [primaryBtn, setPrimaryBtn] = useState("Save")
  const [secondaryBtn, setSecondaryBtn] = useState("Cancel")
  const [tertiaryBtn, setTertiaryBtn] = useState("Action")
  const [transitionType, setTransitionType] = useState('reference')
  const [transition, setTransition] = useState(reference.current)
  const [immediate, setImmediate] = useState(false)

  const changeStatus = (e) => {
    e.target.id === status ? setStatus(false) : setStatus(e.target.id)
  }
  const changeSize = (e) => {
    e.target.id === size ? setSize(false) : setSize(e.target.id)
  }

  const changeTransition = (e) => {
    setTransitionType(e.target.id)
    switch (e.target.id) {
      default:
      case "reference":
        setImmediate(false)
        setTransition(reference.current)
        break
      case "center":
        setImmediate(false)
        setTransition(origin.current)
        break;
      case "immediate":
        setImmediate(true)
        setTransition(null)
        break;
      case "null":
        setImmediate(false)
        setTransition(null)
    }
  }


  const [dialogueOpen, setDialogueOpen] = useState(false)
  const handleClose = () => setDialogueOpen(false);



  return (
    <ContentContainer>
      <p>
        A dialog is a modal conversation box that comes in combinations with a scrim and displays on the top of the page. It can be used to present critical contents or sub-tasks without clurtering the page.
      </p>
      <div className="origin" ref={origin} style={{ position: "fixed", top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)" }}></div>
      <SegmentContainer>
        <h3>Demo</h3>
        <DemoContainer>
          <div className="gridcenter">
            <Dialogue primaryBtn={primaryBtn} secondaryBtn={secondaryBtn} tertiaryBtn={tertiaryBtn} size={size} status={status} title="This is a title" >
              {text}
            </Dialogue>
          </div>
        </DemoContainer>
        <div className="control-container flex-container stack" style={{ gap: "1rem" }}>
          <div className="top-row flex-container" style={{ gap: "2rem" }}>
            <div className="status-container">
              <p>Status</p>
              <div className="statuses flex-container middle" style={{ gap: ".5rem" }}>
                <input onChange={changeStatus} onClick={changeStatus} checked={status === "infod" ? true : false} type="radio" name="statusdialogue" id="infod" />
                <label htmlFor="infod"><InfoFIcon size={24} /></label>
                <input onChange={changeStatus} onClick={changeStatus} checked={status === "checkd" ? true : false} type="radio" name="statusdialogue" id="checkd" />
                <label htmlFor="checkd"><CheckCircleFIcon size={24} /></label>
                <input onChange={changeStatus} onClick={changeStatus} checked={status === "crossd" ? true : false} type="radio" name="statusdialogue" id="crossd" />
                <label htmlFor="crossd"><CrossCircleFIcon size={24} /></label>
                <input onChange={changeStatus} onClick={changeStatus} checked={status === "warnd" ? true : false} type="radio" name="statusdialogue" id="warnd" />
                <label htmlFor="warnd"><WarningFIcon size={24} /></label>
              </div>
            </div>
            <div className="size-container">
              <p>Size</p>
              <div className="sizes flex-container middle" style={{ gap: ".5rem" }}>
                <label htmlFor="small">Small 480px</label>
                <input onChange={changeSize} checked={size === "small" ? true : false} type="radio" name="sizedialog" id="small" />
                <label htmlFor="medium">Medium 600px</label>
                <input onChange={changeSize} checked={size === "medium" ? true : false} type="radio" name="sizedialog" id="medium" />
                <label htmlFor="large">Large 840px</label>
                <input onChange={changeSize} checked={size === "large" ? true : false} type="radio" name="sizedialog" id="large" />
                <label htmlFor="extralarge">Extra Large 1200px</label>
                <input onChange={changeSize} checked={size === "extralarge" ? true : false} type="radio" name="sizedialog" id="extralarge" />
              </div>
            </div>
          </div>
          <div className="message-container">
            <p>Body Text</p>
            <div className="bodytext">
              <input type="text" name="text" id="text" placeholder="Type your text here" value={text} onChange={e => setText(e.target.value)} />
            </div>
          </div>
          <div className="bottom-row flex-container" style={{ gap: "1rem" }}>
            <div className="primary-container" style={{ flex: 1 }}>
              <p>Primary Button</p>
              <input type="text" name="primary" id="primary" value={primaryBtn} onChange={(e) => setPrimaryBtn(e.target.value)} />
            </div>
            <div className="secondary-container" style={{ flex: 1 }}>
              <p>Secondary Button</p>
              <input type="text" name="secondary" id="secondary" value={secondaryBtn} onChange={(e) => setSecondaryBtn(e.target.value)} />
            </div>
            <div className="tertiary-container" style={{ flex: 1 }}>
              <p>Action Button</p>
              <input type="text" name="secondary" id="secondary" value={tertiaryBtn} onChange={(e) => setTertiaryBtn(e.target.value)} />
            </div>
          </div>
          <div className="transition-row">
            <p>Transition</p>
            <div className="transitions flex-container middle" style={{ gap: ".5rem" }}>
              <label htmlFor="reference">Origin</label>
              <input onChange={changeTransition} checked={ transitionType === 'reference' ? true : false } type="radio" name="transition" id="reference" />
              <label htmlFor="center">Center</label>
              <input onChange={changeTransition} checked={ transitionType === 'center' ? true : false } type="radio" name="transition" id="center" />
              <label htmlFor="immediate">Immediate</label>
              <input onChange={changeTransition} checked={ transitionType === 'immediate' ? true : false } type="radio" name="transition" id="immediate" />
              <label htmlFor="null">Null</label>
              <input onChange={changeTransition} checked={ transitionType === 'null' ? true : false } type="radio" name="transition" id="null" />
            </div>
          </div>
          <span style={{ width: "fit-content" }} ref={reference} >
            <Button onClick={() => setDialogueOpen(prev => !prev)}>Dialog</Button>
          </span>
        </div>
      </SegmentContainer>
      <Dialog immediate={immediate} isOpen={dialogueOpen} onClose={handleClose} transitionFrom={transition} returnFocusTo={reference.current} style={{
        width: () => {
          switch (size) {
            default:
            case "small":
              return 480
            case "medium":
              return 600
            case "large":
              return 840
            case "extralarge":
              return 1200
          }
        },
        maxWidth: '100%'
      }}>
        <Dialogue close={handleClose} primaryBtn={"Save"} secondaryBtn={"Cancel"} tertiaryBtn={"Action"} size={size} status={status} title="This is a title" >
          {text}
        </Dialogue>
      </Dialog>
    </ContentContainer>
  )
}

export default DialogueShowcase
