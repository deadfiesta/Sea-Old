import { animated, useSpring } from 'react-spring'

const NewResponsive = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  return (
    <animated.div style={fade} className="section">
      <div className="container new-responsive">
        <h2>The New Responsive</h2>
        <p>This is the new responsive. It's combining macro layout with micro layout, and on top of all of that, it's taking user customization and form factor into account.</p>
        <div className="main">
          <div className="user round">
            <span>User Preference styles</span>
            <div className="viewport round">
              <span>Viewport & Form-factor</span>
              <div className="macro round">
                <span>Macros layouts</span>
                <div className="container-styles round">
                  <span>Container styles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default NewResponsive