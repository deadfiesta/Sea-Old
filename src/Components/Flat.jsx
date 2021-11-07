import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { useLocation } from 'react-router'
import SectionCharacteristics from './SectionCharacteristics'
import SectionIntroduction from './SectionIntroduction'
import SectionExamples from './SectionExamples'
import SectionProsCons from './SectionProsCons'
import Grain from './Grain'

const Flat = ({ data }) => {
    const pathname = useLocation().pathname;
    const id = pathname.substring(1);
    const hasProsCons = data[1].pros !== undefined && data[1].cons !== undefined ? true : false;
    return (
        <div className={pathname === "/no-css" ? undefined : "page-container"} id={id}>
            <div className="wrapper">
                <Navbar />
                <Header />
                <SectionCharacteristics data={data} />
                <SectionIntroduction data={data} />
                <SectionExamples data={data} />
                {hasProsCons && <SectionProsCons data={data} />}
                {id === "glassmorphism" && <Grain />}
            </div>
        </div>
    )
}

export default Flat
