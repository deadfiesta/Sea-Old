import { animated, useSpring } from 'react-spring'
import Lottie from 'lottie-react'
import user from '../lotties/89683-user-reviews.json'
import container from '../lotties/52421-adaptive-web-design.json'
import formFactor from '../lotties/62816-a-responsive-berry.json'

const NewEra = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  return (
    <animated.div style={fade} className="section">
      <div className="container new-era">
        <h2>The next era of responsive design</h2>
        <ul>
          <li>
            <div className="lottie-container">
              <Lottie loop autoplay animationData={user} />
            </div>
            <h3>User</h3>
          </li>
          <li>
            <div className="lottie-container">
            <Lottie loop autoplay animationData={container} />
            </div>
            <h3>Container</h3>
          </li>
          <li>
            <div className="lottie-container">
            <Lottie loop autoplay animationData={formFactor} />
            </div>
            <h3>Form Factor</h3>
          </li>
        </ul>
      </div>
    </animated.div>
  )
}

export default NewEra