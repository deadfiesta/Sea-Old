import React from 'react'
import { useState } from 'react'
import SideMenu from './SideMenu'
import { ContentContainer, DemoContainer, SegmentContainer } from '../Containers'
import ShowCodeBtn from '../ShowCodeBtn'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const SideMenuShowcase = () => {

  const [theme, setTheme] = useState('white')
  const [showConfig, setShowConfig] = useState(false)

  const codeString = `  const arrow = useSpring({ //Config for rotation of Chevron Arrow Icon,
    transform: selected ? 'rotate(180deg)' : 'rotate(0deg)',
    config: { tension: 600, mass: .25, friction: 28 }
  })

  const submenu = useSpring({ //Config for expanding/closing secondary menu
    height: selected && children ? 40 * sub.current.childNodes.length : 0, // sub ref to secondary menu group
    config: { tension: 320, mass: .25, friction: 18 }
  })
  
  const configuration = { tension: 300, friction: 24, mass: .5 } //Config for Menu Group Label to collapse vertically
  const labelAnim = useSpring(!open 
    ? { height: 1, opacity: 0, paddingTop: 0, config: configuration }
    : { height: 40, paddingTop: 20, marginLeft: 0, opacity: 1, config: configuration })
  
  const submenuTransition = useTransition(hoverSub, {
  from: { x: 60, opacity: 0, pointerEvents: "all" },
  enter: { x: 66, opacity: 1, pointerEvents: "all" },
  leave: { x: 70, opacity: 0, pointerEvents: "none", config: { tension: 220 } },
  config: { mass: .25, friction: 12, tension: 180 }
  })`;

  return (
    <ContentContainer>
      <SegmentContainer>
        <h3>Interactive Demo</h3>
        <DemoContainer>
          <SideMenu theme={theme} />
        </DemoContainer>
        <div className="options label-container flex-container" style={{ gap: "1rem" }}>
          {["white", "gray", "dark"].map((color, i) => (
            <div key={`color${i}`}>
              <input onChange={() => setTheme(color)} checked={theme === color ? true : false} type="radio" name="scheme" id={color} />
              <label style={{ textTransform: "capitalize", padding: "0 1rem" }} htmlFor={color}>{color}</label>
            </div>
          ))}
        </div>
      </SegmentContainer>
      <SegmentContainer>
        <ShowCodeBtn open={showConfig} onclick={() => setShowConfig(!showConfig)}>Spring Config</ShowCodeBtn>
        {showConfig && <div className="codeblock">
          <SyntaxHighlighter language={"jsx"} style={materialOceanic}>
            {codeString}
          </SyntaxHighlighter>
        </div>}
      </SegmentContainer>
    </ContentContainer>
  )
}

export default SideMenuShowcase
