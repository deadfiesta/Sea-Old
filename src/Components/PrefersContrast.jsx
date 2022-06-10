import { animated, useSpring } from 'react-spring'
import { useState, useEffect } from 'react'

const PrefersContrast = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  const [preference, setPreference] = useState('')
  window.matchMedia('(prefers-contrast: more)').addEventListener('change', e => e.matches && setPreference('prefers-contrast: more'))
  window.matchMedia('(prefers-contrast: less)').addEventListener('change', e => e.matches && setPreference('prefers-contrast: less'))
  window.matchMedia('(prefers-contrast: custom)').addEventListener('change', e => e.matches && setPreference('prefers-contrast: custom'))
  useEffect(() => {
    window.matchMedia && window.matchMedia('(prefers-contrast: more').matches ? setPreference('prefers-contrast: more') : window.matchMedia('(prefers-contrast: less').matches ? setPreference('prefers-contrast: less') : window.matchMedia('(prefers-contrast: custom').matches ? setPreference('prefers-contrast: custom') : setPreference('prefers-contrast: no-preference')
  }, [])

  return (
    <animated.div style={fade} className="section">
      <div className="container prefers-contrast">
        <h2>prefers-contrast</h2>
        <div className="settings"><span className="code">{preference}</span><p>is requested</p></div>
        <div className="box">
          <p>{preference === 'prefers-contrast: more' ? `Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the Boolean context.` : preference === 'prefers-contrast: less' ? `Indicates that user has notified the system that they prefer an interface that has a lower level of contrast.` : preference === 'prefers-contrast: custom' ? `Indicates that user has notified the system for using a specific set of colors, and the contrast implied by these colors matches neither more nor less. This value will match the color palette specified by users of forced-colors: active.` : `Indicates that the user has made no preference known to the system. This keyword value evaluates as false in the Boolean context.`}</p>
        </div>
      </div>
    </animated.div>
  )
}

export default PrefersContrast