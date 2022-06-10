import { animated, useSpring } from 'react-spring'
import Lottie from 'lottie-react'
import user from '../lotties/72874-user-profile-v2.json'

const ResponsiveUser = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })

  return (
    <animated.div style={fade} className="section">
      <div className="container responsive-user">
        <h2>Responsive to the user</h2>
        <div className="lottie-container">
            <Lottie loop autoplay animationData={user} />
            </div>
        <p>New user preference media features, give you the ability to style web experiences that align with the user's own specific preferences and needs. This means that preference media features allow you to adapt your user experiences to your user's experiences.</p>
        <ul>
          <li><span className="code">prefers-reduced-motion</span></li>
          <li><span className="code">prefers-contrast</span></li>
          <li><span className="code">prefers-reduced-transparency</span></li>
          <li><span className="code">prefers-color-scheme</span></li>
          <li><span className="code">inverted-colors</span></li>
          <li><p>And others!</p></li>
        </ul>
      </div>
    </animated.div>
  )
}

export default ResponsiveUser