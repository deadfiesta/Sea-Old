import React from 'react'
import styled from 'styled-components'
import { useRef, useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'

import Bg from '../images/tom.jpg'
import LegoLogo from '../images/legologo.svg'

const Main = styled.div`
z-index: 1;
display: flex;
flex-direction: column;
align-items: center;
gap: 80px;`

const Container = styled.div`
color: white;
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
max-width: 720px`

const options = {
  rootMargin: '400px',
  threshold: .5,
}

const CoverPage = () => {

  const head = useRef()

  const [active, setActive] = useState(false)

  const fade = useSpring({ opacity: active ? 1 : 0 })
  const down = useSpring({ y: active ? 0 : -200 })
  const up = useSpring({ y: active ? 0 : 200 })

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        setActive(entry.isIntersecting)
      })
    }, options)
    observer.observe(head.current)
  })

  return (
    <header ref={head} id='cover' className='cover' style={{ height: '100vh' }}>
      <Main>
        <animated.img src={LegoLogo} alt="Lego Logo" width={256} style={{ ...fade, ...down }} />
        <Container>
          <animated.h1 style={{ ...fade, ...up, textAlign: "center" }}>The LEGO&reg; Group</animated.h1>
          <animated.p style={{ ...fade, ...up, fontWeight: 400 }}>Sharing by Wen Kiong | Feb 11, 2022</animated.p>
        </Container>
      </Main>
      <animated.div className="background" style={{ ...fade, backgroundImage: `url(${Bg})` }} />
    </header>
  )
}

export default CoverPage
export { options }