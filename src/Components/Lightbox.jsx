import { animated } from 'react-spring'

const Lightbox = ({ style, onClick, src }) => {
  return (
    <animated.div onClick={onClick} style={style} className="lightbox">
      <img src={src} alt="img" />
    </animated.div>
  )
}

export default Lightbox