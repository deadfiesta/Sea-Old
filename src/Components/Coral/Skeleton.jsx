import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import { coral } from './StyledCoral'
import Highlight, { defaultProps } from "prism-react-renderer";
import { Pre, Line, LineNo, LineContent, theme } from "./nightOwl"
import ImagePlaceholder from './ImagePlaceholder'

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
const VariantHeader = styled.h3`
color: ${coral.colors.mark.blue}
`
const DefaultBar = styled.span`
display: block;
height: 32px;
background-color: ${coral.colors.bg.secondary}
`
const GradientBar = styled.span`
display: block;
height: 32px;
background: linear-gradient(
  to right,
  rgba(242, 243, 244, 0) 30%,
  #E0E2E5 50%,
  rgba(242, 243, 244, 0) 70%
), ${coral.colors.bg.secondary};
background-size: 200% 100%;
`
const GradientLabel = styled.div`
display: flex;
align-items: center;
`
const GradientAnim = styled.div`
display: block;
height: 32px;
background: linear-gradient(
  to right,
  rgba(242, 243, 244, 0) 30%,
  #E0E2E5 50%,
  rgba(242, 243, 244, 0) 70%
), ${coral.colors.bg.secondary};
background-size: 200% 100%;
animation: wave 1s linear infinite;
@keyframes wave {
  from {
    background-position: 50%
  }
  to {
    background-position: -150%;
  }
}
`
const Circle = styled.span`
display: inline-block;
height: .75rem;
width: .75rem;
border-radius: 50%;
border: 1px solid ${coral.colors.bg.quaternary}
`
const Bar = styled.span`
display: inline-block;
flex: 1;
height: 4px;
border-top: 1px solid ${coral.colors.gray.quaternary};
border-bottom: 1px solid ${coral.colors.gray.quaternary}
`;

const Label = styled.div`
position: relative;
`
const Square = styled.div`
position: absolute;
bottom: calc(calc(.5rem / -2) - 3px);
left: 50%;
width: 1rem;
height: 1rem;
transform: translateX(-50%);
border: 1px solid ${coral.colors.bg.quaternary};
padding: 1px;
display: flex;
flex-direction: column;
align-items: stretch;
`
const Transparent = styled.div`
width: 100%;
height: 50%;
flex: 1;`
const BgSecondary = styled.div`
width: 100%;
height: 50%;
flex: 1;
background-color: ${coral.colors.bg.secondary}
`
const BgPrimary = styled.div`
background-color: #E0E2E5;
height: 100%;
width: 100%;
`
const Text = styled.p`
font-size: 14px;`

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

const AnimationCode = `
.gradient-anim {
  display: block;
  height: 32px;
  background: linear-gradient(
    to right,
    rgba(242, 243, 244, 0) 30%,
    #E0E2E5 50%,
    rgba(242, 243, 244, 0) 70%
  ), #F2F3F4;
  background-size: 200% 100%;
  animation: wave 1s linear infinite;
  @keyframes wave {
    from {
      background-position: 50%
    }
    to {
      background-position: -150%;
    }
  } 
}
`.trim();

const Code = ({ codeblock = exampleCode, codelanguage = "jsx" }) => (
  <Highlight {...defaultProps} theme={theme} code={codeblock} language={codelanguage}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
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

const Animation = () => {
  const [openAnim, setOpenAnim] = useState(false);
  return (
    <Wrapper>
      <Container>
        <p>When the animation is not practical to implement for optimising render performance, the fallback support is the default styling with a static colour.</p>
      </Container>
      <Container>
        <VariantHeader>
          Default
        </VariantHeader>
        <DefaultBar />
      </Container>
      <Container>
        <VariantHeader>
          Gradient
        </VariantHeader>
        <div>
          <GradientBar />
          <GradientLabel style={{ paddingBottom: "1rem" }}>
            <Label>
              <Circle />
              <Square>
                <Transparent />
                <BgSecondary />
              </Square>
            </Label>
            <Bar />
            <Label>
              <Circle />
              <Square>
                <BgPrimary />
              </Square>
            </Label>
          </GradientLabel>
          <GradientLabel>
            <Text>#F2F3F4, 0%</Text>
            <Bar style={{ opacity: 0 }} />
            <Text>#E0E2E5, 100%</Text>
          </GradientLabel>
        </div>
      </Container>
      <Container>
        <VariantHeader>
          Animation
        </VariantHeader>
        <GradientAnim />
      </Container>
      <Container>
        <button onClick={() => setOpenAnim(prev => !prev)} className="view-code">{openAnim ? "Hide" : "View"} Code</button>
        {openAnim && <Code codeblock={AnimationCode} codelanguage="css" />}
      </Container>
    </Wrapper >
  )
}

const Image = () => {
  return (
    <div className="gridcenter" style={{
      padding: "3rem"
    }}>
      <div className="flex-container" style={{alignItems: "flex-end"}}>
        <div className="animated-gradient" style={{height: "32px"}}>
          <ImagePlaceholder size="32" />
        </div>
        <div className="animated-gradient" style={{height: "48px"}}>
          <ImagePlaceholder size="48" />
        </div>
        <div className="animated-gradient" style={{height: "72px"}}>
          <ImagePlaceholder />
        </div>
      </div>
    </div>
  )
}

export { Animation, Image }
