import { animated, useSpring } from 'react-spring'
import video from '../videos/container-query.mp4'

const ContainerQuery = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  return (
    <animated.div style={fade} className="section">
      <div className="container container-query">
        <h2>Container query cards</h2>
        <p>In this demo plant website, each of the product cards, including the one in the hero, the sidebar of recently viewed items, and the product grid, are all the exact same component, with the same markup.</p> 
        <video width="100%" data-autoplay data-keepplaying autoPlay muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </animated.div>
  )
}

export default ContainerQuery