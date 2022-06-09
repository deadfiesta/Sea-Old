
import { animated, useSpring } from 'react-spring'
import LottiePair from './LottiePair'
import animationData from '../lotties/35806-responsive-icon-animation.json'
import thinkingData from '../lotties/108170-cute-coffie-sleeping.json'

const Homepage = ({ darkMode, currentIndex, i, fadeConfig }) => {

  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })

  return (
    <animated.div style={fade} className="section">
      <div className="homepage container">
        <div className="title-block">
          <h1>Responsive Design</h1>
          <div className="padded">
            <h2>The Past, Present, and Future</h2>
          </div>
        </div>
       <LottiePair darkMode={darkMode} lightData={animationData} darkData={thinkingData} />
        <div className="block">
          <h3>Sharing by Wen Kiong</h3>
          <h4>June 10, 2022</h4>
        </div>
      </div>
    </animated.div>
  )
}

export default Homepage