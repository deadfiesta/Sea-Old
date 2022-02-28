import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { animated, useSpring } from 'react-spring'
import ChevronDownIcon from '@seaweb/coral/icons/ChevronDown';
import CaretRightIcon from '@seaweb/coral/icons/CaretRight';

const SelectTreeButton = ({ placeholder, value, clicked }) => {
  const direction = useSpring(
    {
      transform: clicked ? 'rotate(180deg)' : 'rotate(0deg)',
      config: { tension: 600, mass: .25, friction: 28 }
    }
  )
  return (
    <div role="button" className={clicked ? "select-button clicked container" : "select-button container"}>
      <div style={{ flex: 1 }}>
        {!value ? <input type="text" readOnly placeholder={placeholder} name="" id="" /> : <div>{value}</div>}
      </div>
      <animated.div style={direction} className="arrow-container"><ChevronDownIcon /></animated.div>
    </div>
  )
}

const SelectTreeList = ({ clicked, children }) => {

  const styles = useSpring(clicked ? {
    opacity: 1,
    y: 0,
    pointerEvents: 'all',
    zIndex: 100,
    config: { tension: 600, mass: .5 }
  } : {
    opacity: 0,
    y: clicked - 8,
    pointerEvents: 'none',
    zIndex: '',
  })

  return (
    <animated.div style={styles} className="full select-list-container">
      <ul className="coral select-list">{children}</ul>
    </animated.div>
  )
}

const SelectTreeNode = ({ children, value, label, nest }) => {
  const select = useRef(null)
  const wrapper = useRef(null)
  const childHeight = useRef(0)
  const extraHeight = useRef(0)

  const [nested, setNested] = useState(false)
  const [expand, setExpand] = useState(false)
  const caret = useSpring({ transform: expand ? "rotate(90deg)" : 'rotate(0deg)', config: { tension: 600, mass: .25, friction: 28 } })
  const styles = useSpring(expand ? {
    height: childHeight.current * children.length + extraHeight.current,
    pointerEvents: 'all',
    opacity: 1,
    config: { mass: .25, friction: 14, tension: 240 }
  } : {
    pointerEvents: 'none',
    height: 0,
    opacity: 0,
  })


  useEffect(() => {

    if (select.current.parentElement.classList.contains('nested')) {
      setNested(true)
    }

    if (children) {
      console.log(children.length)
      childHeight.current = wrapper.current.firstChild.offsetHeight
    }

    console.log(nested)
  }, [setNested, nested, children])

  return (
    <li ref={select} key={`selectnode-${value}`} className={children ? "select-node" : "select-option"}>
      {children
        ? <div className="tree-menu-container">
          <div className="flex-container select select-option">
            <animated.div onClick={() => setExpand(!expand)} className="icon-container caret" style={{ ...caret, height: 20, width: 16, display: 'grid', placeItems: 'center' }}> <div className="click-area" /><CaretRightIcon size={16} /></animated.div>{label}</div>
          <animated.div style={{...styles}} className="tree-menu flex-container">
            <div className="line" />
            <ul className="nested" ref={wrapper} >
              {children}
            </ul>
          </animated.div>
        </div>
        : <div className="select flex-container">{label}</div>}
    </li>
  )
}

const SelectTree = ({ children, value }) => {

  const [open, setOpen] = useState(false)

  const selectWrapper = useRef()

  useEffect(() => {

    const handleClick = (e, data) => {
      if (selectWrapper) {
        if (!selectWrapper.current.contains(e.target)) {
          setOpen(false)
        } else if (e.target.parentElement.classList.contains('icon-container')) {
          setOpen(true)
        } else if (!e.target.parentElement.classList.contains('icon-container') && selectWrapper.current.contains(e.target) && open === true) {
          setOpen(false)
        } else {
          setOpen(true)
        }
      }
    }
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }

  })
  return (
    <div className="coral select" ref={selectWrapper} style={{ width: "50%" }}>
      <SelectTreeButton clicked={open} value={value} placeholder="Select Option" />
      <SelectTreeList clicked={open}>
        {children}
      </SelectTreeList>
    </div>
  )
}

export default SelectTree
export { SelectTreeNode }

SelectTreeNode.defaultProps = {
  nest: 1,
}