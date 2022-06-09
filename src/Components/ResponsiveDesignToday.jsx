import { animated, useSpring } from 'react-spring'
import LottiePair from './LottiePair'
import light from '../lotties/96516-responsive-design-light.json'
import dark from '../lotties/58688-responsive-design-dark.json'

const ResponsiveDesignToday = ({ darkMode, currentIndex, i, fadeConfig}) => {

  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })

  return (
    <animated.div style={fade} className="section">
      <div className="responsive-today container">
        <h1>Responsive Design Today</h1>
        <div className="block">
          <LottiePair darkMode={darkMode} lightData={light} darkData={dark} />
          <p>Today, when using the term: <strong>"responsive design"</strong>, you are most likely thinking about using media queries to change layout when resizing a design from mobile size, to tablet size, through to desktop size.</p>

        </div>
      </div>
    </animated.div>
  )
}

export default ResponsiveDesignToday