import React from 'react'
import { useLocation } from 'react-router'
import Scrium from './Scrium'
import Content from './Content'
import Navigation from './Navigation'
import { nav } from './DataAll'
import { content } from './DataAll'

const ContentLayout = ({ open, close }) => {


  let navData, contentData;

  const location = useLocation().pathname;

  switch (location) {
    case '/':
      navData = nav[0].research;
      contentData = content[0].research;
      break;
    default:
      navData = nav[0].coral
      contentData = content[0].coral
      break;
  }

  return (
    <>
      <Navigation data={navData} open={open} />
      {open && <Scrium click={close} />}
      <Content data={contentData} />
    </>
  )
}

export default ContentLayout
