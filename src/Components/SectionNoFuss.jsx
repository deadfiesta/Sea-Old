import React from 'react'
import SectionTitle from './SectionTitle'
import { MdExpandLess } from "react-icons/md";

const SectionNoFuss = () => {
  return (
    <section id="end">
      <div className="wrapper">
        <div className="content-container">
          <SectionTitle title="No Fuss, No Muss" subtitle="We will make your world spotless" />
          <button onClick={()=>document.getElementById('plans').scrollIntoView({block: "center"})}>Get Started <MdExpandLess /></button>
        </div>
      </div>
    </section>
  )
}

export default SectionNoFuss
