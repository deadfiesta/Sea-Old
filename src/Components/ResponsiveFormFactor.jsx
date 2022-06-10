import { animated, useSpring } from 'react-spring'
import video from '../videos/formfactor.mp4'

const ResponsiveFormFactor = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  return (
    <animated.div style={fade} className="section">
      <div className="container responsive-formfactor">
        <h2>Responsive to the form factor</h2>
        <p>The next topic in our conversation about the new era of responsive design is a shift in form factors, and the growing possibilities of what we'll need to be designing for as a web community (such as shape-shifting screen or virtual reality).</p>
        <p>Foldable or flexible screens, and designing for screen spanning is one example of where we can see a form factor shift today. And screen-spanning is yet another spec being worked on to cover these new form factors and needs.</p>
        <video width="100%" data-autoplay data-keepplaying autoPlay muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </animated.div>
  )
}

export default ResponsiveFormFactor