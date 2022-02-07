import React from 'react'
import { useState, useEffect } from 'react'
import Tooltip from './Tooltip'
import FigmaLink from '../FigmaLink'
import Image from './Image'
import { useSpring, animated } from 'react-spring'
import ToggleBtn from '../ToggleBtn'
import { ContentContainer, SegmentContainer } from '../Containers'
import ShowCodeBtn from '../ShowCodeBtn'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const TooltipShowcase = () => {

  const [offsetSize, setOffsetSize] = useSpring(() => ({ opacity: 0 }))
  const [originName, setOriginName] = useState('bottom')
  const [dist, setDist] = useState(8)
  const [off, setOff] = useState(8)
  const [disableOff, setDisableOff] = useState(false)
  const [showConfig, setShowConfig] = useState(false)

  //Image Variant
  const [imageStatic, setImageStatic] = useState(false)

  //Multiple Lines Variant
  const [linesStatic, setLinesStatic] = useState(false)
  const multiplelines = `I inadvertently went to See's Candy last week (I was in the mall looking for phone repair), and as it turns out, See's Candy now charges a dollar -- a full dollar -- for even the simplest of their wee confection offerings. I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean, the candies were tasty and all, but let's be real: A Snickers bar is fifty cents. After this dollar-per-candy revelation, I may not find myself wandering dreamily back into a See's Candy any time soon.`

  const previews = [
    {
      origin: "top-left",
      name: "Top Start",
      component: `Tooltip is positioned at the top and align left to the tip`,
    },
    {
      origin: "top",
      name: "Top",
      component: `Tooltip is positioned at the top and align center to the tip`,
    },
    {
      origin: "top-right",
      name: "Top End",
      component: `Tooltip is positioned at the top and align right to the tip`,
    },
    {
      origin: "left-top",
      name: "Left Start",
      component: `Tooltip is positioned on the left and align to the top of the tip`,
    },
    {
      origin: "left",
      name: "Left",
      component: `Tooltip is positioned on the left and align to the center of the tip`,
    },
    {
      origin: "left-bottom",
      name: "Left End",
      component: `Tooltip is positioned on the left and align to the bottom of the tip`,
    },
    {
      origin: "bottom-left",
      name: "Bottom Start",
      component: `Tooltip is positioned at the bottom and align left to the tip`,
    },
    {
      origin: "bottom",
      name: "Bottom",
      component: `Tooltip is positioned at the bottom and align to the center of the tip`,
    },
    {
      origin: "bottom-right",
      name: "Bottom End",
      component: `Tooltip is positioned at the bottom and align right to the tip`,
    },
    {
      origin: "right-top",
      name: "Right Start",
      component: `Tooltip is positioned on the right and align to the top of the tip`,
    },
    {
      origin: "right",
      name: "Right",
      component: `Tooltip is positioned on the right and align to the center of the tip`,
    },
    {
      origin: "right-bottom",
      name: "Right End",
      component: `Tooltip is positioned on the right and align to the bottom of the tip`,
    },
  ]

  // const notes = [
  //   {
  //     title: "Placement",
  //     description: "By default, the tooltip is placed at the top of the paired element. Its tip points to the center of the paired element. There should be a margin of at least 8px."
  //   },
  //   {
  //     title: "Flip",
  //     description: "Tooltip re-position itself to stay within viewport. (Not implemented here)"
  //   },
  //   {
  //     title: "Resize",
  //     description: "Tooltip capped at a max width of 320px and scrollable text at 240px in height.",
  //   },
  //   {
  //     title: "Persist",
  //     description: "Moving the pointer within the paired element and moving the pointer over to the tooltip content."
  //   },
  //   {
  //     title: "Motion",
  //     description: "Animate originates from position of the tip with opacity and scaling. High tension and friction spring animation mechanism."
  //   },
  //   {
  //     title: "Dismiss",
  //     description: "Tooltip transit out in reverse to entry animation when the pointer moves out from its paried element or from the tooltip itself."
  //   },
  // ]

  const codeString = `  const transitions = useTransition(hovered, {
    from: { opacity: 0, scale: .85 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: .85 },
    config: { tension: 1200, friction: 40, precision: 0.01, },
  })`;


  useEffect(() => {
    const previewer = document.querySelector('.origin-btn.preview')
    const w = previewer.offsetWidth
    const h = previewer.offsetHeight
    setOffsetSize.start({ height: h + Number(dist) * 2, width: w + Number(dist) * 2, opacity: 1, config: { tension: 1000 }, onRest: () => setOffsetSize.start({ opacity: 0, delay: 300, config: { tension: 80 } }) })
  }, [dist, setOffsetSize])

  useEffect(() => {
    switch (originName) {
      default:
      case "bottom-left":
      case "bottom-right":
      case "top-left":
      case "top-right":
        setOff(8)
        setDisableOff(false)
        break;
      case "bottom":
      case "top":
      case "right":
      case "left":
        setDisableOff(true)
        break
      case "left-top":
      case "left-bottom":
      case "right-top":
      case "right-bottom":
        setOff(24)
        setDisableOff(false)
        break;
    }
    setDist(8)
  }, [originName, setOriginName])

  return (
    <ContentContainer>
      <div className="description-container">
        <p>A tooltip displays short messages that clarifies “What it is” or  “How to use”. It is typically only visibile on hover and is to be easily dismissed.</p>
      </div>
      <div className="preview-container stack" style={{ gap: "1rem" }}>
        <p className="title">Positioning</p>
        <div className="coral sample-container" >
          <div className="container stack" style={{ maxWidth: "40rem", gap: "2rem", margin: "0 auto" }}>
            <div className="row-container flex-container around" >
              {previews.filter((preview, index) => index <= 2).map((top, index) => (
                <Tooltip component={top.component} key={index} off={8} id={index} margin={dist} origin={top.origin}><div onClick={() => setOriginName(top.origin)} className={originName === top.origin ? 'origin-btn selected' : 'origin-btn'} style={top.origin.includes("left") ? { textAlign: "right" } : top.origin === "top" ? { textAlign: "center" } : null}>{top.name}</div></Tooltip>
              ))}
            </div>
            <div className="row-container flex-container between">
              <div className="col stack" style={{ gap: "2rem", alignItems: "flex-end" }}>
                {previews.filter((preview, index) => index >= 3 && index <= 5).map((left, index) => (
                  <Tooltip component={left.component} key={index} off={24} id={index} margin={dist} origin={left.origin}><div onClick={() => setOriginName(left.origin)} className={originName === left.origin ? 'origin-btn selected' : 'origin-btn'} style={{ textAlign: "right" }}>{left.name}</div></Tooltip>
                ))}
              </div>
              <div className="col stack center middle" style={{ flex: 1 }}>
                <div className="container">
                  {previews.map((preview, i) => (
                    originName === preview.origin
                    && <Tooltip key={i + 12} margin={dist} off={off} id={i + 7} origin={preview.origin} always={true} component={preview.name}>
                      <div className="origin-btn preview">Static Tooltip
                        <animated.div className="offsetter" style={offsetSize} />
                      </div>
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="col stack" style={{ gap: "2rem" }}>
                {previews.filter((preview, index) => index >= 9).map((right, index) => (
                  <Tooltip component={right.component} key={index} off={24} id={index} margin={dist} origin={right.origin}><div onClick={() => setOriginName(right.origin)} className={originName === right.origin ? 'origin-btn selected' : 'origin-btn'}>{right.name}</div></Tooltip>
                ))}
              </div>
            </div>
            <div className="row-container flex-container around">
              {previews.filter((preview, index) => index >= 6 && index <= 8).map((bottom, index) => (
                <Tooltip component={bottom.component} key={index} id={index} off={8} margin={dist} origin={bottom.origin}><div onClick={() => setOriginName(bottom.origin)} className={originName === bottom.origin ? 'origin-btn selected' : 'origin-btn'} style={bottom.origin.includes("left") ? { textAlign: "right" } : bottom.origin === "bottom" ? { textAlign: "center" } : null}>{bottom.name}</div></Tooltip>
              ))}
            </div>
          </div>
        </div>
        <div className="control-container flex-container" style={{ gap: "2rem" }}>
          <div className="slider-container" id="offset-tooltip">
            <p>Tooltip Offset</p>
            <input type="range" onChange={(e) => setDist(e.target.value)} value={dist} name="gap" min="0" max="64" id="gap" />
            <label htmlFor="gap">{dist}px</label>
          </div>
          <div className="slider-container" id="offset-tip">
            <p style={disableOff ? { opacity: .35 } : {}}>Tip Offset (Only for non-centered tip variants)</p>
            <input disabled={disableOff} type="range" onChange={(e) => setOff(e.target.value)} value={off} name="off" min="0" max="100" id="off" />
            <label style={disableOff ? { opacity: .35 } : {}} htmlFor="off">{off}%</label>
          </div>
        </div>
        {/* <div className="notes stack" style={{ gap: "1rem" }}>
          <p className="title">UX Notes</p>
          <ul className="notes-container stack" style={{ gap: "1rem" }}>
            {notes.map((note, i) => (
              <UXNotes key={i} id={i} title={note.title} description={note.description}></UXNotes>
            ))}
          </ul>
        </div> */}
      </div>
      <SegmentContainer>
        <ShowCodeBtn open={showConfig} onclick={() => setShowConfig(!showConfig)}>Spring Config</ShowCodeBtn>
        {showConfig && <div className="codeblock">
          <SyntaxHighlighter language={"jsx"} style={materialOceanic}>
            {codeString}
          </SyntaxHighlighter>
        </div>}
      </SegmentContainer>
      <div className="variants-container stack" style={{ gap: "2rem" }}>
        <p className="title">Variants</p>
        <div className="image-tooltip-container stack" style={{ gap: "1rem" }}>
          <div className="container flex-container between">
            <p>Image</p>
            <ToggleBtn id={"staticimagechecker"} checked={imageStatic} click={() => setImageStatic(!imageStatic)}><p style={{ fontSize: "1rem" }}>{imageStatic ? "Static" : "Hover"}</p></ToggleBtn>
          </div>
          <div className="coral sample-container stack middle" style={{ zIndex: 200 }}>
            <Tooltip key={imageStatic ? "staticImg" : "hoverImg"} image={true} relative={imageStatic ? true : false} always={imageStatic ? true : false} component={
              <div className="container stack" style={{ gap: ".5rem" }}>
                <Image />
                <div className="text-container">
                  I'll input the haptic PNG protocol, that should panel the XML application!
                </div>
              </div>
            }>
              <div className="container gridcenter" style={{ width: "100%" }}>
                <div className="img-container" style={{ cursor: "pointer", maxWidth: 96 }}>
                  <Image />
                </div>
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="multiple-lines stack" style={{ gap: "1rem" }}>
          <div className="container flex-container between">
            <p>Multiple Lines</p>
            <ToggleBtn id={"staticlinechecker"} checked={linesStatic} click={() => setLinesStatic(!linesStatic)}><p style={{ fontSize: "1rem" }}>{linesStatic ? "Static" : "Hover"}</p></ToggleBtn>
          </div>
          <div className="multiple-container stack" style={{ gap: "1rem" }}>
            <div className="coral sample-container stack middle" style={{ width: "100%" }}>
              <Tooltip key={linesStatic ? "staticLines" : "hoverLines"} relative={linesStatic ? true : false} always={linesStatic ? true : false} component={multiplelines}>
                <div className="container stack middle" style={{ width: "100%" }} >
                  <div className="container" style={{ maxWidth: 240, padding: "1rem", backgroundColor: "white" }}>
                    <p className="line-clamp three">
                      {multiplelines}
                    </p>
                  </div>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <FigmaLink url="https://www.figma.com/file/CHJcwbBlyx7pIYmiPkno3R/?node-id=537%3A32754" />
      <hr />
    </ContentContainer>
  )
}

export default TooltipShowcase