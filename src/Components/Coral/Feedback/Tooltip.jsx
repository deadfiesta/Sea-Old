import React from 'react'
import { useTransition, useSpring, animated } from 'react-spring'
import { useState, useEffect, useRef } from 'react'

const Tooltip = ({ children, id, origin, component, margin, off, always, relative, image }) => {

  const [originPosition] = useState(origin)
  const [tipOffset, setTipOffset] = useState(0)
  const far = Number(margin)
  const sideOffset = 6
  const adjust = 2

  const [visible, setVisible] = useState(always)

  const wrapper = useRef()
  const tooltip = useRef()
  const svg = useRef()

  const [position, setPosition] = useState({})
  const [offset, setOffset] = useState({})

  const transitions = useTransition(visible, {
    from: { opacity: 0, scale: .85 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: .85 },
    config: { tension: 1200, friction: 40, precision: 0.01, },
  })

  const move = useSpring({ from: { opacity: 0, scale: 0.85 }, to: { opacity: 1, scale: 1 }, config: { tension: 1200, friction: 60 } })


  useEffect(() => {

    if (visible) {
      if (relative)
        return () => {
          setPosition({})
          setOffset({})
        }
      //Position of wrapper
      const w = Number(wrapper.current.offsetWidth)
      const h = Number(wrapper.current.offsetHeight)
      const l = Number(wrapper.current.offsetLeft)
      const t = Number(wrapper.current.offsetTop)

      //Dimension of tooltip
      const width = Number(tooltip.current.offsetWidth)
      const height = Number(tooltip.current.offsetHeight)

      //Svg
      const tipWidth = Number(svg.current.attributes.width.nodeValue)
      const tipHeight = Number(svg.current.attributes.height.nodeValue)

      switch (originPosition) {
        default:
        case "bottom":
        case "bottom-left":
        case "bottom-right":
        case "top":
        case "top-left":
        case "top-right":
          // setTipOffset(Number((off / 100) * (width - tipWidth)))
          setTipOffset(Number(24))
          break;
        case "left-top":
        case "left":
        case "left-bottom":
        case "right-top":
        case "right":
        case "right-bottom":
          // setTipOffset(Number((off / 100) * (height - tipWidth)))
          if (h > 53) setTipOffset(Number(24))
          else setTipOffset(Number(12))
          break;
      }

      switch (originPosition) {
        default:
        case "bottom":
          setPosition({ left: l + (w / 2) - width / 2, top: t + h + far - adjust, transformOrigin: "top center" })
          setOffset({ marginLeft: 0 })
          break
        case "bottom-left":
          setPosition({ left: (l + (w / 2) - width / 2) + (width / 2 - tipOffset - tipWidth / 2), top: t + h + far - adjust, transformOrigin: "top left" })
          setOffset({ marginLeft: tipOffset })
          break
        case "bottom-right":
          setPosition({ left: (l + (w / 2) - width / 2) - (width / 2 - tipOffset - tipWidth / 2), top: t + h + far - adjust, transformOrigin: "top right" })
          setOffset({ marginRight: tipOffset })
          break
        case "top":
          setPosition({ left: l + (w / 2) - width / 2, top: t - height - far + adjust, transformOrigin: "bottom" })
          setOffset({ marginLeft: 0 })
          break
        case "top-left":
          setPosition({ left: (l + (w / 2) - width / 2) + (width / 2 - tipOffset - tipWidth / 2), top: (t - height - far) + adjust, transformOrigin: "bottom left" })
          setOffset({ marginLeft: tipOffset })
          break
        case "top-right":
          setPosition({ left: (l + (w / 2) - width / 2) - (width / 2 - tipOffset - tipWidth / 2), top: t - height - far + adjust, transformOrigin: "bottom right" })
          setOffset({ marginRight: tipOffset })
          break
        case "left":
          setPosition({ left: l - width + sideOffset - far, top: t + (h / 2) - (height / 2), transformOrigin: "right" })
          setOffset({ marginLeft: 0 })
          break
        case "left-top":
          setPosition({ left: l - width + sideOffset - far, top: t + (h / 2) - (tipOffset + tipWidth / 2) + adjust, transformOrigin: "top right" })
          setOffset({ marginTop: tipOffset })
          break
        case "left-bottom":
          setPosition({ left: l - width + sideOffset - far, top: t + (h / 2) - height + tipOffset + tipHeight / 2 - adjust, transformOrigin: "bottom right" })
          setOffset({ marginBottom: tipOffset })
          break
        case "right":
          setPosition({ left: l + w - sideOffset + far, top: t + (h / 2) - (height / 2) - adjust, transformOrigin: "left" })
          setOffset({ marginLeft: 0 })
          break
        case "right-top":
          setPosition({ left: l + w - sideOffset + far, top: t + (h / 2) - (tipOffset + tipHeight / 2) + adjust / 2, transformOrigin: "top left" })
          setOffset({ marginTop: tipOffset })
          break
        case "right-bottom":
          setPosition({ left: l + w - sideOffset + far, top: t + (h / 2) - height + tipOffset + tipHeight / 2 - adjust * 2, transformOrigin: "bottom left" })
          setOffset({ marginBottom: tipOffset })
      }
    }
  }, [tipOffset, far, margin, off, originPosition, visible, always, relative])

  //Flip tooltip if outside viewport
  // useEffect(() => {
  //   if (visible) {
  //     let rect = tooltip.current.getBoundingClientRect()

  //     let y = rect.top
  //     let b = rect.bottom
  //     //if y is negative is hidden

  //     switch (origin) {
  //       case "top":
  //         if (y < 0 && origin === originPosition) setOriginPosition("bottom")
  //         break
  //       case "top-left":
  //         if (y < 0 && origin === originPosition) setOriginPosition("bottom-left")
  //         break
  //       case "top-right":
  //         if (y < 0 && origin === originPosition) setOriginPosition("bottom-right")
  //         break
  //       default:
  //         //
  //         break
  //     }
  //   } else {
  //     setOriginPosition(origin)
  //   }
  // }, [visible, origin, originPosition])

  return (
    <div key={id} onFocus={() => setVisible(true)} onBlur={() => !always ? setVisible(false) : setVisible(true)} onMouseOver={() => setVisible(true)} onMouseLeave={() => !always ? setVisible(false) : setVisible(true)} ref={wrapper} className={`content-wrapper ${originPosition}`}>
      {children}
      {transitions((style, visible) => visible
        ? <div className={`coral tooltip-container`} style={relative ? { marginTop: ".5rem" } : null}>
          <animated.div onMouseOver={() => setVisible(true)} className={relative ? `tooltip relative ${originPosition}` : `tooltip ${originPosition}`} ref={tooltip} style={always ? { ...move, ...position } : { ...style, ...position }}>
            <div className="tip" style={offset}>
              <svg ref={svg} height="12" width="12">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.2 1.06667C5.6 0.533333 6.4 0.533333 6.8 1.06667L12 8V12L0 12L0 8L5.2 1.06667Z" />
              </svg>
            </div>
            <div className={image ? "body image" : "body"}>
              {image ? component : <div className="inner">{component}</div>}
            </div>
          </animated.div>
        </div>
        : '')}
    </div>
  )
}

Tooltip.defaultProps = {
  always: false,
  image: false,
  origin: "bottom",
  margin: 8,
  component: "Default tooltip description"
}

export default Tooltip
