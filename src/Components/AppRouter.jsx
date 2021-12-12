import React from 'react'
import '../scss/main.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import { Spin as Hamburger } from 'hamburger-react'
import PageResearch from './PageResearch'
import PageCoral from './PageCoral'
import PageMockup from './PageMockup'


const AppRouter = () => {

    const [isOpen, setOpen] = useState(false)
    const closeMenu = () => {
        setOpen(false)
    }

    return (
        <>
            <Router basename={"/motion"}>
                <Header open={isOpen}>
                    <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
                </Header>
                <Routes>
                <Route path="/" element={<PageMockup open={isOpen} close={closeMenu} />} />
                    <Route path="/coral" element={<PageCoral open={isOpen} close={closeMenu} />} />
                    <Route path="/research" element={<PageResearch open={isOpen} close={closeMenu} />} />
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter
