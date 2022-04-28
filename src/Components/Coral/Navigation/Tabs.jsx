import React from 'react'
import { animated, useSpring, useTransition } from 'react-spring'
import { useState, useEffect } from 'react'
import EditIcon from '@seaweb/coral/icons/Edit';
import InfoOIcon from '@seaweb/coral/icons/InfoO';
import WarningOIcon from '@seaweb/coral/icons/WarningO';
import SortIcon from '@seaweb/coral/icons/Sort';
import DesktopIcon from '@seaweb/coral/icons/Desktop';
import CoinCheckIcon from '@seaweb/coral/icons/CoinCheck';
import VoteIcon from '@seaweb/coral/icons/Vote';
import VipIcon from '@seaweb/coral/icons/Vip';
import VideoIcon from '@seaweb/coral/icons/Video';

import NoteIcon from '@seaweb/coral/icons/Note';
import PaperPlaneIcon from '@seaweb/coral/icons/PaperPlane';
import PhoneIcon from '@seaweb/coral/icons/Phone';

const Details = () => (
  <div className="coral compact details">
    <div className="detail-page">
      <div className="section">
        <div className="title-container"><h3>Basic</h3></div>
        <ul className="form summary">
          <li className="form-content"><div className="label">Namespace</div><div className="input">nmspc-1</div></li>
          <li className="form-content"><div className="label">Region</div><div className="input">Singapore</div></li>
          <li className="form-content"><div className="label">Description</div><div className="input">Dui turpis adipiscing pharetra, volutpat risus. Elementum et ultrices faucibus habitasse risus at. Id egestas psuere elit quis molestie. <div className="btn-edit"><EditIcon /></div> </div></li>
          <li className="form-content"><div className="label">Creation time</div><div className="input">7 Feb, 2022, 12:40 GMT+8:00</div></li>
        </ul>
      </div>
      <div className="section">
        <div className="title-container"><h3>Instances</h3></div>
        <ul className="form summary">
          <li className="form-content"><div className="label">Last deployment time</div><div className="input">7 Feb, 2022, 12:40 GMT+8:00</div></li>
          <li className="form-content"><div className="label">Number of instance <InfoOIcon size={16} /></div><div className="input">2/3 <WarningOIcon size={16} color={'#F5AC1B'} /></div></li>
          <li className="form-content"><div className="label">vCPU and memory</div><div className="input">1 vCPU, 2GB</div></li>
          <li className="form-content"><div className="label">Image path</div><div className="input">registry-1.instance.cir.sg-sin.sealcloud.com/folder-1/repo-1:v1</div></li>
        </ul>
      </div>
    </div>
  </div>
)

const Events = () => {
  const eventsData = [
    {
      time: '7 Feb, 2022, 12:40 GMT+8',
      class: 'Normal',
      reason: 'Started',
      source: '84719c4c-36ff-4e9c-...4bc56',
      message: 'Back-off restarting failed container',
      count: 1
    },
    {
      time: '7 Feb, 2022, 12:40 GMT+8',
      class: 'Normal',
      reason: 'Created',
      source: '84719c4c-36ff-4e9c-...4bc56',
      message: `Readiness probe failed: httpGet Get “http://localhost:123/path/path”: dial tcp[::1]:123: connect: connection refused`,
      count: 1
    },
    {
      time: '7 Feb, 2022, 12:40 GMT+8',
      class: 'Normal',
      reason: 'Pulling',
      source: '84719c4c-36ff-4e9c-...4bc56',
      message: `Warning FailedCreatePodSandbox 17m kubelet Failed to create pod sandboxL rpc errorL code = Unknown desc = failed to setup network for sandbox “5568d0f5fe2ae1d168768b371dd95ef430c270We 5460a9302370643764376b2b6f2d65”: Got invalid status code from CNI daemon. ; Traceback (most recent call last): File “/usr/local/lib/python3.8/dist-packages/kuryr_kubernetes/cni/api.py”, line 77, in run vif = self._add(params)File “/usr/local/lib/python3.8/dist-packages/kuryr_kubernetes/cni/api.py”, line 131, in _add resp = self._make_request(addNetwork, params, httplib.ACCEPTED)File “/usr/local/lib/python3.8/dist-packages/kuryr_kubernetes/cni/api.py”, line 168, in _make_request raise k_exc.CNIError(Got invalid status code from CNI daemon. )kuryr_kubernetes.exceptions.CNIError: Got invalid status code from CNI daemon. Normal Started 15m kubelet Started container redis Normal Created 15m kubelet Started container sysctl Normal Started 15m kubelet Started container sysctl`,
      count: 1
    },
    {
      time: '7 Feb, 2022, 12:40 GMT+8',
      class: 'Warning',
      reason: 'Pulled',
      source: '84719c4c-36ff-4e9c-...4bc56',
      message: `Stopping container test-app-23b7e3b8-f250-455c-b902-46bbb32b77d6`,
      count: 1
    },
    {
      time: '7 Feb, 2022, 12:40 GMT+8',
      class: 'Warning',
      reason: 'Schedule',
      source: '84719c4c-36ff-4e9c-...4bc56',
      message: 'Liveness probe errored: rpc error: code = Unknown desc = failed to exec in container: container is in CONTAINER_EXITED state',
      count: 1
    },
  ]
  return (
    <div className='coral compact details'>
      <table className="cloud">
        <thead>
          <tr>
            <th><div className="cell time" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>Started time <SortIcon size={16} /></div></th>
            <th><div className="cell class">Class</div></th>
            <th><div className="cell reason">Reason</div></th>
            <th><div className="cell source">Source</div></th>
            <th><div className="cell message">Message</div></th>
            <th><div className="cell count">Count</div></th>
          </tr>
        </thead>
        <tbody>
          {eventsData.map((data, i) => (
            <tr key={`rowData${i}`}>
              <td><div className="cell time">{data.time}</div></td>
              <td><div className="cell class"><span className={data.class !== 'Normal' ? 'status yellow' : 'status'} />{data.class}</div></td>
              <td><div className="cell reason">{data.reason}</div></td>
              <td><div className="cell source">{data.source}</div></td>
              <td><div className="cell message">{data.message}</div></td>
              <td><div className="cell count">{data.count}</div></td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}

const Log = () => {
  const logData = [
    {
      path: '/tmp/test.log*',
      time: '7 Feb, 2022, 12:40 GMT+8:00',
      view: 'View logs',
    },
    {
      path: '/tmp/test.log*',
      time: '7 Feb, 2022, 12:40 GMT+8:00',
      view: 'View logs',
    },
    {
      path: '/tmp/test.log*',
      time: '7 Feb, 2022, 12:40 GMT+8:00',
      view: 'View logs',
    },
    {
      path: '/tmp/test.log*',
      time: '7 Feb, 2022, 12:40 GMT+8:00',
      view: 'View logs',
    },
    {
      path: '/tmp/test.log*',
      time: '7 Feb, 2022, 12:40 GMT+8:00',
      view: 'View logs',
    },
  ]
  return (
    <div className="coral compact details">
      <table className="cloud">
        <thead>
          <tr>
            <th><div className="cell path" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>Log path <SortIcon size={16} /></div></th>
            <th><div className="cell create" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>Creation time <SortIcon size={16} /></div></th>
            <th><div className="cell view"></div></th>
          </tr>
        </thead>
        <tbody>
          {logData.map((data, i) => (
            <tr key={`logdata${i}`}>
              <td><div className="cell path">{data.path}</div></td>
              <td><div className="cell create">{data.time}</div></td>
              <td><div className="cell view"><button>{data.view}</button></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Vertical = () => {
  const [activeVertical, setActiveVertical] = useState(0)
  // const [currentVertical, setCurrentVertical] = useState(0)

  const iconSize = 20
  const menuVerticalList = [<NoteIcon size={iconSize} />, <PaperPlaneIcon size={iconSize}/>, <PhoneIcon size={iconSize}/>, <DesktopIcon size={iconSize} />, <CoinCheckIcon size={iconSize} />, <VoteIcon size={iconSize} />, <VipIcon size={iconSize} />, <VideoIcon size={iconSize} /> ]
  
  const [highlight, move] = useSpring(()=> ({ top: 0, height: 0, config: { tension: 200, friction: 14, mass: .125 } }))

  useEffect(()=> {
    let current = document.querySelector('.vertical-menu').childNodes[activeVertical]
    current !== null && move.start({ top: current.offsetTop, height: current.offsetHeight })
  })

  return (
    <div className="coral compact vertical-demo">
      <ul className="vertical-menu">
        {menuVerticalList.map((item, i) => (
          <li onClick={()=>setActiveVertical(i)} key={`verticalmenu#${i}`} className={ item && activeVertical === i ? 'vmenu active' : 'vmenu' }>{item}</li>
        ))}
        <animated.li style={highlight} className="highlight"></animated.li>
      </ul>
      <div className="vertical-content-container">
        here
      </div>
    </div>
  )
}

const Tabs = () => {

  const tabsArr = [{ title: 'Details', disabled: false }, { title: 'Instances', disabled: true }, { title: 'Events', disabled: false }, { title: 'Log files', disabled: false }, { title: "Vertical", disabled: false}]

  const [activeTab, setActiveTab] = useState(0)
  const [currentTab, setCurrentTab] = useState(0)

  const [style, api] = useSpring(() => ({ left: 0, width: 0, config: { tension: 200, friction: 14, mass: .125 } }))

  const check = (i) => {
    if (activeTab === i)
      return true
    else return false
  }

  const config = { tension: 180, friction: 20, mass: .5 }

  const detailsTransit = useTransition(check(0), {
    from: { x: currentTab <= activeTab ? '100%' : '-100%' },
    enter: { x: '0' },
    leave: { x: currentTab <= activeTab ? '-100%' : '100%' },
    config: config,
    onStart: () => setCurrentTab(activeTab)
  })
  const eventsTransit = useTransition(check(2), {
    from: { x: currentTab <= activeTab ? '100%' : '-100%' },
    enter: { x: '0' },
    leave: { x: currentTab <= activeTab ? '-100%' : '100%' },
    config: config,
    onStart: () => setCurrentTab(activeTab)
  })
  const logTransit = useTransition(check(3), {
    from: { x: currentTab <= activeTab ? '100%' : '-100%' },
    enter: { x: '0' },
    leave: { x: currentTab <= activeTab ? '-100%' : '100%' },
    config: config,
    onStart: () => setCurrentTab(activeTab)
  })
  const verticalTransit = useTransition(check(4), {
    from: { x: currentTab <= activeTab ? '100%' : '-100%' },
    enter: { x: '0' },
    leave: { x: currentTab <= activeTab ? '-100%' : '100%' },
    config: config,
    onStart: () => setCurrentTab(activeTab)
  })

  useEffect(() => {
    let current = document.querySelector('.tablist').childNodes[activeTab]
    current !== null && api.start({ left: current.offsetLeft, width: current.offsetWidth })
  })

  return (
    <div className='coral tabs'>
      <ul className="tablist">
        {tabsArr.map((tab, i) => (
          <li onClick={() => !tab.disabled && setActiveTab(i)} className={!tab.disabled ? activeTab === i ? 'tab-container active ' : 'tab-container' : 'tab-container disabled'} key={`tab${i}`}>{tab.iconLeft}{tab.title}{tab.iconRight}</li>
        ))}
        <animated.li className="underline" style={style} />
      </ul>
      <div className="tabs tab-content-container">
        {detailsTransit((styles, show) => show && (<animated.div style={styles} className="tab-content"><Details /></animated.div>))}
        {eventsTransit((styles, show) => show && (<animated.div style={styles} className="tab-content"><Events /></animated.div>))}
        {logTransit((styles, show) => show && (<animated.div style={styles} className="tab-content"><Log /></animated.div>))}
        {verticalTransit((styles, show) => show && (<animated.div style={styles} className="tab-content"><Vertical /></animated.div>))}
      </div>
    </div>
  )
}

export default Tabs