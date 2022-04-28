import React from 'react'
import { useState } from 'react'
import Tabs from './Tabs'
import { ContentContainer, SegmentContainer } from '../Containers'
import ShowCodeBtn from '../ShowCodeBtn'
import FigmaLink from '../FigmaLink';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const TabsShowcase = () => {
  const [showConfig, setShowConfig] = useState(false)

  const codeString = `const [style, api] = useSpring(() => ({ left: 0, width: 0, config: { tension: 200, friction: 14, mass: .125 } })) // Config for tabs underline

const detailsTransit = useTransition(check(0), { //Config for panel transition
  from: { x: currentTab <= activeTab ? '100%' : '-100%' },
  enter: { x: '0' },
  leave: { x: currentTab <= activeTab ? '-100%' : '100%' },
  config: { tension: 180, friction: 20, mass: .5 },
  onStart: () => setCurrentTab(activeTab)
})`;
  return (
    <ContentContainer>
      <SegmentContainer>
        <h3>Interactive Demo (Compact UI)</h3>
        <Tabs />
      </SegmentContainer>
      <SegmentContainer>
        <ShowCodeBtn open={showConfig} onclick={() => setShowConfig(!showConfig)}>Spring Config</ShowCodeBtn>
        {showConfig && <div className="codeblock">
          <SyntaxHighlighter language={"jsx"} style={materialOceanic}>
            {codeString}
          </SyntaxHighlighter>
        </div>}
      </SegmentContainer>
      <FigmaLink url="https://www.figma.com/file/zKRYjKw1D3CeBzooqXJj4O/Navigation?node-id=205%3A2283" />
    </ContentContainer >
  )
}

export default TabsShowcase