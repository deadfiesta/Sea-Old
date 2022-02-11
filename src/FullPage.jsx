import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import CoverPage from './slides/CoverPage'
import Overview, { agenda } from './slides/Overview'
import AboutLego from './slides/AboutLego'
import InventionLego from './slides/InventionLego'
import Logo from './slides/Logo'
import Manufacturing from './slides/Manufacturing'
import LegoSuccess from './slides/LegoSuccess'
import LegoRiseFall from './slides/LegoRiseFall'
import LegoStarWars from './slides/LegoStarWars'
import LegoSustainability from './slides/LegoSustainability'
import LegoTopTenThemes from './slides/LegoTopTenThemes'
import PersonalThoughts from './slides/PersonalThoughts'

const FullPage = () => {

  return (
    <ReactFullpage
      //fullpage options
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={500}
      anchors={agenda.map(topic => `${topic.anchor}Page`)}
      navigation={true}
      verticalCentered={false}
      onLeave={(origin, destination, direction) => {
        console.log(destination.anchor)
      }}

      render={({ state, fullpageApi }) => {

        const move = (e) => {
          fullpageApi.moveTo(`${e.currentTarget.id}Page`)
        }
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <CoverPage />
            </div>
            <div className="section">
              <Overview navigate={move} />
            </div>
            <div className="section">
              <AboutLego />
            </div>
            <div className="section">
              <InventionLego />
            </div>
            <div className="section">
              <Logo />
            </div>
            <div className="section">
              <Manufacturing />
            </div>
            <div className="section">
              <LegoSuccess />
            </div>
            <div className="section">
              <LegoRiseFall />
            </div>
            <div className="section">
              <LegoStarWars />
            </div>
            <div className="section">
              <LegoTopTenThemes />
            </div>
            <div className="section">
              <LegoSustainability />
            </div>
            <div className="section">
              <PersonalThoughts />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default FullPage