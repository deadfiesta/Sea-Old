import ReactFullpage from '@fullpage/react-fullpage'
import { useState, useEffect } from 'react';
import Homepage from './Components/Homepage';
import ResponsiveDesignToday from './Components/ResponsiveDesignToday';
import PerceptionChanged from './Components/PerceptionChanged';
import GoodNews from './Components/GoodNews';
import Timeline from './Components/Timeline';
import NewEra from './Components/NewEra';
import ResponsiveUser from './Components/ResponsiveUser';
import ReduceMotion from './Components/ReduceMotion';
import ColorScheme from './Components/ColorScheme';
import PrefersContrast  from './Components/PrefersContrast';
import ResponsiveContainer from './Components/ResponsiveContainer';
import ContainerQuery from './Components/ContainerQuery';
import ResponsiveFormFactor from './Components/ResponsiveFormFactor';
import NewResponsive from './Components/NewResponsive';

const Fullpage = () => {
  const [page, setPage] = useState(0)
  const [darkMode, setDarkMode] = useState(false);

  const fadeConfig = { friction: 30 }

  useEffect(() => {
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches ? setDarkMode(true) : setDarkMode(false)

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      e.matches ? setDarkMode(true) : setDarkMode(false)
    })
  }, [darkMode, setDarkMode])
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={'YOUR_KEY_HERE'}
      navigation={true}
      anchors={['home', 'responsiveToday', 'newPerception', 'newTechnology', 'cssEvolution', 'newEra', 'responsiveToUser', 'reducedMotion', 'colorScheme', 'prefersContrast', 'responsiveToContainer', 'containerQuery', 'responsiveFormFactor', 'newResponsive']}
      navigationTooltips={['Home', 'Responsive Today', 'The New Perception', 'New Responsive Technology', 'CSS Evolution', 'Responsive to User', 'Reduced Motion', 'Prefers Color Scheme', 'Prefers Contrast', 'Responsive to Container', 'Container Query', 'Responsive to Form Factor', 'The New Responsive']} 
      showActiveTooltip={true}

      scrollingSpeed={550} /* Options here */
      onLeave={(origin, destination, direction) => setPage(destination.index)}

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Homepage darkMode={darkMode} currentIndex={page} i={0} fadeConfig={fadeConfig} />
            <ResponsiveDesignToday darkMode={darkMode} currentIndex={page} i={1} fadeConfig={fadeConfig} />
            <PerceptionChanged darkMode={darkMode} currentIndex={page} i={2} fadeConfig={fadeConfig} />
            <GoodNews darkMode={darkMode} currentIndex={page} i={3} fadeConfig={fadeConfig} />
            <Timeline darkMode={darkMode} currentIndex={page} i={4} fadeConfig={fadeConfig} />
            <NewEra darkMode={darkMode} currentIndex={page} i={5} fadeConfig={fadeConfig} />
            <ResponsiveUser darkMode={darkMode} currentIndex={page} i={6} fadeConfig={fadeConfig} />
            <ReduceMotion darkMode={darkMode} currentIndex={page} i={7} fadeConfig={fadeConfig} />
            <ColorScheme darkMode={darkMode} currentIndex={page} i={8} fadeConfig={fadeConfig} />
            <PrefersContrast darkMode={darkMode} currentIndex={page} i={9} fadeConfig={fadeConfig} />
            <ResponsiveContainer darkMode={darkMode} currentIndex={page} i={10} fadeConfig={fadeConfig} />
            <ContainerQuery darkMode={darkMode} currentIndex={page} i={11} fadeConfig={fadeConfig} />
            <ResponsiveFormFactor darkMode={darkMode} currentIndex={page} i={12} fadeConfig={fadeConfig} />
            <NewResponsive darkMode={darkMode} currentIndex={page} i={13} fadeConfig={fadeConfig} />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default Fullpage