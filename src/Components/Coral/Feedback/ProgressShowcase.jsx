import React from 'react'
import { useState } from 'react'
import { ContentContainer, SegmentContainer, DemoContainer } from '../Containers'
import { ProgressBar, ProgressCircle } from './Progress'
import ShowCodeBtn from '../ShowCodeBtn'
import FigmaLink from '../FigmaLink';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const ProgressShowcase = () => {

  const [progress, setProgress] = useState(0)
  const error = 60
  const warning = 48

  const [showConfig, setShowConfig] = useState(false)

  const codeString = `const progress = useSpring({ config: percentage !== 100 ? { mass: .5, tension: 240 } : { duration: 0 } })
const barColor = useSpring({ stroke: percentage === warningPercent && useWarning ? '#F5AC1B' : percentage === errorPercent && useError ? '#F5222D' : percentage === 100 ? '#16C42A' : '#1B92F5', config: { mass: .25, tension: 300 } })
const successAnim = useSpring({ to: percentage === 100 ? { scale: 1, opacity: 1 } : { scale: .75, opacity: 0 }, config: { mass: .75, tension: 300, friction: 12 } })
const errorAnim = useSpring({ to: percentage === errorPercent && useError ? { transform: 'scale(1) rotate(0deg)' } : {transform: 'scale(0.75) rotate(2deg)' }, config: { mass: .45, tension: 900, friction: 10 }  })
const warningAnim = useSpring({ to: percentage === warningPercent && useWarning ? { transform: 'scale(1) rotate(0deg)' } : {transform: 'scale(0.75) rotate(2deg)' }, config: { mass: .45, tension: 900, friction: 10 }  })`;
  return (
    <ContentContainer>
      <SegmentContainer>
        <h3>Interactive Demo</h3>
        <DemoContainer>
          <div className="gridcenter" style={{ gap: '1rem', padding: '3rem' }}>
            <ProgressBar percentage={progress} />
            <ProgressBar percentage={progress < warning ? progress : warning} useWarning />
            <ProgressBar percentage={progress < error ? progress : error} useError />
            <div className="circle-container flex-container" style={{gap: "1rem", paddingTop: '3rem'}}>
              <ProgressCircle percentage={progress} />
              <ProgressCircle percentage={progress < error ? progress : error} useError />
            </div>
          </div>
        </DemoContainer>
        <div className="controls-container">
          <p>Scrub range input to simulate progress tracking</p>
          <input type="range" name="progress" id="" min="0" max="100" value={progress} onChange={(e) => setProgress(parseInt(e.target.value))} />
        </div>
      </SegmentContainer>
      <SegmentContainer>
        <ShowCodeBtn open={showConfig} onclick={() => setShowConfig(!showConfig)}>Spring Config</ShowCodeBtn>
        {showConfig && <div className="codeblock" style={{maxWidth: "100%"}}>
          <SyntaxHighlighter language={"jsx"} style={materialOceanic}>
            {codeString}
          </SyntaxHighlighter>
        </div>}
      </SegmentContainer>
      <FigmaLink url="https://www.figma.com/file/CHJcwbBlyx7pIYmiPkno3R/?node-id=104%3A4017" />
    </ContentContainer>
  )
}

export default ProgressShowcase