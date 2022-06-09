import React from 'react'
import Lottie from 'lottie-react';
import { animated, useSpring } from 'react-spring'
import anim from '../lotties/54504-confetti.json'

const GoodNews = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  return (
    <animated.div style={fade} className="section">
      <div className="container good-news">
        <h2>The good news is, the ecosystem is changing, and it's changing pretty rapidly. CSS is evolving, and a new era of responsive design is right on the horizon.</h2>
        <div className="lottie-container">
          <Lottie loop autoplay animationData={anim} />
        </div>
      </div>
    </animated.div>
  )
}

export default GoodNews