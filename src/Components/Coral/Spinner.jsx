import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
// import { coral } from './StyledCoral'
import Highlight, { defaultProps } from "prism-react-renderer";
import { Pre, Line, LineContent, theme } from "./nightOwl"
// import faker from 'faker'
import ShowCodeBtn from './ShowCodeBtn';
// import ReloadBtn from './ReloadBtn';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`
const Container = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`
// const VariantHeader = styled.h3`
// color: ${coral.colors.mark.blue}
// `
const circleSvgCode = `const Spin = ({ width, spin }) => {
  return (
    <div className={spin ? "spinner-container spinning" : "spinner-container"}>
      <svg className="spinner" width={width} viewBox="0 0 24 24">
        <circle className="stroke" cx="12" cy="12" r="10.5" />
      </svg>
    </div>
  )
}`.trim()
const circleCssCode = `.spinner-container {
  --length: 65.54832458496094;
  svg.spinner {
    circle.stroke {
      fill: none;
      transform-origin: center;
      stroke: #9499A4;
      stroke-width: 3px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: var(--length);
      stroke-dashoffset: var(--length)/4;
    }
  }
}`.trim()
const animCssCode = `.spinner-container.spinning {
  --duration: 1.25s;
  --length: 65.54832458496094;
  svg.spinner {
    animation: spin var(--duration) linear infinite;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(270deg);
      }
    }
    circle.stroke {
      animation: trim var(--duration) ease-in-out infinite;
      @keyframes trim {
        0% {
          stroke-dashoffset: var(--length);
        }
        50% {
          stroke-dashoffset: var(--length)/4;
          transform: rotate(135deg);
        }
        100% {
          stroke-dashoffset: var(--length);
          transform: rotate(450deg);
        }
      }
    }
  }
}`.trim()

const exampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

const Code = ({ codeblock = exampleCode, codelanguage = "jsx" }) => (
  <Highlight {...defaultProps} theme={theme} code={codeblock} language={codelanguage}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            {/* <LineNo>{i + 1}</LineNo> */}
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
);

const Spin = ({ width, spin }) => {
  return (
    <div className={spin ? "spinner-container spinning" : "spinner-container"}>
      <svg className="spinner" width={width} viewBox="0 0 24 24">
        <circle className="stroke" cx="12" cy="12" r="10.5" />
      </svg>
    </div>
  )
}

Spin.defaultProps = {
  width: "16px",
  spin: true
}

const Spinner = () => {
  const spinNormal = [16, 20, 24]
  const [openSpinSvg, setOpenSpinSvg] = useState(false)
  const [openSpinCss, setOpenSpinCss] = useState(false)
  return (
    <Wrapper>
      <Container>
        <div className="mockup-container gridcenter" id="defaultspinner">
          <div className="flex-container" style={{ alignItems: "flex-end", gap: "2rem", flexWrap: "wrap" }}>
            {spinNormal.map((spinner, i) => (
              <div key={i} className="spinner-wrap stack middle">
                <Spin width={spinner} spin={false} />
                <figcaption className="label">{spinner}px</figcaption>
              </div>
            ))}

          </div>
        </div>
        <div className="flex-container middle" style={{ gap: "1rem" }}><ShowCodeBtn onclick={() => setOpenSpinSvg(prev => !prev)} open={openSpinSvg} children={"SVG"} /><ShowCodeBtn onclick={() => setOpenSpinCss(prev => !prev)} open={openSpinCss} children={"CSS"} /></div>
        <div className={(openSpinSvg && openSpinCss) ? "codeblock-container grid" : "codeblock-container"}>
          {openSpinSvg && <Code codeblock={circleSvgCode} codelanguage={"jsx"} />}
          {openSpinCss && <Code codeblock={circleCssCode} codelanguage={"css"} />}
        </div>
      </Container>
    </Wrapper>
  )
}

const Spinning = () => {
  const spinNormal = [16, 20, 24]
  const [openSpinCss, setOpenSpinCss] = useState(false)
  return (
    <Wrapper>
      <Container>
        <div className="mockup-container gridcenter" id="defaultspinner">
          <div className="flex-container" style={{ alignItems: "flex-end", gap: "2rem", flexWrap: "wrap" }}>
            {spinNormal.map((spinner, i) => (
              <div key={i} className="spinner-wrap stack middle">
                <Spin width={spinner} spin={true} />
                <figcaption className="label">{spinner}px</figcaption>
              </div>
            ))}
          </div>
        </div>
        <ShowCodeBtn onclick={() => setOpenSpinCss(prev => !prev)} open={openSpinCss} />
        {openSpinCss && <Code codeblock={animCssCode} codelanguage={"css"} />}
      </Container>
    </Wrapper>
  )
}

const SpinWithComponent = () => {
  const spinNormal = [16, 20, 24]
  const [openSpinCss, setOpenSpinCss] = useState(false)
  return (
    <Wrapper>
      <Container>
        <div className="mockup-container gridcenter" id="defaultspinner">
          <div className="flex-container" style={{ alignItems: "flex-end", gap: "2rem", flexWrap: "wrap" }}>
            {spinNormal.map((spinner, i) => (
              <div key={i} className="spinner-wrap stack middle">
                <Spin width={spinner} spin={true} />
                <figcaption className="label">{spinner}px</figcaption>
              </div>
            ))}
          </div>
        </div>
        <ShowCodeBtn onclick={() => setOpenSpinCss(prev => !prev)} open={openSpinCss} />
        {openSpinCss && <Code codeblock={animCssCode} codelanguage={"css"} />}
      </Container>
    </Wrapper>
  )
}

export { Spinner, Spinning, SpinWithComponent }
