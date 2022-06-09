import Lottie from 'lottie-react'
import { animated, useTransition } from 'react-spring'

const LottiePair = ({ lightData, darkData, darkMode }) => {
  const darkTransitions = useTransition(darkMode, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <div className="lottie-container">
    {darkTransitions(style =>
      darkMode ? (
        <animated.div style={style} className="lottie2">
          <Lottie animationData={darkData} autoplay loop />
        </animated.div>
      ) : (
        <animated.div style={style} className="lottie1">
          <Lottie animationData={lightData} autoplay loop />
        </animated.div>
      ))}
  </div>
  )
}

export default LottiePair