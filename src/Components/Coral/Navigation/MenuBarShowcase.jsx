import React from 'react'
import MenuBar from './MenuBar'
import { useState } from 'react'
import { DemoContainer, ContentContainer, SegmentContainer } from '../Containers'

import ShowCodeBtn from '../ShowCodeBtn'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const MenuBarShowcase = () => {
  const [showConfig, setShowConfig] = useState(false)

  const codeString = `const [styles, api] = useSpring(() => ({ left: 0, width: 0, config: { tension: 200, friction: 10, mass: .125 } }))`;

  return (
    <ContentContainer>
      <SegmentContainer>
        <h3>Interactive Demo</h3>
        <DemoContainer>
          <MenuBar />
        </DemoContainer>
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

export default MenuBarShowcase
