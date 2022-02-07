import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'
import CrossCircleFIcon from '@seaweb/coral/icons/CrossCircleF';

const TextField = ({ type, clear, label, value, helper, validation, size, leadIcon, trailIcon, trailClick, prefix, prefixDivider, prefixOpacity, suffix, suffixDivider, suffixOpacity, onChange, placeholder, name, id }) => {

  const input = useRef()
  const [style, api] = useSpring(() => ({ from: { width: 304 }, config: { tension: 400, friction: 22 } }))
  const [visible, setVisible] = useState(false)
  const transition = useTransition(visible, {
    from: { opacity: 0, scale: 0.5 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.5 },
    config: { tension: 800, mass: .75, friction: 24 }
  })

  switch (size) {
    case 'xs':
      api.start({ width: 96 })
      break
    case 's':
      api.start({ width: 200 })
      break
    default:
    case 'm':
      api.start({ width: 304 })
      break
    case 'l':
      api.start({ width: 408 })
      break
    case 'xl':
      api.start({ width: 512 })
  }

  useEffect(() => {
    if (value.length > 0) setVisible(true)
    else setVisible(false)
  }, [value, setVisible])

  return (
    <div className="coral textfield">
      {label && <label htmlFor={name}>{label} {validation === 'required' && <span className="asterisk">*</span>}</label>}
      <animated.div ref={input} className={validation ? `input ${validation}` : 'input'} style={style}>
        {prefix && <div className="padding prefix" style={{ color: prefixOpacity ? "#9499A4" : '' }}>{prefix}</div>}
        {prefix && prefixDivider && <span className='vertical-divider' />}

        <div className="input-container padding flex-container" style={{ gap: ".5rem" }}>
          {leadIcon && <div className="flex-container middle">{leadIcon}</div>}
          <input disabled={validation === 'disabled' ? true : false} onBlur={() => input.current.classList.toggle('focus')} onFocus={() => input.current.classList.toggle('focus')} value={value} onChange={onChange} placeholder={placeholder} type={type} name={name} id={id} />
          {transition((style, appear) => appear
            ? <animated.div onClick={clear} style={style} className="flex-container middle clear-button"><CrossCircleFIcon /></animated.div>
            : '')}
          {trailIcon && <div onClick={trailClick} className="flex-container middle trailing-icon">{trailIcon}</div>}
        </div>
        {suffix && suffixDivider && <span className="vertical-divider" />}
        {suffix && <div className='padding suffix' style={{ color: suffixOpacity ? "#9499A4" : '' }}>{suffix}</div>}
      </animated.div>
      {helper && <div className={validation ? `helper ${validation}` : 'helper'} >{helper}</div>}
    </div>
  )
}

export default TextField

TextField.defaultProps = {
  type: 'text',
  size: 'medium',
  name: 'textfield',
  id: 'textfield',
  placeholder: 'Type your message here'
}