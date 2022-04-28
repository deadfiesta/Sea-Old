import React from 'react'
import { useRef, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import CheckCircleFIcon from '@seaweb/coral/icons/CheckCircleF';
import WarningFIcon from '@seaweb/coral/icons/WarningF';
import CrossCircleFIcon from '@seaweb/coral/icons/CrossCircleF';

const ProgressBar = ({ percentage, useWarning, warningPercent, useError, errorPercent }) => {
  const progress = useSpring({ transform: percentage === warningPercent && useWarning ? `translateX(${warningPercent}%) translateY(-50%)` : percentage === errorPercent && useError ? `translateX(${errorPercent}%) translateY(-50%)` : `translateX(${percentage}%) translateY(-50%)`, config: percentage !== 100 ? { mass: .5, tension: 240 } : { duration: 0 } })
  const barColor = useSpring({ stroke: percentage === warningPercent && useWarning ? '#F5AC1B' : percentage === errorPercent && useError ? '#F5222D' : percentage === 100 ? '#16C42A' : '#1B92F5', config: { mass: .25, tension: 300 } })
  const successAnim = useSpring({ to: percentage === 100 ? { scale: 1, opacity: 1 } : { scale: .75, opacity: 0 }, config: { mass: .75, tension: 300, friction: 12 } })
  const errorAnim = useSpring({ to: percentage === errorPercent && useError ? { transform: 'scale(1) rotate(0deg)' } : { transform: 'scale(0.75) rotate(2deg)' }, config: { mass: .45, tension: 900, friction: 10 } })
  const warningAnim = useSpring({ to: percentage === warningPercent && useWarning ? { transform: 'scale(1) rotate(0deg)' } : { transform: 'scale(0.75) rotate(2deg)' }, config: { mass: .45, tension: 900, friction: 10 } })

  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <animated.svg style={{ ...progress, ...barColor }} className='loadingbar' viewBox="0 0 418 8">
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
                  : `${percentage}%`
          }
        </div>
      </div>
    </div >
  )
}

const ProgressCircle = ({ percentage, useWarning, warningPercent, useError, errorPercent }) => {
  const len = 232.1023406982422
  const circle = useSpring({ strokeDasharray: len, strokeDashoffset: len - (percentage / 100 * len), config: percentage !== 100 ? { mass: .5, tension: 240 } : { duration: 0 } })
  const circ = useRef(null)

  const barColor = useSpring({ stroke: percentage === warningPercent && useWarning ? '#F5AC1B' : percentage === errorPercent && useError ? '#F5222D' : percentage === 100 ? '#16C42A' : '#1B92F5', config: { mass: .25, tension: 300 } })
  const successAnim = useSpring({ to: percentage === 100 ? { scale: 1, opacity: 1 } : { scale: .75, opacity: 0 }, config: { mass: .75, tension: 300, friction: 12 } })
  const errorAnim = useSpring({ to: percentage === errorPercent && useError ? { transform: 'scale(1) rotate(0deg)' } : { transform: 'scale(0.75) rotate(2deg)' }, config: { mass: .45, tension: 900, friction: 10 } })
  const warningAnim = useSpring({ to: percentage === warningPercent && useWarning ? { transform: 'scale(1) rotate(0deg)' } : { transform: 'scale(0.75) rotate(2deg)' }, config: { mass: .45, tension: 900, friction: 10 } })
  useEffect(() => {
    console.log(circ.current.getTotalLength())
  })

  return (
    <div className='progress-circle-container'>
      <svg className='progress-circle circle-loader' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <animated.circle style={{ ...circle, ...barColor }} ref={circ} cx="40" cy="40" r="37" stroke="#16C42A" />
      </svg>
      <svg className='progress-circle circle-bg' width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="37" />
      </svg>
      <div className="circle-number-container">
        <div className="circle-number coral">
          {
            percentage === warningPercent && useWarning
              ? <animated.div style={warningAnim} className="progress-icon-container">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M31.9996 16.0002C30.6741 16.0002 29.5996 17.0748 29.5996 18.4002V36.0002C29.5996 37.3257 30.6741 38.4002 31.9996 38.4002C33.3251 38.4002 34.3996 37.3257 34.3996 36.0002V18.4002C34.3996 17.0748 33.3251 16.0002 31.9996 16.0002ZM31.9996 48.0002C33.7669 48.0002 35.1996 46.5676 35.1996 44.8002C35.1996 43.0329 33.7669 41.6002 31.9996 41.6002C30.2323 41.6002 28.7996 43.0329 28.7996 44.8002C28.7996 46.5676 30.2323 48.0002 31.9996 48.0002Z" fill="#F5222D" />
                </svg>
              </animated.div>
              : percentage === errorPercent && useError
                ? <animated.div style={errorAnim} className="progress-icon-container"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M31.9996 16.0002C30.6741 16.0002 29.5996 17.0748 29.5996 18.4002V36.0002C29.5996 37.3257 30.6741 38.4002 31.9996 38.4002C33.3251 38.4002 34.3996 37.3257 34.3996 36.0002V18.4002C34.3996 17.0748 33.3251 16.0002 31.9996 16.0002ZM31.9996 48.0002C33.7669 48.0002 35.1996 46.5676 35.1996 44.8002C35.1996 43.0329 33.7669 41.6002 31.9996 41.6002C30.2323 41.6002 28.7996 43.0329 28.7996 44.8002C28.7996 46.5676 30.2323 48.0002 31.9996 48.0002Z" fill="#F5222D" />
                </svg></animated.div>
                : percentage === 100
                  ? <animated.div style={successAnim} className="progress-icon-container coral"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.6935 31.2904C18.7563 32.2276 18.7563 33.7472 19.6935 34.6845L27.1606 42.1515C27.4139 42.4049 27.7098 42.5897 28.0252 42.7061C28.8778 43.0227 29.8742 42.8384 30.5593 42.1532L45.2671 27.4454C46.2044 26.5082 46.2044 24.9886 45.2671 24.0513C44.3299 23.1141 42.8103 23.1141 41.873 24.0513L28.8608 37.0635L23.0876 31.2904C22.1504 30.3531 20.6308 30.3531 19.6935 31.2904Z" fill="#16C42A" />
                  </svg></animated.div>
                  : `${percentage}%`
          }
        </div>
      </div>
    </div>
  )
}

export { ProgressBar, ProgressCircle }

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