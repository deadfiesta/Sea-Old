import React from 'react'
import { useState } from 'react'
import { ContentContainer, SegmentContainer, DemoContainer } from '../Containers'
import { ProgressBar, ProgressBarIndeterminate, ProgressCircle } from './Progress'
import ShowCodeBtn from '../ShowCodeBtn'
import FigmaLink from '../FigmaLink';
import WarningFIcon from '@seaweb/coral/icons/WarningF';
import CrossCircleFIcon from '@seaweb/coral/icons/CrossCircleF';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

const ProgressShowcase = () => {

  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(60)
  const [warning, setWarning] = useState(48)

  const [showConfig, setShowConfig] = useState(false)
  const [showConfigIndeterminate, setShowConfigIndeterminate] = useState(false)
  const [showStyle, setShowStyle] = useState('easing')

  const [useWarning, setUseWarning] = useState(false)
  const [useError, setUseError] = useState(false)

  const codeString = `
  //Checkmark Icon Animation
  const path = 31.11269760131836
  const successAnim = useSpring({
    to: percentage === 100
      ? { strokeDashoffset: 0 }
      : { strokeDashoffset: path },
    config: { duration: 400, easing: easings.easeCircleInOut }
  })

  //Checkmark Icon SVG
  <svg width="64" height="64" viewBox="0 0 64 64" 
    fill='none' 
    stroke='#16C42A' 
    strokeWidth={5} 
    strokeLinecap='round' 
    strokeLinejoin='round'>
    <animated.path
      strokeDasharray={path}
      style={successAnim}
      d="M21.5 33L29 40.5L43.5 26"/>
  </svg>

  //Error Icon Animation
  const crossPath = 15.909902572631836
  const errorAnim = useSpring({
    to: percentage === errorPercent && useError
      ? { strokeDashoffset: 0 }
      : { strokeDashoffset: -crossPath },
    config: { duration: 400, easing: easings.easeExpOut }
  })

  //Error Icon SVG
  <svg width="64" height="64" viewBox="0 0 64 64"
    fill='none'
    stroke='#F5222D'
    strokeWidth={5}
    strokeLinejoin='round'
    strokeLinecap='round'>
    {[
      "M43.5 21L32.25 32.25",
      "M21 43.5L32.25 32.25",
      "M21 21L32.25 32.25",
      "M43.5 43.5L32.25 32.25"
      ]
        .map(path => (
          <animated.path
          key={path}
          strokeDasharray={crossPath}
          style={errorAnim}
          d={path} />
        ))}
  </svg>

  //Warning Icon Animation
  const warningAnim = useSpring({
    to: percentage === warningPercent && useWarning
      ? { transform: 'scale(1)' }
      : { transform: 'scale(0.5)' },
    config: { duration: 400, easing: easings.easeExpOut }
  })
  `;

  const indeterminateCode = `
  //Spring Easing Circle Config
  const len = 232.1023406982422
  const dashAnimEase = useSpring({
    pause: useWarning || useError ? true : false,
    loop: true,
    from: { strokeDasharray: len, strokeDashoffset: len - 58 },
    to: { strokeDashoffset: 58 - len },
    config: { duration: 1400, easing: easings.easeQuadInOut }
  })
  const rotateAnimEase = useSpring({
    pause: useWarning || useError ? true : false,
    loop: true,
    from: { transform: "rotate(-135deg)", x: "-50%", y: "-50%" },
    to: { transform: "rotate(315deg)" },
    config: { duration: 1400, easing: easings.easePolyInOut.exponent(1.1) }
  })

  //Spring Easing Circle SVG
  <animated.svg className='progress-circle circle-indeterminate' width="80" height="80" viewBox="0 0 80 80" fill="none" style={{
    ...rotateAnimEase,
  }}>
    <animated.circle style={{
      ...dashAnimEase,
      ...barColor
    }}
      cx="40" cy="40" r="37" />
  </animated.svg>

  //Spring Easing Bar Config 
  const animEasing = useSpring({
    loop: true,
    from: { x: "30%" },
    to: { x: "130%" },
    config: { duration: 1200, easing: easings.easeExpInOut }
  })

  const animBarStartEasing = useSpring({
    loop: true,
    from: { transformOrigin: "left", transform: "scaleX(1)" },
    to: { transform: "scaleX(2)" },
    config: { duration: 1200, easing: easings.easeCubicIn }
  })

  const animBarEndEasing = useSpring({
    loop: true,
    from: { transformOrigin: "right", transform: "scaleX(2)" },
    to: { transform: "scaleX(1)" },
    config: { duration: 1200, easing: easings.easeCubicOut }
  })
  
  //Spring Easing Bar Structure
  <div className="progressbar progressbar-bg">
    <animated.div className="fullbar" style={{
      ...animEasing,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-between"
    }}>
        <animated.div className="shortbar" style={{
          ...barColor,
          ...animBarStartEasing,
          position: "absolute",
          left: "0%",
          width: "40%",
          height: "100%",
          borderRadius: "4px",
        }} />
        <animated.div className="shortbar" style={{
          ...barColor,
          ...animBarEndEasing,
          position: "absolute",
          width: "40%",
          left: "-100%",
          height: "100%",
          borderRadius: "4px",
        }} />
      </animated.div>
    </div>
  `

  return (
    <ContentContainer>
      <SegmentContainer>
        <h3>Interactive Demo (Determinate)</h3>
        <DemoContainer>
          <div className="gridcenter" style={{ gap: '1rem', padding: '3rem' }}>
            <ProgressBar percentage={progress} />
            <ProgressBar percentage={progress < warning ? progress : warning} useWarning warningPercent={warning} />
            <ProgressBar percentage={progress < error ? progress : error} useError errorPercent={error} />
            <div className="circle-container flex-container" style={{ gap: "1rem", paddingTop: '3rem' }}>
              <ProgressCircle percentage={progress} />
              <ProgressCircle percentage={progress < warning ? progress : warning} useWarning warningPercent={warning} />
              <ProgressCircle percentage={progress < error ? progress : error} useError errorPercent={error} />
            </div>
          </div>
        </DemoContainer>
        <div className="progress controls-container">
          <div className="container">
            <p>Simulate Progress</p>
            <div className="container flex-container middle" style={{ height: 36 }}>
              <input type="range" name="progress" id="" min="0" max="100" value={progress} onChange={(e) => setProgress(parseInt(e.target.value))} />
            </div>

          </div>
          <div className="container">
            <div className="flex-container middle" style={{ gap: ".5rem" }}><CrossCircleFIcon color="#F5222D" /><p>Invalid at Percentage</p></div>
            <input value={error} onChange={e => setError(e.target.value)} type="number" name="char" id="" min="0" max="100" />
          </div>
          <div className="container">
            <div className="flex-container middle" style={{ gap: ".5rem" }}><WarningFIcon color="#F5AC1B" /><p>Warning at Percentage</p></div>
            <input value={warning} onChange={e => setWarning(e.target.value)} type="number" name="char" id="" min="0" max="100" />
          </div>
        </div>
      </SegmentContainer>
      <SegmentContainer>
        <ShowCodeBtn open={showConfig} onclick={() => setShowConfig(!showConfig)}>Spring Config</ShowCodeBtn>
        {showConfig && <div className="codeblock" style={{ maxWidth: "100%" }}>
          <SyntaxHighlighter language={"jsx"} style={materialOceanic}>
            {codeString}
          </SyntaxHighlighter>
        </div>}
      </SegmentContainer>
      <SegmentContainer>
        <h3>Interactive Demo (Indeterminate)</h3>
        <DemoContainer>
          <div className="gridcenter" style={{ gap: '6rem', padding: '3rem' }}>
            <div className="flex-container" style={{ gap: '2rem' }}>
              <ProgressBarIndeterminate useError={useError} useWarning={useWarning} styleNo={"circle"} />
              <ProgressBarIndeterminate useError={useError} useWarning={useWarning} styleNo={"circlethree"} />
              <ProgressBarIndeterminate useError={useError} useWarning={useWarning} styleNo={"circletwo"} />
            </div>
            <div className="flex-container" style={{ flexDirection: "column", gap: "2rem", alignItems: "center" }}>
              <ProgressBarIndeterminate useError={useError} useWarning={useWarning} styleNo={showStyle} />
              <div className="controllers">
                <div className={showStyle === "easing" ? "button coral active" : "button coral"} onClick={() => setShowStyle("easing")}>Spring Easing</div>
                <div className={showStyle === "spring" ? "button coral active" : "button coral"} onClick={() => setShowStyle("spring")}>Spring</div>
                <div className={showStyle === "spring-reverse" ? "button coral active" : "button coral"} onClick={() => setShowStyle("spring-reverse")}>Spring Reverse</div>
              </div>
              <div className="controllers">
                <div className={useWarning ? "button coral active" : "button coral"} onClick={() => useWarning ? setUseWarning(false) : (setUseWarning(true), setUseError(false))}><WarningFIcon size={32} color="#F5AC1B" /></div>
                <div className={useError ? "button coral active" : "button  coral"} onClick={() => useError ? setUseError(false) : (setUseError(true), setUseWarning(false))}><CrossCircleFIcon size={32} color="#F5222D" /></div>
              </div>
            </div>
          </div>
        </DemoContainer>
      </SegmentContainer>
      <SegmentContainer>
        <ShowCodeBtn open={showConfigIndeterminate} onclick={() => setShowConfigIndeterminate(!showConfigIndeterminate)}>Spring Config</ShowCodeBtn>
        {showConfigIndeterminate && <div className="codeblock" style={{ maxWidth: "100%" }}>
          <SyntaxHighlighter language={"jsx"} style={materialOceanic}>
            {indeterminateCode}
          </SyntaxHighlighter>
        </div>}
      </SegmentContainer>
      <FigmaLink url="https://www.figma.com/file/CHJcwbBlyx7pIYmiPkno3R/?node-id=104%3A4017" />
    </ContentContainer>
  )
}

export default ProgressShowcase