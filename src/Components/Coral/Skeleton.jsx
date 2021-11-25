import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import { coral } from './StyledCoral'
import Highlight, { defaultProps } from "prism-react-renderer";
import { Pre, Line, LineContent, theme } from "./nightOwl"
import faker from 'faker'
import ShowCodeBtn from './ShowCodeBtn';
import ImagePlaceholder from './ImagePlaceholder'
import ReloadBtn from './ReloadBtn';

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
`
const GradientLabel = styled.div`
display: flex;
align-items: center;
`
const GradientAnim = styled.div`
display: block;
height: 32px;
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

const StaticCode = `.skeleton {
  background-color: #F2F3F4;
}`

const GradientCode = `.skeleton.gradient {
background: linear-gradient(
  to right, 
  #E0E2E5 30%, 
  rgba(242, 243, 244, 0) 50%, 
  #E0E2E5 70%, #F2F3F4
}`

const PulsingCode = `.skeleton.pulsing {
  animation: pulsing 1000ms linear infinite;
  @keyframes pulsing {
    0% {
      background-color: #F2F3F4;
    }
    50% {
      background-color: #E0E2E5;
    }
    100% {
      background-color: #F2F3F4;
    }
  }
}`

const WaveCode = `
.skeleton.gradient.waving {
  background-size: 200% 100%;
  animation: wave 1000ms linear infinite;
  @keyframes wave {
    from {
      background-position: 0%
    }
    to {
      background-position: -200%
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

const Animation = () => {
  const [openStatic, setOpenStatic] = useState(false)
  const [openGradient, setOpenGradient] = useState(false)
  const [openAnim, setOpenAnim] = useState(false)
  const [openPulse, setOpenPulse] = useState(false)
  return (
    <div className="mockup-wrapper">
      <Container>
        <p>When the animation is not practical to implement for optimising render performance, the fallback support is the default styling with a static colour.</p>
      </Container>
      <Container>
        <VariantHeader>
          Static Placeholder
        </VariantHeader>
        <DefaultBar />
        <ShowCodeBtn onclick={() => setOpenStatic(prev => !prev)} open={openStatic} />
        {openStatic && <Code codeblock={StaticCode} codelanguage="css" />}
      </Container>
      <Container>
        <VariantHeader>
          Gradient for Wave Animation
        </VariantHeader>
        <div>
          <GradientBar className="skeleton gradient" />
          <GradientLabel style={{ paddingBottom: "1rem" }}>
            <Bar style={{ flex: ".3" }} />
            <Label>
              <Circle />
              <Square>
                <Transparent />
                <BgSecondary />
              </Square>
            </Label>
            <Bar style={{ flex: ".2" }} />
            <Label>
              <Circle />
              <Square>
                <BgPrimary />
              </Square>
            </Label>
            <Bar style={{ flex: ".2" }} />
            <Label>
              <Circle />
              <Square>
                <Transparent />
                <BgSecondary />
              </Square>
            </Label>
            <Bar style={{ flex: ".3" }} />
          </GradientLabel>
          <GradientLabel>
            <Bar style={{ flex: ".3", opacity: "0" }} />
            <Text>#F2F3F4, 0%</Text>
            <Bar style={{ flex: ".2", opacity: "0" }} />
            <Text>#E0E2E5, 100%</Text>
            <Bar style={{ flex: ".2", opacity: "0" }} />
            <Text>#F2F3F4, 0%</Text>
            <Bar style={{ flex: ".3", opacity: "0" }} />
          </GradientLabel>
        </div>
        <ShowCodeBtn onclick={() => setOpenGradient(prev => !prev)} open={openGradient} />
        {openGradient && <Code codeblock={GradientCode} codelanguage="css" />}
      </Container>
      <Container>
        <VariantHeader>
          Wave Animation
        </VariantHeader>
        <GradientAnim className="skeleton gradient waving" />
        <ShowCodeBtn onclick={() => setOpenAnim(prev => !prev)} open={openAnim} />
        {openAnim && <Code codeblock={WaveCode} codelanguage="css" />}
      </Container>
      <Container>
        <VariantHeader>
          Pulsing Animation
        </VariantHeader>
        <DefaultBar className="skeleton pulsing" />
        <ShowCodeBtn onclick={() => setOpenPulse(prev => !prev)} open={openPulse} />
        {openPulse && <Code codeblock={PulsingCode} codelanguage="css" />}
      </Container>
    </div >
  )
}

const Image = () => {
  const components = [32, 48, 72]
  return (
    <Wrapper>
      <Container>
        <VariantHeader>
          Image Placeholder with Icon - Static
        </VariantHeader>
        <div className="gridcenter mockup-container">
          <div className="flex-container" style={{ alignItems: "flex-end", gap: "2rem", flexWrap: "wrap" }}>
            {components.map((component, i) => (
              <div key={i} className="skeleton-wrap">
                <div className="skeleton" style={{ height: `${component}px` }}>
                  <ImagePlaceholder size={component} />
                </div>
                <figcaption className="label">{component}px</figcaption>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Avatar = () => {
  const components = ['24px', '32px', '48px', '72px']
  return (
    <Wrapper>
      <Container>
        <VariantHeader>
          Avatar Placeholder - Pulse
        </VariantHeader>
        <div className="gridcenter mockup-container">
          <div className="flex-container" style={{ alignItems: "flex-end", gap: "2rem", flexWrap: "wrap" }}>
            {components.map((component, i) => (
              <div key={i} className="skeleton-wrap">
                <span className="skeleton pulsing" style={{ width: component, height: component, borderRadius: "50%" }}></span>
                <figcaption className="label">{component}</figcaption>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Rectangle = () => {
  const components = [
    {
      size: "Small",
      dimension: "16px",
    },
    {
      size: "Medium",
      dimension: "24px",
    },
    {
      size: "Large",
      dimension: "36px",
    },
    {
      size: "XLarge",
      dimension: "48px",
    },
  ]
  return (
    <Wrapper>
      <Container>
        <VariantHeader>
          Content Placeholder - Wave
        </VariantHeader>
        <div className="gridcenter mockup-container">
          <div className="flex-container" style={{ alignItems: "flex-end", gap: "2rem", flexWrap: "wrap" }}>
            {components.map((component, i) => (
              <div key={i} className="skeleton-wrap">
                <div className="skeleton gradient waving" style={{ width: "100px", height: component.dimension }}></div>
                <figcaption className="label">{component.size} {component.dimension}</figcaption>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

const Sample = () => {
  const data = (type) => {
    switch (type) {
      case "table":
        const arr = []
        for (let i = 0; i < 11; i++) {
          const person = { name: faker.name.findName(), address: faker.address.streetAddress(), account: faker.finance.account(), email: faker.internet.email(), company: faker.company.companyName() }
          arr.push(person)
        }
        return arr
      case "cards":
        const cards = []
        for (let i = 0; i <= 8; i++) {
          const card = { image: faker.image.unsplash.objects(96, 96, Math.floor(Math.random() * 100)), product: faker.commerce.productName(), price: faker.commerce.price(), color: faker.commerce.color(), material: faker.commerce.productMaterial(), description: faker.commerce.productDescription() }
          cards.push(card)
        }
        return cards
      default:
        return
    }
  }
  const table = {
    header: ["Name", "Address", "Account Number", "E-mail Address", "Company"],
    data: data("table")
  }
  const [reloadingTable, startReloadingTable] = useState(false);
  const reload = (e) => {
    let btn = e.currentTarget
    if (!reloadingTable) {
      startReloadingTable(true)
      btn.disabled = true
      let cells = document.querySelectorAll('.skeleton-table td span')
      cells.forEach(cell => {
        cell.classList.add('skeleton', 'gradient', 'waving', 'remove')
      })
      setTimeout(() => {
        cells.forEach(cell => {
          cell.classList.remove('skeleton', 'gradient', 'waving', 'remove')
        })
        startReloadingTable(false)
        btn.disabled = false
      }, 1250)
    }
  }
  return (
    <Wrapper>
      <Container>
        <div className="flex-container between middle">
          <VariantHeader>
            Table
          </VariantHeader>
          <ReloadBtn reload={reloadingTable} onclick={reload} />
        </div>
        <div className="mockup-container" style={{ padding: "0" }}>
          <table>
            <thead>
              <tr>
                {table.header.map((head, i) => (
                  <th className={head.toLowerCase().replace(/\s/g, '')} key={i}>{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="skeleton-table">
              {table.data.map((person, i) => (
                <tr className="skeleton-row" key={i} id={person.name.toLowerCase().replace(/\s/g, '')}>
                  <td><span>{person.name}</span></td>
                  <td><span>{person.address}</span></td>
                  <td><span>{person.account}</span></td>
                  <td><span>{person.email.toLowerCase()}</span></td>
                  <td><span>{person.company}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
      <Container>
        <div className="flex-container between middle">
          <VariantHeader>
            Cards
          </VariantHeader>
          <ReloadBtn reload={reloadingTable} onclick={reload} />
        </div>
        <div className="mockup-container">
          <ul className="cards-container">
            {data("cards").map((card, i) => (
              <li key={i} className="card-container">
                <div className="img-container gridcenter">
                  <div className="img" style={{ backgroundImage: `url(${card.image})` }} />
                </div>
                <div className="info-container">
                  <div className="product-container">
                    <div className="name"><h3>{card.product}</h3></div>
                    <div className="price">SGD {card.price}</div>
                  </div>
                  <div className="description-container">
                    {card.description}
                  </div>
                  <div className="footer-container">
                    <div className="color-container flex-container middle between">
                      <span className="product-label">Color</span>
                      <span className="color">{card.color.charAt(0).toUpperCase()}{card.color.slice(1)}</span>
                    </div>
                    <div className="material-container flex-container middle between">
                      <span className="product-label">Material</span>
                      <span className="product">{card.material}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Wrapper>
  )
}

export { Animation, Image, Avatar, Rectangle, Sample }
