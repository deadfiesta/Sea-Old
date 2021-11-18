import React from 'react'
import { useState, useEffect } from 'react'
import Scrium from './Scrium'
import Content from './Content'
import Navigation from './Navigation'
import { nav } from './DataAll'
import { content } from './DataAll'

const PageCoral = ({ open, close }) => {

  const navData = nav[0].coral;
  const [topicIndex, setTopicIndex] = useState(0)

  let contentData = content[0].coral;;

  const change = (e) => {
    setTopicIndex(Number(e.currentTarget.attributes.topic.nodeValue))
  }

  useEffect(()=> {
    document.querySelector('main').classList.add('fade-in')
    setInterval(()=> {
      document.querySelector('main').classList.remove('fade-in')
    }, 250)
  }, [topicIndex])

  return (
    <>
      <Navigation onclick={change} highlight={topicIndex} data={navData} open={open} />
      {
        open
        && <Scrium click={close} />
      }
      <Content topicId={topicIndex} data={contentData} />
    </>
  )
}

export default PageCoral
