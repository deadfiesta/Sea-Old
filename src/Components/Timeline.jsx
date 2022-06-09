import { animated, useSpring, useTransition } from 'react-spring'
import { useState } from 'react'
import Lightbox from './Lightbox'
import Lottie from 'lottie-react'
import anim from '../lotties/77365-location-lottie-animation.json'
import appleOne from '../images/apple-1996.png'
import appleTwo from '../images/apple-1998.png'
import appleThree from '../images/apple-2010.png'
import appleFour from '../images/apple-2012.png'
import appleFive from '../images/apple-2017.jpg'
import appleHere from '../images/apple-2022.png'


const Timeline = ({ darkMode, currentIndex, i, fadeConfig }) => {
  const fade = useSpring({ opacity: currentIndex === i ? 1 : 0, config: fadeConfig })
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState()
  const handleOnClick = (e) => {
    switch (e.currentTarget.className) {
      default:
      case 'one':
        setSrc(appleOne)
        break;
      case 'two':
        setSrc(appleTwo)
        break;
      case 'three':
        setSrc(appleThree)
        break
      case 'four':
        setSrc(appleFour)
        break
      case 'five':
        setSrc(appleFive)
        break
      case 'here':
        setSrc(appleHere)
        break
    }
    setIsOpen(!isOpen)
  }
  const transition = useTransition(isOpen, {
    from: { opacity: 0, },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <animated.div style={fade} className="section">
      {transition((style) => isOpen && (
        <Lightbox src={src} onClick={() => setIsOpen(!isOpen)} style={style} />
      ))}
      <div className="container timeline">
        <h2>We see this happen about every 10 years. 10 years ago, around 2010-2012, we saw a huge change with mobile and responsive design, and the emergence of CSS3.</h2>
        <div className="timeline-container">
          <div className="year">
            <p className='one'>1996</p>
            <p className='two'>1998</p>
            <p className='three'>2010</p>
            <p className='four'>2012</p>
            <p className='five'>2017</p>
            <p className='six'>2022</p>
          </div>
          <ul className="dots">
            <li><h2>&#8226;</h2></li>
            <li><h2>&#8226;</h2></li>
            <li><h2>&#8226;</h2></li>
            <li><h2>&#8226;</h2></li>
            <li><h2>&#8226;</h2></li>
            <li><h2>&#8226;</h2>
              <div className="lottie-container">
                <Lottie animationData={anim} autoplay loop />
              </div></li>
          </ul>
          <div className="event">
            <div onClick={handleOnClick} className='one'><h4>CSS 1</h4></div>
            <div onClick={handleOnClick} className='two'><h4>CSS 2</h4></div>
            <div onClick={handleOnClick} className='three'><h4>CSS 3</h4><h4>Responsive Web Design</h4><h4>Web fonts</h4></div>
            <div onClick={handleOnClick} className='four'><h4>Media Queries</h4><h4>Flexbox</h4></div>
            <div onClick={handleOnClick} className='five'><h4>Grid</h4></div>
            <div onClick={handleOnClick} className='here'><h4>You are here</h4></div>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export default Timeline