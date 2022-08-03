import React from 'react'
import { useRef, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import * as easings from 'd3-ease'
import CheckCircleFIcon from '@seaweb/coral/icons/CheckCircleF';
import WarningFIcon from '@seaweb/coral/icons/WarningF';
import CrossCircleFIcon from '@seaweb/coral/icons/CrossCircleF';

const ProgressBar = ({ percentage, useWarning, warningPercent, useError, errorPercent }) => {

  const progress = useSpring({
    transform: percentage === warningPercent && useWarning
      ? `translateX(${warningPercent}%) translateY(-50%)`
      : percentage === errorPercent && useError
        ? `translateX(${errorPercent}%) translateY(-50%)`
        : `translateX(${percentage}%) translateY(-50%)`,
    config: percentage !== 100
      ? { mass: .5, tension: 240 }
      : { duration: 0 }
  })

  const barColor = useSpring({
    stroke: percentage === warningPercent && useWarning
      ? '#F5AC1B'
      : percentage === errorPercent && useError
        ? '#F5222D'
        : percentage === 100
          ? '#16C42A'
          : '#1B92F5',
    config: { mass: .25, tension: 300 }
  })

  const successAnim = useSpring({
    to: percentage === 100
      ? { scale: 1, opacity: 1 }
      : { scale: .75, opacity: 0 },
    config: { mass: .75, tension: 300, friction: 12 }
  })

  const errorAnim = useSpring({
    to: percentage === errorPercent && useError
      ? { transform: 'scale(1) rotate(0deg)' }
      : { transform: 'scale(0.75) rotate(2deg)' },
    config: { mass: .45, tension: 900, friction: 10 }
  })

  const warningAnim = useSpring({
    to: percentage === warningPercent && useWarning
      ? { transform: 'scale(1) rotate(0deg)' }
      : { transform: 'scale(0.75) rotate(2deg)' },
    config: { mass: .45, tension: 900, friction: 10 }
  })

  const { number } = useSpring({
    to: { number: percentage },
    config: { mass: .5, tension: 240 }
  })

  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <animated.svg
          style={{
            ...progress,
            ...barColor
          }}
          className='loadingbar'
          viewBox="0 0 418 8">
          <line x1="4" y1="4" x2='414' y2="4" />
        </animated.svg>
        <svg className='bgbar' viewBox="0 0 418 8">
          <line x1="4" y1="4" x2="414" y2="4" />
        </svg>
      </div>
      <div className="progress-state">
        <div className="percentage-number coral">
          {
            percentage === warningPercent && useWarning
              ? <animated.div style={warningAnim} className="progress-icon-container"><WarningFIcon size={20} color='#F5AC1B' /></animated.div>
              : percentage === errorPercent && useError
                ? <animated.div style={errorAnim} className="progress-icon-container"><CrossCircleFIcon size={20} color='#F5222D' /></animated.div>
                : percentage === 100
                  ? <animated.div style={successAnim} className="progress-icon-container coral"><CheckCircleFIcon size={20} color='#16C42A' /></animated.div>
                  : <div className='flex-container'><animated.div>{number.to(n => n.toFixed(0))}</animated.div>%</div>
          }
        </div>
      </div>
    </div >
  )
}

const ProgressBarIndeterminate = ({ useWarning, useError, styleNo }) => {
  const barColor = useSpring({ backgroundColor: useWarning ? "#F5AC1B" : useError ? "#F5222D" : "#1B92F5", stroke: useWarning ? "#F5AC1B" : useError ? "#F5222D" : "#1B92F5", })
  const errorConfig = { tension: 220, friction: 40, mass: 1 }

  const animEasing = useSpring({
    loop: true,
    from: { x: "30%" },
    to: { x: "130%" },
    config: { duration: 1200, easing: easings.easeExpInOut }
  })

  const animBarStartEasing = useSpring({
    loop: true,
    from: { transformOrigin: "left", transform: "scaleX(1)" },
    to: { transform: "scaleX(2)" },
    config: { duration: 1200, easing: easings.easeCubicIn }
  })

  const animBarEndEasing = useSpring({
    loop: true,
    from: { transformOrigin: "right", transform: "scaleX(2)" },
    to: { transform: "scaleX(1)" },
    config: { duration: 1200, easing: easings.easeCubicOut }
  })

  const animSpring = useSpring({
    loop: useError ? false : useWarning ? false : true,
    from: { x: "0%" },
    to: { x: "93%" },
    config: useWarning || useError ? errorConfig : { tension: 74, friction: 28, precision: .035, mass: 1 }
  })

  const animSpringReverse = useSpring({
    reset: useWarning ? false : useError ? false : true,
    loop: { reverse: true },
    from: { x: "0%" },
    to: { x: "150%" },
    config: { tension: 190, friction: 30, mass: .5, precision: .015 },
  })

  //Circle Easing
  const len = 232.1023406982422
  const dashAnimEase = useSpring({
    pause: useWarning || useError ? true : false,
    loop: true,
    from: { strokeDasharray: len, strokeDashoffset: len - 58 },
    to: { strokeDashoffset: 58 - len },
    config: { duration: 1400, easing: easings.easeQuadInOut }
  })
  const rotateAnimEase = useSpring({
    pause: useWarning || useError ? true : false,
    loop: true,
    from: { transform: "rotate(-135deg)", x: "-50%", y: "-50%" },
    to: { transform: "rotate(315deg)" },
    config: { duration: 1400, easing: easings.easePolyInOut.exponent(1.1) }
  })

  //Circle Spring
  const dashAnimSpring = useSpring({
    pause: useWarning || useError ? true : false,
    loop: true,
    from: { strokeDasharray: len, strokeDashoffset: len - 58, transform: "rotate(0deg)", x: "0", y: "0" },
    to: { strokeDashoffset: -len + 58, transform: "rotate(90deg)" },
    config: { friction: 48 },
  })
  const rotateAnimSpring = useSpring({
    pause: useWarning || useError ? true : false,
    loop: true,
    // from: { transform: "rotate(0deg)", x: "-50%", y: "-50%" },
    // to: { transform: "rotate(360deg)" },
    config: { tension: 120, friction: 40 }
  })

  switch (styleNo) {
    default:
    case "easing":
      return (
        <div className="progressbar-container">
          <div className="progressbar progressbar-bg">
            <animated.div className="fullbar" style={{
              ...animEasing,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <animated.div className="shortbar" style={{
                ...barColor,
                ...animBarStartEasing,
                position: "absolute",
                left: "0%",
                width: "40%",
                height: "100%",
                borderRadius: "4px",
              }} />
              <animated.div className="shortbar" style={{
                ...barColor,
                ...animBarEndEasing,
                position: "absolute",
                width: "40%",
                left: "-100%",
                height: "100%",
                borderRadius: "4px",
              }} />
            </animated.div>
          </div>
        </div>
      )
    case "spring":
      return (
        <div className="progressbar-container">
          <div className="progressbar progressbar-bg">
            <animated.div className="fullbar" style={{
              ...animSpring,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between"
            }}>
              <animated.div className="shortbar" style={{
                ...barColor,
                position: "absolute",
                left: "40%",
                width: "40%",
                height: "100%",
                borderRadius: "4px",
              }} />
              <animated.div className="shortbar" style={{
                ...barColor,
                position: "absolute",
                width: "40%",
                left: "-60%",
                height: "100%",
                borderRadius: "4px",
              }} />
            </animated.div>
          </div>
        </div>
      )
    case "spring-reverse":
      return (
        <div className="progressbar-container">
          <div className="progressbar progressbar-bg">
            <animated.div style={{
              ...animSpringReverse,
              ...barColor,
              width: "40%",
              height: "100%",
              borderRadius: "4px"
            }} className="bar" />
          </div>
        </div>
      )
    case "circle":
      return (
        <div className='progress-circle-container'>
          <animated.svg className='progress-circle circle-indeterminate' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
            ...rotateAnimEase,
          }}>
            <animated.circle style={{
              ...dashAnimEase,
              ...barColor
            }}
              cx="40" cy="40" r="37" />
          </animated.svg>
          <svg className='progress-circle circle-bg' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="37" />
          </svg>
          <div className="circle-number-container">
            <div className="circle-number coral">
              {useError ? "Failed" : useWarning ? "Error" : "Loading"}
            </div>
          </div>
          <div className="coral" style={{ textAlign: "center" }}>Spring Easings</div>
        </div>
      )
    case "circletwo":
      return (
        <div className='progress-circle-container'>
          <animated.svg className='progress-circle circle-indeterminate' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
            ...rotateAnimSpring,
          }}>
            <animated.circle style={{
              ...dashAnimSpring,
              ...barColor
            }}
              cx="40" cy="40" r="37" />
          </animated.svg>
          <svg className='progress-circle circle-bg' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="37" />
          </svg>
          <div className="circle-number-container">
            <div className="circle-number coral">
              {useError ? "Failed" : useWarning ? "Error" : "Loading"}
            </div>
          </div>
          <div className="coral" style={{ textAlign: "center" }}>Spring</div>
        </div>
      )
    case "circlethree":
      return (
        <div className='progress-circle-container'>
          <svg className={useError || useWarning ? 'progress-circle circle-indeterminate circle-stop' : 'progress-circle circle-indeterminate circle-spinner'} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <animated.circle className={useError ? 'path-stop' : useWarning ? 'path-stop' : 'path-spinner'} style={barColor} cx="40" cy="40" r="37" />
          </svg>
          <svg className='progress-circle circle-bg' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="37" />
          </svg>
          <div className="circle-number-container">
            <div className="circle-number coral">
              {useError ? "Failed" : useWarning ? "Error" : "Loading"}
            </div>
          </div>
          <div className="coral" style={{ textAlign: "center" }}>CSS</div>
        </div>
      )
  }
}

const ProgressCircle = ({ percentage, useWarning, warningPercent, useError, errorPercent }) => {
  const config = { mass: .5, tension: 240 }
  const len = 232.1023406982422
  const path = 31.11269760131836
  const crossPath = 15.909902572631836

  const circle = useSpring({
    strokeDasharray: len,
    strokeDashoffset: len - (percentage / 100 * len),
    config: percentage !== 100
      ? config
      : { duration: 0 }
  })

  const circ = useRef(null)
  const check = useRef(null)

  const { number } = useSpring({
    to: { number: percentage },
    config: config
  })

  const barColor = useSpring({
    stroke: percentage === warningPercent && useWarning
      ? '#F5AC1B'
      : percentage === errorPercent && useError
        ? '#F5222D'
        : percentage === 100
          ? '#16C42A'
          : '#1B92F5',
    config: { mass: .25, tension: 300 }
  })

  const successAnim = useSpring({
    to: percentage === 100
      ? { strokeDashoffset: 0 }
      : { strokeDashoffset: path },
    config: { duration: 400, easing: easings.easeCircleInOut }
  })

  const errorAnim = useSpring({
    to: percentage === errorPercent && useError
      ? { strokeDashoffset: 0 }
      : { strokeDashoffset: -crossPath },
    config: { duration: 400, easing: easings.easeExpOut }
  })

  const warningAnim = useSpring({
    to: percentage === warningPercent && useWarning
      ? { transform: 'scale(1)' }
      : { transform: 'scale(0.5)' },
    config: { duration: 400, easing: easings.easeExpOut }
  })

  useEffect(() => {
    if (check.current !== null) console.log(check.current.getTotalLength())
  })

  return (
    <div className='progress-circle-container'>
      <svg className='progress-circle circle-loader' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <animated.circle style={{ ...circle, ...barColor }} ref={circ} cx="40" cy="40" r="37" />
      </svg>
      <svg className='progress-circle circle-bg' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="37" />
      </svg>
      <div className="circle-number-container">
        <div className="circle-number coral">
          {
            percentage === warningPercent && useWarning
              ? <animated.div style={warningAnim} className="progress-icon-container">
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <path fillRule="evenodd" clipRule="evenodd" d="M31.9996 16.0002C30.6741 16.0002 29.5996 17.0748 29.5996 18.4002V36.0002C29.5996 37.3257 30.6741 38.4002 31.9996 38.4002C33.3251 38.4002 34.3996 37.3257 34.3996 36.0002V18.4002C34.3996 17.0748 33.3251 16.0002 31.9996 16.0002ZM31.9996 48.0002C33.7669 48.0002 35.1996 46.5676 35.1996 44.8002C35.1996 43.0329 33.7669 41.6002 31.9996 41.6002C30.2323 41.6002 28.7996 43.0329 28.7996 44.8002C28.7996 46.5676 30.2323 48.0002 31.9996 48.0002Z" fill="#F5AC1B" />
                </svg>
              </animated.div>
              : percentage === errorPercent && useError
                ? <animated.div style={errorAnim} className="progress-icon-container">
                  <svg width="64" height="64" viewBox="0 0 64 64"
                    fill='none'
                    stroke='#F5222D'
                    strokeWidth={5}
                    strokeLinejoin='round'
                    strokeLinecap='round'>
                    {[
                      "M43.5 21L32.25 32.25",
                      "M21 43.5L32.25 32.25",
                      "M21 21L32.25 32.25",
                      "M43.5 43.5L32.25 32.25"
                    ]
                      .map(path => (
                        <animated.path
                          key={path}
                          strokeDasharray={crossPath}
                          style={errorAnim}
                          d={path} />
                      ))}
                  </svg>
                </animated.div>
                : percentage === 100
                  ? <div className="progress-icon-container coral">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill='none' stroke='#16C42A' strokeWidth={5} strokeLinecap='round' strokeLinejoin='round'>
                      <animated.path
                        strokeDasharray={path}
                        style={successAnim}
                        d="M21.5 33L29 40.5L43.5 26" />
                    </svg>
                  </div>
                  : <div className='flex-container'><animated.div>{number.to(n => n.toFixed(0))}</animated.div>%</div>
          }
        </div>
      </div>
    </div>
  )
}

export { ProgressBar, ProgressBarIndeterminate, ProgressCircle }

ProgressBar.defaultProps = {
  percentage: 35,
  warningPercent: 48,
  errorPercent: 60
}
ProgressCircle.defaultProps = {
  percentage: 35,
  warningPercent: 48,
  errorPercent: 60
}