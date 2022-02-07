import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import ChevronDownIcon from '@seaweb/coral/icons/ChevronDown'
import TemplateIcon from '@seaweb/coral/icons/Template'
import PaperPlaneIcon from '@seaweb/coral/icons/PaperPlane';
import PhoneIcon from '@seaweb/coral/icons/Phone';
import ProfileIcon from '@seaweb/coral/icons/Profile';
import CogIcon from '@seaweb/coral/icons/Cog';
import ChevronDoubleLeftIcon from '@seaweb/coral/icons/ChevronDoubleLeft';
import MoreVerticalIcon from '@seaweb/coral/icons/MoreVertical';

const SideMenuSubItem = ({ label }) => {

  const [selected, setSelected] = useState(false)

  return (
    <li className="sidemenu-subitem" onClick={() => setSelected(!selected)}>
      <div className="submenu-title">{label}</div>
    </li>
  )
}

const SideMenuItem = ({ icon, label, open, children }) => {

  const [selected, setSelected] = useState(false)
  const [wasSelected, setWasSelected] = useState(false)
  const [hoverSub, setHoverSub] = useState(false)

  const arrow = useSpring({
    transform: selected ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 600, mass: .25, friction: 28 }
  })

  const sub = useRef(null)

  const submenu = useSpring({
    height: selected && children ? 40 * sub.current.childNodes.length : 0,
    config: { tension: 320, mass: .25, friction: 18 }
  })

  const submenuTransition = useTransition(hoverSub, {
    from: { x: 60, opacity: 1, pointerEvents: "all" },
    enter: { x: 66, opacity: 1, pointerEvents: "all" },
    leave: { x: 70, opacity: 0, pointerEvents: "none", config: { tension: 220, friction: 8 } },
    config: { mass: .125, friction: 12, tension: 180 }
  })

  const handleClick = () => {
    open && setSelected(!selected)
    setWasSelected(!wasSelected)
  }

  const handleHover = () => {
    if (!open && children) setHoverSub(true)
  }

  const handleOut = () => {
    if (!open && children) setHoverSub(false)
  }

  const subMenuGroup = children

  useEffect(() => {
    if (!open) setSelected(false)
    else if (open && wasSelected) setSelected(true)
  }, [open, wasSelected])

  return (
    <li className="sidemenu-item">
      <div className="container" onMouseEnter={handleHover} onMouseLeave={handleOut}>
        <div onClick={handleClick} className={open ? "flex-container sidemenu-item-content" : "flex-container sidemenu-item-content closed"}>
          <div className="icon-container">{icon}</div>
          <div className="menu-title">{label}</div>
          {children && <animated.div style={arrow} className="icon-container chevron-container"><ChevronDownIcon /></animated.div>}
          {children && !open ? <div className='ellipses-container'><MoreVerticalIcon size={16} /></div> : ''}
        </div>
        {children && <animated.ul style={submenu} ref={sub} className="sidemenu-subgroup">
          {children}
        </animated.ul>}
        {submenuTransition((style, show) => show && (
          <animated.ul style={style} className="sidemenu-subgroup float">
            <span className="submenu-label">{label}</span>
            {subMenuGroup}
          </animated.ul>
        ))}
      </div>
    </li>
  )
}

const SideMenuGroupLabel = ({ open, children }) => {

  const configuration = { tension: 300, friction: 24, mass: .5 }
  const labelAnim = useSpring(!open ? { height: 1, opacity: 0, paddingTop: 0, config: configuration } : { height: 40, paddingTop: 20, opacity: 1, config: configuration })
  return (
    <div className="sidemenu-label">
      <animated.li style={labelAnim}>
        {children}
      </animated.li>
    </div>
  )
}

const SideMenuGroup = ({ children }) => {
  return (
    <ul className="sidemenu-group">
      {children}
    </ul>
  )
}

const SideMenuMain = ({ children }) => {
  return (
    <div className='sidemenu-main'>
      {children}
    </div>
  )
}

const SideMenuFooter = ({ onClick, open, children }) => {

  return (
    <div className="sidemenu-footer">
      <ul>{children}</ul>
      <CollapseIcon onClick={onClick} open={open} />
    </div>
  )
}

const CollapseIcon = ({ onClick, open }) => {
  return (
    <div className="collapse-container" onClick={onClick}>
      <div className="icon-container" style={{ transform: !open ? 'rotate(180deg)' : '' }} >
        <ChevronDoubleLeftIcon size={16} />
      </div>
      <div className="bg">
        <svg width="22" height="42" viewBox="0 0 22 42" className='collapse'>
          <path d="M21 1L3.56408 7.70612C2.01932 8.30026 1 9.78442 1 11.4395V30.5605C1 32.2156 2.01932 33.6997 3.56408 34.2939L21 41" />
        </svg>
      </div>
    </div>
  )
}

const SideMenu = ({ initialCollapse, theme }) => {

  const [open, setOpen] = useState(true)

  const menuAnim = useSpring({ width: open ? 264 : 72, config: { tension: 600, friction: 22, mass: .25 } })

  return (
    <animated.div style={menuAnim} className={open ? `coral sidemenu ${theme}` : `coral sidemenu closed ${theme}`}>
      <SideMenuMain>
        <SideMenuGroup>
          <SideMenuGroupLabel open={open}>Active Review</SideMenuGroupLabel>
          <SideMenuItem open={open} icon={<TemplateIcon />} label="Menu 01">
            <SideMenuSubItem label="Sub Menu 01 01" />
            <SideMenuSubItem label="Sub Menu 01 02" />
            <SideMenuSubItem label="Sub Menu 01 03" />
          </SideMenuItem>
          <SideMenuItem open={open} icon={<PaperPlaneIcon />} label="Menu 02">
            <SideMenuSubItem label="Sub Menu 02 01" />
            <SideMenuSubItem label="Sub Menu 02 02" />
          </SideMenuItem>
          <SideMenuItem open={open} icon={<PhoneIcon />} label="Menu 03">
            <SideMenuSubItem label="Sub Menu 03 01" />
            <SideMenuSubItem label="Sub Menu 03 02" />
            <SideMenuSubItem label="Sub Menu 03 03" />
          </SideMenuItem>
          <SideMenuItem icon={<ProfileIcon />} label="Menu 04" />
          <SideMenuGroupLabel open={open}>Active Review</SideMenuGroupLabel>
          <SideMenuItem icon={<ProfileIcon />} label="Menu 05" />
          <SideMenuItem icon={<ProfileIcon />} label="Menu 06" />
        </SideMenuGroup>
      </SideMenuMain>
      <SideMenuFooter onClick={() => setOpen(!open)} open={open} >
        <SideMenuItem icon={<CogIcon />} label="Settings" />
      </SideMenuFooter>
    </animated.div>
  )
}

SideMenu.defaultProps = {
  theme: 'white',
  initialCollapse: false
}

SideMenuItem.defaultProps = {
  open: true,
}

export default SideMenu
export { SideMenuMain, SideMenuGroup, SideMenuGroupLabel, SideMenuItem, SideMenuSubItem, SideMenuFooter }
