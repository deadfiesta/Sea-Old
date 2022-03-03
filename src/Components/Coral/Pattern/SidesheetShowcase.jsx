import React from 'react'
import { useState } from 'react';
import Sidesheet from './Sidesheet'
import FigmaLink from '../FigmaLink';
import Button from '@seaweb/coral/components/Button';
import { animated, useSpring } from 'react-spring'
import { ContentContainer, SegmentContainer, DemoContainer } from '../Containers'
import ShowCodeBtn from '../ShowCodeBtn'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const SidesheetShowcase = () => {
  const [open, setOpen] = useState(false)
  const createGap = useSpring(open ? { gap: 32, config: { mass: .5, friction: 24, tension: 200 } } : { gap: 0, config: { mass: .25, friction: 18, tension: 300 } })

  const [showConfig, setShowConfig] = useState(true)

  const codeString = `const transitions = useTransition(open, {
  from: { width: 0 },
  enter: {width: 320, config: { mass: .5, friction: 24, tension: 200 }},
  leave: { width: 0, config: { mass: .25, friction: 18, tension: 260 }},
})`;
  return (
    <animated.div style={createGap} className="sidesheet-showcase">
      <ContentContainer>
        <p className='line-clamp three'>
          A Side sheet is a panel that embed in a page and slides in from the side. It can contain a set of action or information that is contexual to the primary page content. Changing content on the sidesheet can have an instant impact on the primary content, and vice versa. It presents supplimentary information at the same content hierachy without calling out a modal or asking users to leave the current page.
        </p>
        <SegmentContainer>
          <h3>Interactive Demo</h3>
          <DemoContainer>
            <Button onRelease={() => setOpen(!open)}>{open ? "Close Sidesheet" : "Open Sidesheet"}</Button>
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
        <FigmaLink url="https://www.figma.com/file/mgH4V8920fRqE2idFMrGlI/?node-id=824%3A23759" />
      </ContentContainer>
      <Sidesheet toggle={()=>setOpen(!open)} open={open} />
    </animated.div>
  )
}

export default SidesheetShowcase