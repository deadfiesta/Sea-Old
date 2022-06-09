import ReactFullpage from '@fullpage/react-fullpage'
import { useState, useEffect } from 'react';
import Homepage from './Components/Homepage';
import ResponsiveDesignToday from './Components/ResponsiveDesignToday';
import PerceptionChanged from './Components/PerceptionChanged';
import GoodNews from './Components/GoodNews';
import Timeline from './Components/Timeline';

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
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default Fullpage