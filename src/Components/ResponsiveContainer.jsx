import { animated, useSpring } from 'react-spring'
import video from '../videos/container.mp4'

const ResponsiveContainer = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  return (
    <animated.div style={fade} className="section">
      <div className="container responsive-container" style={{ width: '100%' }}>
        <h2>Responsive to the container</h2>
        <ul className='video-content'>
          <li><p>One of the most exciting emerging areas in CSS is container queries, also frequently called element queries. It's hard to understate what the shift from page-based responsive design to container-based responsive design will do to evolve the design ecosystem.</p></li>
          <li><p>Here's an example of the powerful abilities that container queries provide. You can manipulate any of the card element's styles, including the link list, font sizes, and overall layout based on its parent container:</p></li>
          <li><video height="100%" data-autoplay data-keepplaying autoPlay muted playsInline>
              <source src={video} type="video/mp4" />
            </video></li>
        </ul>
      </div>
    </animated.div>
  )
}

export default ResponsiveContainer