import { animated, useSpring } from 'react-spring'
import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import crying from '../lotties/91534-sad-loudly-crying-face-emoji.json'
import lovely from '../lotties/91533-smiling-face-with-heart-shaped-eyes-emoji.json'
import wink from '../lotties/91530-pink-tongue-emoji.json'

const ReduceMotion = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const [motion, setMotion] = useState('')
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  useEffect(() => {
    window.matchMedia && window.matchMedia('(prefers-reduce-motion: reduced').matches ? setMotion('prefers-reduce-motion: reduced') : setMotion('prefers-reduce-motion: none')
  }, [])
  return (
    <animated.div style={fade} className="section">
      <div className="container reduce-motion">
        <h2>prefers-reduced-motion</h2>
        <p>Prefers-reduced-motion shouldn't mean "no motion", since motion is so critical to conveying information online. Instead, provide a solid baseline experience that guides your users without unnecessary movement, and progressively enhance that experience for your users without those accessibility needs or preferences.</p>
        <div className="settings"><span className="code">{motion}</span>{motion === 'prefers-reduce-motion: reduced' && <p>is requested</p>}</div>
        <ul>
          <li>
            <div className="card-wrapper">
              <div className="card-front">
                <h3>Flip for surprise</h3>
              </div>
              <div className="card-back">
                <div className="lottie-container">
                  <Lottie loop autoplay animationData={crying} />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card-wrapper">
              <div className="card-front">
                <h3>Flip for surprise</h3>
              </div>
              <div className="card-back">
                <div className="lottie-container">
                  <Lottie loop autoplay animationData={lovely} />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card-wrapper">
              <div className="card-front">
                <h3>Flip for surprise</h3>
              </div>
              <div className="card-back">
                <div className="lottie-container">
                  <Lottie loop autoplay animationData={wink} />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </animated.div>
  )
}

export default ReduceMotion