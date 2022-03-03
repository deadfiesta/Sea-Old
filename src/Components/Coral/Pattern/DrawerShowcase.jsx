import React from 'react'
import { useState } from 'react'
import Drawer from './Drawer'
import FigmaLink from '../FigmaLink';
import Button from '@seaweb/coral/components/Button';
import { ContentContainer, SegmentContainer, DemoContainer } from '../Containers'

import ShowCodeBtn from '../ShowCodeBtn'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const DrawerShowcase = () => {

  const [open, setOpen] = useState(false);
  const [currentSize, setCurrentSize] = useState('small')

  const [showConfig, setShowConfig] = useState(false)

  const codeString = `const transitions = useTransition(open, {
  from: { x: '100%' },
  enter: {
    x: '0', 
    config: size === 'small' || size === 'medium'
      ? { mass: .25, friction: 18, tension: 200 } 
      : { mass: .5, friction: 24, tension: 240 }
  },
  leave: {
    x: '100%', 
    config: size === 'small' || size === 'medium'
      ? { mass: .25, friction: 20, tension: 300 } 
      : { mass: .5, friction: 26, tension: 280 }
  }
})

const scrim = useTransition(open, {
  from: { opacity: 0, pointerEvents: 'none' },
  enter: { opacity: .5, pointerEvents: 'all' },
  leave: { opacity: 0, pointerEvents: 'none' },
  config: { mass: .1, tension: 320 }
})`;

  const PrimaryBtn = () => (
    <Button>Add</Button>
  )
  const SecondaryBtn = () => (
    <Button onRelease={() => setOpen(!open)} variant='outlined'>Cancel</Button>
  )

  console.log(currentSize)
  return (
    <ContentContainer>
      <p>A Drawer is a panel that overlays on top of a page and slides in from the right. It contains a set of information or actions. Drawer can present actions or information without clustering the current page content or asking users to leave the page.</p>
      <SegmentContainer>
        <h3>Interactive Demo</h3>
        <DemoContainer>
          <Drawer size={currentSize} primaryBtn={<PrimaryBtn />} secondaryBtn={<SecondaryBtn />} toggle={() => setOpen(!open)} open={open} />
          <Button onRelease={() => setOpen(!open)}>{open ? "Close Drawer" : "Open Drawer"}</Button>
        </DemoContainer>
        <p>Size</p>
        <div className="drawer size-change label-container">
          {[{ id: "small", name: "Small", width: 480 }, { id: "medium", name: "Medium", width: 560 }, { id: "large", name: "Large", width: 648 }, { id: "xlarge", name: "Extra Large", width: 840 }].map((size, i) => (
            <span key={`option${i}`}>
              <input checked={currentSize === size.id ? true : false} onChange={() => setCurrentSize(size.id)} type="radio" name="size" id={size.id} />
              <label htmlFor={size.id}>{size.name}</label>
            </span>
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
      <FigmaLink url="https://www.figma.com/file/mgH4V8920fRqE2idFMrGlI/Pattern?node-id=619%3A22083" />
    </ContentContainer>
  )
}

export default DrawerShowcase