import React from 'react'
import { useState } from 'react'
import Select, { SelectOption } from './Select'
import { ContentContainer, SegmentContainer, DemoContainer } from '../Containers'
import PaperPlaneIcon from '@seaweb/coral/icons/PaperPlane'
import FontSquareFIcon from '@seaweb/coral/icons/FontSquareF'
import VipIcon from '@seaweb/coral/icons/Vip'
import { coral } from '../StyledCoral'
import ShowCodeBtn from '../ShowCodeBtn'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const SelectShowcase = () => {
  const [value, setValue] = useState('');
  const [showArrow, setShowArrow] = useState(false)

  const codeString = `const arrow = useSpring( //Config for dropdown arrow
    {
      transform: clicked ? 'rotate(180deg)' : 'rotate(0deg)',
      config: { tension: 600, mass: .25, friction: 28 }
    }
)
const transitions = useTransition(clicked, { //Config for dropdown menu
    from: { opacity: 0, y: -8 },
    enter: { opacity: 1, y: 0, pointerEvents: 'all', zIndex: 100 },
    leave: { opacity: 0, y: -8, pointerEvents: 'none' },
    config: { tension: 800, friction: 40 }
})`;

  return (
    <ContentContainer>
      <p>Select allows users to make a single selection from a list of options.</p>
      <SegmentContainer>
        <h3>Interactive Demo</h3>
        <DemoContainer>
          <div className="gridcenter" style={{ padding: "4rem 0" }}>
            <Select value={value} onChange={setValue}>
              <SelectOption value={0}><PaperPlaneIcon color={coral.colors.function.blue} />Hello 1</SelectOption>
              <SelectOption value={1}><FontSquareFIcon color={coral.colors.function.green} />Option 2</SelectOption>
              <SelectOption value={2}><VipIcon />Option 3</SelectOption>
            </Select>
          </div>
        </DemoContainer>
        <SegmentContainer>
          <ShowCodeBtn onclick={() => setShowArrow(!showArrow)} open={showArrow}>Spring Config</ShowCodeBtn>
          {showArrow && <div className="codeblock">
            <SyntaxHighlighter language={"jsx"} style={materialOceanic}>
              {codeString}
            </SyntaxHighlighter>
          </div>}
        </SegmentContainer>
      </SegmentContainer>

    </ContentContainer>
  )
}

export default SelectShowcase
