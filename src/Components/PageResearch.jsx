import React from 'react'
import { useState } from 'react'
import Scrium from './Scrium'
import Content from './Content'
import Navigation from './Navigation'
import { content } from './DataAll'

const PageResearch = ({ open, close }) => {

  const [topicIndex, setTopicIndex] = useState(0)

  let contentData = content[0].research

  const change = (e) => {
    // const height = 48
    // let subcontain = e.currentTarget.childNodes[1]
    // let len = subcontain.childNodes.length * height
    // subcontain.style.height = `${len}px`;
    // console.log(len)

    setTopicIndex(Number(e.currentTarget.attributes.topic.nodeValue))
  }


  return (
    <>
      <Navigation onclick={change} highlight={topicIndex} data={contentData} open={open} />
      {
        open
        && <Scrium click={close} />
      }
      <Content topicId={topicIndex} data={contentData} />
      
    </>
  )
}

export default PageResearch
