import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import ChevronDownIcon from '@seaweb/coral/icons/ChevronDown';

const SelectButton = ({ placeholder, value, clicked }) => {

  const direction = useSpring(
    {
      transform: clicked ? 'rotate(180deg)' : 'rotate(0deg)',
      config: { tension: 600, mass: .25, friction: 28 }
    }
  )

  return (
    <div role="button" className={clicked ? "select-button clicked container" : "select-button container"}>
      <div style={{ flex: 1 }}>
        {!value ? <input type="text" readOnly placeholder={placeholder} name="" id="" /> : <ul>{value}</ul>}
      </div>
      <animated.div style={direction} className="arrow-container"><ChevronDownIcon /></animated.div>
    </div>
  )
}

const SelectList = ({ children, clicked, onChange }) => {
  const list = useRef()

  const transitions = useTransition(clicked, {
    from: { opacity: 0, y: -8 },
    enter: { opacity: 1, y: 0, pointerEvents: 'all', zIndex: 100 },
    leave: { opacity: 0, y: -8, pointerEvents: 'none' },
    config: { tension: 600, mass: .5 }
  })

  const listArray = [...children]

  const handleClick = (e) => {
    onChange(listArray[e.target.id])
  }

  return transitions(
    (styles, show) => show && <animated.div className="full select-list-container" style={styles}>
      <ul ref={list} onClick={handleClick} className="select-list">
        {children}
      </ul>
    </animated.div>
  )
}

const SelectOption = ({ children, value }) => {
  return (
    <li id={value} className=" select select-option">{children}
    </li>
  )
}

const Select = ({ children, size, value, onChange, label, placeholder }) => {

  const [clicked, setClicked] = useState(false)

  const selectWrapper = useRef()

  useEffect(() => {

    const handleClick = (e) => {
      if (selectWrapper && !selectWrapper.current.contains(e.target)) {
        setClicked(false)
      }
    }

    document.addEventListener('mousedown', handleClick)

    return()=> {
      document.removeEventListener('mousedown', handleClick)
    }
  })

  return (
    <div className="coral select container" ref={selectWrapper} style={{ width: "50%" }} onClick={() => setClicked(!clicked)}>
      <label htmlFor="">{label}</label>
      <SelectButton clicked={clicked} placeholder={placeholder} value={value} />
      <SelectList clicked={clicked} onChange={onChange}>
        {children}
      </SelectList>
    </div>
  )
}

Select.defaultProps = {
  size: 'medium',
  placeholder: 'Select Options'
}


export default Select
export { SelectList, SelectButton, SelectOption }
