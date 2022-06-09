import { animated, useSpring } from 'react-spring'
import LottiePair from './LottiePair'
import light from '../lotties/101299-sad-emotion-light.json'
import dark from '../lotties/84655-sad-emoji-dark.json'

const PerceptionChanged = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  return (
    <animated.div style={fade} className="section">
      <div className="container perception-change">
      <h2>But soon, this perception of responsive design may be considered as outdated.</h2>
      <p>Viewport-based media queries give you some powerful tools, but <strong>lack a lot of finesse</strong>. They lack the ability to respond to user needs, and the ability to inject responsive styles into components themselves.</p> 
      <LottiePair darkMode={darkMode} lightData={light} darkData={dark} />
      </div>

    </animated.div>
  )
}

export default PerceptionChanged