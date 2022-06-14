import { animated, useSpring } from 'react-spring'
import { useState, useEffect } from 'react'
import LottiePair from './LottiePair'
import light from '../lotties/14444-sunny.json'
import dark from '../lotties/92393-moon.json'

const ColorScheme = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  const [color, setColor] = useState('')
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => e.matches && setColor('prefers-color-scheme: dark'))
  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => e.matches && setColor('prefers-color-scheme: light'))
  useEffect(()=> {
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches ? setColor('prefers-color-scheme: dark') : window.matchMedia('(prefers-color-scheme: light').matches ? setColor('prefers-color-scheme: light') : setColor('prefers-color-scheme: none')
  }, [])
  return (
    <animated.div style={fade} className="section">
      <div className="container color-scheme">
        <h2>prefers-color-scheme</h2>
        <p>This feature helps you to customize your UI to the theme which your user prefers. In their operating system, whether it's on desktop or mobile, users can set a preference for light, dark, or auto themes, which change depending on the time of day.</p>
        <div className="settings"><span className="code">{color}</span></div>
        <LottiePair darkMode={darkMode} lightData={light} darkData={dark} />
        <ul>
          <li className='one'></li>
          <li className='two'></li>
          <li className='three'></li>
          <li className='four'></li>
          <li className='five'></li>
          <li className='six'></li>
          <li className='seven'></li>
          <li className='eight'></li>
          <li className='nine'></li>
          <li className='ten'></li>
          <li className='eleven'></li>
          <li className='twelve'></li>
        </ul>
      </div>
    </animated.div>
  )
}

export default ColorScheme